# Landing Page Qventis - Agence Digitale

## 🚀 Description
Landing page moderne et responsive pour **Qventis**, agence digitale spécialisée dans la création de sites internet. Design avec des couleurs fraîches, corail et des dégradés dynamiques.

## 🛠️ Stack Technique

### Framework Principal
- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**

### Styling & UI
- **Tailwind CSS**
- **Headless UI** (composants accessibles gratuits)
- **Heroicons** (icônes gratuites)
- **Framer Motion** (animations)

### Fonctionnalités
- **React Hook Form** (formulaires)
- **Zod** (validation)
- **next-seo** (SEO optimisé)
- **Vercel Analytics** (analytics)

## 📦 Installation

```bash
# Créer le projet Next.js
npx create-next-app@latest qventis-landing --typescript --tailwind --eslint --app --src-dir

# Aller dans le dossier
cd qventis-landing

# Installer les dépendances
npm install framer-motion @headlessui/react @heroicons/react react-hook-form @hookform/resolvers zod next-seo @vercel/analytics clsx tailwind-merge

# Dépendances de développement
npm install -D @types/node
```

## 🎨 Configuration des Couleurs

### Palette Qventis
```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        qventis: {
          coral: '#FF6B6B',
          'coral-light': '#FF8E8E',
          'coral-dark': '#E85555',
          mint: '#4ECDC4',
          'mint-light': '#6FD7D1',
          'mint-dark': '#3BB5AE',
          ocean: '#45B7D1',
          'ocean-light': '#6AC5D8',
          'ocean-dark': '#3A9BC1',
          cream: '#FFF8F0',
          'gray-warm': '#F7F7F7',
          'gray-cool': '#E8F4F8',
        }
      },
      backgroundImage: {
        'gradient-coral': 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #45B7D1 0%, #FF6B6B 100%)',
        'gradient-mint': 'linear-gradient(135deg, #4ECDC4 0%, #45B7D1 100%)',
        'gradient-warm': 'linear-gradient(135deg, #FFF8F0 0%, #F7F7F7 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
```

## 📁 Structure du Projet

```
qventis-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── favicon.ico
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Container.tsx
│   │   │   └── Input.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   └── layout/
│   │       ├── Header.tsx
│   │       └── Navigation.tsx
│   ├── lib/
│   │   ├── utils.ts
│   │   └── validations.ts
│   ├── types/
│   │   └── index.ts
│   └── data/
│       ├── services.ts
│       ├── portfolio.ts
│       └── testimonials.ts
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero-bg.jpg
│   │   └── portfolio/
└── README.md
```

## 🎯 Sections de la Landing Page

### 1. Hero Section
- Titre accrocheur avec animation
- Sous-titre explicatif
- CTA principal
- Illustration/animation de fond

### 2. Services
- Création de sites web
- E-commerce
- Applications web
- SEO & Marketing digital
- Maintenance & Support

### 3. À Propos
- Présentation de l'agence
- Valeurs et mission
- Équipe (optionnel)

### 4. Portfolio
- Projets récents
- Études de cas
- Témoignages clients

### 5. Processus
- Étapes de collaboration
- Méthodes de travail
- Timeline type

### 6. Contact
- Formulaire de contact
- Informations de contact
- Localisation

### 7. Footer
- Liens utiles
- Réseaux sociaux
- Mentions légales

## 🚀 Commandes de Développement

```bash
# Développement
npm run dev

# Build de production
npm run build

# Démarrer en production
npm start

# Linting
npm run lint
```

## 🌐 Déploiement

### Vercel (Recommandé)
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel --prod
```

### Netlify
```bash
# Build command: npm run build
# Publish directory: out
```

## 📊 Optimisations Incluses

- **SEO** : Métadonnées, sitemap, structured data
- **Performance** : Images optimisées, lazy loading
- **Accessibilité** : ARIA labels, navigation clavier
- **Responsive** : Mobile-first design
- **Analytics** : Suivi des conversions

## 🎨 Design System

### Typographie
- **Titres** : Poppins (font-display)
- **Corps** : Inter (font-sans)
- **Poids** : 300, 400, 500, 600, 700, 800

### Espacement
- **Sections** : py-16 md:py-24
- **Conteneurs** : max-w-7xl mx-auto px-4
- **Éléments** : Échelle 4, 8, 12, 16, 24, 32

### Animations
- **Entrée** : fadeIn, slideUp
- **Hover** : Scale, couleur, ombre
- **Loading** : Skeleton, pulse

## 🔧 Configuration Recommandée

### VSCode Extensions
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- Auto Rename Tag

### Next.js Config
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
```

## 📝 TODO

- [ ] Créer les composants de base
- [ ] Implémenter les sections
- [ ] Ajouter les animations
- [ ] Optimiser les images
- [ ] Tests responsives
- [ ] Audit SEO
- [ ] Tests de performance
- [ ] Déploiement

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature
3. Commit les changements
4. Push la branche
5. Ouvrir une Pull Request

## 📄 Licence

MIT License - Libre d'utilisation pour Qventis

---

**Prêt à créer une landing page exceptionnelle pour Qventis ! 🚀**