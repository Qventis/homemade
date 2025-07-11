import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import { Navbar } from '@/components/navigation/Navbar';
import { BlogComments } from '@/components/blog/BlogComments';
import { Footer } from '@/components/sections/Footer';
import { getArticleBySlug, getAllArticles, getRelatedArticles } from '@/lib/blog/get-articles';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { generateArticleSchema, generateBreadcrumbSchema, generateRelatedArticlesSchema } from '@/lib/blog/blog-schema';
import Script from 'next/script';

// Types pour les paramètres de page
type Props = {
  params: {
    slug: string;
  };
};

// Génération des métadonnées pour le SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Attendre les params avant d'utiliser leurs propriétés
  const resolvedParams = await Promise.resolve(params);
  const { slug } = resolvedParams;
  const article = await getArticleBySlug(slug);
  
  if (!article) {
    return {
      title: 'Article introuvable | Blog Qventis',
      description: 'Cet article n\'existe pas ou a été déplacé.'
    };
  }

  return {
    title: `${article.title} | Blog Qventis`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | Blog Qventis`,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
    },
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
  };
}

// Génération des paramètres statiques pour les routes statiques
export async function generateStaticParams() {
  const articles = await getAllArticles();
  
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// Composant principal de la page d'article
export default async function BlogPostPage({ params }: Props) {
  // Attendre les params avant d'utiliser leurs propriétés
  const resolvedParams = await Promise.resolve(params);
  const { slug } = resolvedParams;
  const article = await getArticleBySlug(slug);
  
  if (!article) {
    notFound();
  }

  // Nous utilisons ReactMarkdown à la place de MDX pour éviter les erreurs de parsing

  // Récupération des articles liés
  const relatedArticles = await getRelatedArticles(article, 3);

  // Génération des données structurées JSON-LD pour l'article
  const articleSchema = generateArticleSchema(article);
  const breadcrumbSchema = generateBreadcrumbSchema(article);
  const relatedArticlesSchema = generateRelatedArticlesSchema(relatedArticles);

  return (
    <main className="min-h-screen bg-qventis-white">
      <Script id="article-schema" type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </Script>
      <Script id="breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="related-articles-schema" type="application/ld+json">
        {JSON.stringify(relatedArticlesSchema)}
      </Script>
      <Navbar />
      
      {/* En-tête de l'article */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-qventis-white to-qventis-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-4">
            <span className="bg-qventis-coral/10 text-qventis-coral px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-qventis-gray-900 mb-4">
            {article.title}
          </h1>
          <p className="text-xl text-qventis-gray-600 mb-6">
            {article.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-qventis-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-qventis-coral/20 rounded-full flex items-center justify-center">
                <span className="text-xs font-semibold text-qventis-coral">
                  {article.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <span>{article.author}</span>
            </div>
            <span>•</span>
            <span>{new Date(article.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>•</span>
            <span>{article.readTime}</span>
            <span>•</span>
            <span>{article.views} vues</span>
          </div>
        </div>
      </section>

      {/* Contenu de l'article */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-3xl">
          <article className="prose prose-lg max-w-none">
            {/* Affichage du contenu avec ReactMarkdown et plugins pour un meilleur rendu */}
            {article.content && (
              <div className="prose prose-lg prose-gray max-w-none markdown-qventis">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                >
                  {article.content}
                </ReactMarkdown>
              </div>
            )}
          </article>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-qventis-gray-200">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-qventis-gray-100 text-qventis-gray-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Articles liés */}
      <section className="py-12 bg-qventis-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Articles similaires</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedArticles.map((relatedArticle) => (
              <div key={relatedArticle.slug} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="text-xs text-qventis-gray-500 mb-2">{relatedArticle.category}</div>
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{relatedArticle.title}</h3>
                  <p className="text-sm text-qventis-gray-600 line-clamp-3 mb-4">{relatedArticle.excerpt}</p>
                  <a href={`/blog/${relatedArticle.slug}`} className="text-qventis-coral text-sm font-medium hover:underline">
                    Lire l'article →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Commentaires */}
      <BlogComments articleId={parseInt(article.id) || 0} />
      
      <Footer />
    </main>
  );
}