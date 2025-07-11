import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "sites-web",
    title: "Sites Web",
    description: "Sites modernes, rapides et optimisés pour tous les appareils",
    icon: "GlobeAltIcon",
    features: [
      "Design responsive et moderne",
      "Optimisation SEO avancée",
      "Performance ultra-rapide",
      "Interface utilisateur intuitive",
      "Sécurité renforcée",
      "Maintenance incluse"
    ],
    price: {
      from: 1500,
      currency: "€"
    }
  },
  {
    id: "agents-ia",
    title: "Agents IA",
    description: "Intelligence artificielle sur mesure pour automatiser vos processus",
    icon: "CpuChipIcon",
    features: [
      "Chatbots intelligents",
      "Analyse de données automatisée",
      "Personnalisation avancée",
      "Intégration API",
      "Formation continue",
      "Support technique"
    ],
    price: {
      from: 2500,
      currency: "€"
    }
  },
  {
    id: "solutions-digitales",
    title: "Solutions Digitales",
    description: "Applications web et mobiles personnalisées",
    icon: "DevicePhoneMobileIcon",
    features: [
      "Applications web progressives",
      "Applications mobiles natives",
      "Tableaux de bord personnalisés",
      "Intégrations système",
      "Base de données optimisée",
      "Déploiement cloud"
    ],
    price: {
      from: 3500,
      currency: "€"
    }
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description: "Boutiques en ligne performantes et sécurisées",
    icon: "ShoppingCartIcon",
    features: [
      "Catalogue produits avancé",
      "Paiement sécurisé multi-devises",
      "Gestion des commandes",
      "Système de fidélité",
      "Analytics et reporting",
      "Marketing automation"
    ],
    price: {
      from: 2000,
      currency: "€"
    }
  },
  {
    id: "seo-marketing",
    title: "SEO & Marketing",
    description: "Référencement naturel et marketing digital",
    icon: "ChartBarIcon",
    features: [
      "Audit SEO complet",
      "Optimisation technique",
      "Création de contenu",
      "Campagnes publicitaires",
      "Réseaux sociaux",
      "Reporting mensuel"
    ],
    price: {
      from: 800,
      currency: "€"
    }
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    description: "Support technique et maintenance continue",
    icon: "WrenchScrewdriverIcon",
    features: [
      "Mises à jour sécurisées",
      "Sauvegarde automatique",
      "Monitoring 24/7",
      "Support technique prioritaire",
      "Optimisation continue",
      "Garantie de disponibilité"
    ],
    price: {
      from: 200,
      currency: "€/mois"
    }
  }
];
