import { DefaultSeoProps } from 'next-seo';

const SEO: DefaultSeoProps = {
  titleTemplate: "%s | Qventis",
  defaultTitle: "Qventis - Agence Digitale IA & Data",
  description:
    "Qventis est une agence digitale qui crée des sites web, algorithmes IA et solutions data sur mesure pour les entreprises.",
  canonical: "https://qventis.fr",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://qventis.fr",
    site_name: "Qventis",
    title: "Qventis - Agence Digitale IA & Data",
    description:
      "Agence digitale spécialisée en IA, création de sites web performants, data et automatisation.",
    images: [
      {
        url: "https://qventis.fr/og-image.jpg", // remplace par ton image réelle
        width: 1200,
        height: 630,
        alt: "Qventis - Agence Digitale IA & Data",
      },
    ],
  },
  twitter: {
    handle: "@qventis",
    site: "@qventis",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "author",
      content: "Qventis",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
};

export default SEO;
