import { Metadata } from 'next';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FAQHero } from '@/components/faq/FAQHero';
import { FAQContent } from '@/components/faq/FAQContent';
import { FAQCategories } from '@/components/faq/FAQCategories';
import { FAQSearch } from '@/components/faq/FAQSearch';
import { FAQContact } from '@/components/faq/FAQContact';
import { generateFAQSchema, generateFAQBreadcrumbSchema, exampleFAQItems } from '@/lib/faq/faq-schema';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'FAQ & Documentation - Qventis | Questions Fréquentes',
  description: 'Trouvez rapidement les réponses à vos questions sur nos services d\'IA, développement web et analyse de données. Documentation complète et support.',
  keywords: 'FAQ, documentation, aide, support, questions, réponses, Qventis, IA, développement web',
  openGraph: {
    title: 'FAQ & Documentation - Qventis | Questions Fréquentes',
    description: 'Centre d\'aide et documentation complète pour tous nos services d\'IA, développement web et data analytics',
    type: 'website',
    url: 'https://qventis.com/faq',
    siteName: 'Qventis FAQ',
    images: [{
      url: 'https://qventis.com/faq-hero.jpg',
      width: 1200,
      height: 630,
      alt: 'FAQ Qventis'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ & Documentation - Qventis',
    description: 'Réponses à vos questions sur nos services d\'IA, dev web et data analytics',
    images: ['https://qventis.com/faq-hero.jpg']
  },
  alternates: {
    canonical: 'https://qventis.com/faq'
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large'
  }
};

export default function FAQPage() {
  // Génération des données structurées JSON-LD pour la FAQ
  const faqSchema = generateFAQSchema(exampleFAQItems);
  const breadcrumbSchema = generateFAQBreadcrumbSchema();

  return (
    <main className="min-h-screen bg-qventis-white">
      {/* Données structurées JSON-LD */}
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Navbar />
      
      {/* Hero Section */}
      <FAQHero />
      
      {/* FAQ Content */}
      <FAQContent />
      
      {/* Contact Section */}
      <FAQContact />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
