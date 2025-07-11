'use client';

import { motion } from 'framer-motion';
import { 
  CheckIcon,
  XMarkIcon,
  StarIcon,
  ArrowRightIcon,
  CurrencyEuroIcon,
  GlobeAltIcon,
  CpuChipIcon,
  ChartBarIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function Pricing() {
  const pricingPlans = [
    {
      id: 'starter',
      name: 'Site Vitrine',
      subtitle: 'Parfait pour débuter',
      price: '1,200',
      period: 'projet',
      icon: GlobeAltIcon,
      color: 'from-blue-500 to-cyan-500',
      popular: false,
      features: [
        'Site responsive jusqu\'à 5 pages',
        'Design moderne et professionnel',
        'Optimisation SEO de base',
        'Hébergement 1 an inclus',
        'Certificat SSL gratuit',
        'Support email',
        'Formation à l\'administration',
        'Garantie 3 mois'
      ],
      notIncluded: [
        'E-commerce',
        'Animations avancées',
        'Intégrations tierces',
        'Support prioritaire'
      ],
      cta: 'Commencer',
      timeline: '2-3 semaines'
    },
    {
      id: 'professional',
      name: 'Solutions IA',
      subtitle: 'Pour l\'automatisation',
      price: '2,500',
      period: 'projet',
      icon: CpuChipIcon,
      color: 'from-qventis-coral to-pink-500',
      popular: true,
      features: [
        'Agent IA conversationnel personnalisé',
        'Intégration multicanal',
        'Base de connaissances avancée',
        'Analytics et rapports détaillés',
        'Formation et déploiement',
        'Support prioritaire 3 mois',
        'Mises à jour incluses',
        'Maintenance proactive'
      ],
      notIncluded: [
        'Développement sur-mesure',
        'Intégrations complexes'
      ],
      cta: 'Choisir Pro',
      timeline: '3-4 semaines'
    },
    {
      id: 'enterprise',
      name: 'Solutions Data',
      subtitle: 'Analytics & BI',
      price: '1,800',
      period: 'projet',
      icon: ChartBarIcon,
      color: 'from-orange-500 to-amber-500',
      popular: false,
      features: [
        'Dashboards interactifs personnalisés',
        'Analyses prédictives avancées',
        'Rapports automatisés',
        'Intégrations API multiples',
        'Visualisations temps réel',
        'Formation équipe complète',
        'Support dédié 6 mois',
        'Évolutivité garantie'
      ],
      notIncluded: [
        'Infrastructure cloud',
        'Consultancy stratégique'
      ],
      cta: 'Solutions Data',
      timeline: '3-5 semaines'
    }
  ];

  const customSolution = {
    title: 'Solution Sur-mesure',
    subtitle: 'Projet complexe ou spécifique ?',
    features: [
      'Analyse complète de vos besoins',
      'Architecture technique personnalisée',
      'Développement 100% sur-mesure',
      'Tests et validation approfondis',
      'Déploiement accompagné',
      'Formation et documentation',
      'Support long terme',
      'Évolutions futures'
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-qventis-white to-qventis-gray-50">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-qventis-coral/10 rounded-full mb-6">
            <CurrencyEuroIcon className="w-4 h-4 text-qventis-coral" />
            <span className="text-sm font-semibold text-qventis-coral">Tarifs</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-qventis-gray-900 mb-6">
            Des tarifs
            <span className="text-qventis-coral"> transparents</span>
          </h2>
          
          <p className="text-xl text-qventis-gray-600 leading-relaxed">
            Choisissez la solution qui correspond à vos besoins et votre budget. 
            Tous nos tarifs incluent la conception, le développement et la mise en ligne.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <motion.div
                key={plan.id}
                variants={cardVariants}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  plan.popular ? 'border-2 border-qventis-coral lg:scale-105' : 'border border-qventis-gray-100'
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-qventis-coral text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <StarIcon className="w-4 h-4" />
                      Plus populaire
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-qventis-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-qventis-gray-600 mb-4">
                      {plan.subtitle}
                    </p>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-qventis-gray-900">
                        {plan.price}€
                      </span>
                      <span className="text-qventis-gray-600 ml-2">
                        / {plan.period}
                      </span>
                    </div>
                    <p className="text-sm text-qventis-gray-500">
                      Livraison en {plan.timeline}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckIcon className="w-5 h-5 text-qventis-coral flex-shrink-0 mt-0.5" />
                        <span className="text-qventis-gray-700 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, idx) => (
                      <div key={`not-${idx}`} className="flex items-start gap-3 opacity-50">
                        <XMarkIcon className="w-5 h-5 text-qventis-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-qventis-gray-500 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    variant={plan.popular ? "coral" : "ghost"}
                    size="lg"
                    className={`w-full justify-center ${
                      plan.popular 
                        ? 'shadow-lg' 
                        : 'border border-qventis-gray-200 hover:border-qventis-coral text-qventis-coral'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Custom solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-qventis-coral/5 to-qventis-coral/10 rounded-2xl p-8 lg:p-12 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-qventis-coral rounded-xl flex items-center justify-center">
                  <SparklesIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-qventis-gray-900">
                    {customSolution.title}
                  </h3>
                  <p className="text-qventis-gray-600">
                    {customSolution.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-qventis-gray-700 mb-6">
                Votre projet nécessite une approche unique ? Nous créons des solutions 
                100% personnalisées adaptées à vos besoins spécifiques et vos contraintes.
              </p>
              <Button
                variant="coral"
                size="lg"
                className="shadow-lg"
              >
                Demander un devis
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {customSolution.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-qventis-coral flex-shrink-0" />
                  <span className="text-sm text-qventis-gray-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-white rounded-2xl p-8 lg:p-12 shadow-lg"
        >
          <h3 className="text-2xl font-display font-bold text-qventis-gray-900 mb-6">
            Questions fréquentes sur nos tarifs
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold text-qventis-gray-900 mb-2">
                Les tarifs incluent-ils l'hébergement ?
              </h4>
              <p className="text-qventis-gray-600 text-sm">
                Oui, la première année d'hébergement est incluse dans tous nos forfaits sites web.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-qventis-gray-900 mb-2">
                Proposez-vous un paiement échelonné ?
              </h4>
              <p className="text-qventis-gray-600 text-sm">
                Absolument ! Nous acceptons les paiements en 2 ou 3 fois sans frais.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-qventis-gray-900 mb-2">
                Que se passe-t-il après la livraison ?
              </h4>
              <p className="text-qventis-gray-600 text-sm">
                Nous offrons une garantie et un support inclus selon le forfait choisi.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-qventis-gray-900 mb-2">
                Puis-je modifier mon projet en cours ?
              </h4>
              <p className="text-qventis-gray-600 text-sm">
                Oui, des modifications mineures sont possibles. Les changements majeurs peuvent nécessiter un avenant.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Pricing;
