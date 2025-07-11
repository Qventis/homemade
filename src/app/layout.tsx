import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { seoConfig, generateMetaTags } from "@/lib/seo";
import { Analytics } from "@/components/Analytics";
import { FirebaseProvider } from "@/providers/FirebaseProvider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true
});

const poppins = Poppins({ 
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  preload: true
});

const metaTags = generateMetaTags();

export const metadata: Metadata = {
  title: metaTags.title,
  description: metaTags.description,
  keywords: metaTags.keywords,
  authors: [{ name: metaTags.author }],
  robots: metaTags.robots,

  openGraph: {
    type: "website",
    siteName: seoConfig.openGraph.siteName,
    title: seoConfig.openGraph.title,
    description: seoConfig.openGraph.description,
    url: seoConfig.openGraph.url,
    images: seoConfig.openGraph.images,
    locale: "fr_FR"
  },
  twitter: {
    card: "summary_large_image",
    site: seoConfig.twitter.site,
    creator: seoConfig.twitter.creator,
    title: seoConfig.twitter.title,
    description: seoConfig.twitter.description,
    images: [seoConfig.twitter.image]
  },
  alternates: {
    canonical: seoConfig.openGraph.url
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Données structurées JSON-LD pour l'organisation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoConfig.jsonLd)
          }}
        />
        
        {/* Données structurées pour le business local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoConfig.localBusiness)
          }}
        />
        
        {/* Preconnect pour les performances */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        
        {/* Favicon et icônes */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#FF6B6B" />
        <meta name="msapplication-TileColor" content="#FF6B6B" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <FirebaseProvider>
          {children}
          <Analytics />
        </FirebaseProvider>
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HTG5CBVHTD" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HTG5CBVHTD');
            `
          }}
        />
      </body>
    </html>
  );
}
