import { Metadata } from 'next';
import { Navbar } from "@/components/navigation/Navbar";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { BlogCategories } from "@/components/blog/BlogCategories";
import { BlogNewsletter } from "@/components/blog/BlogNewsletter";
import { Footer } from "@/components/sections/Footer";
import { getAllArticles, getAllCategories } from "@/lib/blog/get-articles";
import { generateBlogSchema } from '@/lib/blog/blog-schema';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Blog Qventis | Expertise IA, Data et Développement Web',
  description: 'Découvrez nos articles sur l\'IA, la data science et le développement web. Conseils pratiques, tendances et tutoriels par nos experts.',
  keywords: 'blog tech, intelligence artificielle, data science, développement web, Next.js, React, analytics',
  alternates: {
    canonical: 'https://qventis.com/blog'
  },
  openGraph: {
    type: 'website',
    url: 'https://qventis.com/blog',
    title: 'Blog Qventis | Expertise IA, Data et Développement Web',
    description: 'Découvrez nos articles sur l\'IA, la data science et le développement web. Conseils pratiques, tendances et tutoriels par nos experts.',
    siteName: 'Qventis Blog',
    images: [{
      url: 'https://qventis.com/blog-hero.jpg',
      width: 1200,
      height: 630,
      alt: 'Blog Qventis'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Qventis | Expertise IA, Data et Dev Web',
    description: 'Articles, conseils et tendances sur l\'IA, la data science et le développement web par nos experts.',
    images: ['https://qventis.com/blog-hero.jpg']
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1
  }
};

export default async function BlogPage() {
  // Récupération des données du blog côté serveur
  const allArticles = await getAllArticles();
  const categories = await getAllCategories();
  
  // Préparation des articles pour le composant BlogGrid
  const featuredArticles = allArticles
    .filter((article: any) => article.featured)
    .slice(0, 3); // Limiter à 3 articles mis en avant
  
  const regularArticles = allArticles
    .filter((article: any) => !article.featured)
    .slice(0, 6); // Limiter à 6 articles réguliers
  
  // Génération des données structurées JSON-LD pour le blog
  const blogSchema = generateBlogSchema(allArticles.length);

  return (
    <main className="min-h-screen bg-qventis-white">
      {/* Données structurées JSON-LD */}
      <Script id="blog-schema" type="application/ld+json">
        {JSON.stringify(blogSchema)}
      </Script>
      <Navbar />
      
      {/* Hero Section */}
      <BlogHero />
      
      {/* Categories */}
      <BlogCategories categories={categories} />
      
      {/* Recent Articles */}
      <BlogGrid featuredArticles={featuredArticles} articles={regularArticles} />
      
      {/* Newsletter */}
      <BlogNewsletter />
      
      <Footer />
    </main>
  );
}
