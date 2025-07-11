'use client';

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  GlobeAltIcon,
  CpuChipIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  StarIcon,
  ArrowRightIcon,
  CheckIcon,
  BoltIcon,
  ClockIcon,
  PlayIcon,
  EyeIcon,
  ArrowTrendingUpIcon,
  UsersIcon,
  CurrencyDollarIcon,
  LightBulbIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";

export function ServicesHeroStyle() {
  const [activeTab, setActiveTab] = useState('websites');

  const services = [
    {
      id: 'websites',
      title: 'Sites Web Pro',
      subtitle: 'Design & Performance',
      icon: GlobeAltIcon,
      description: 'Sites web modernes qui convertissent vos visiteurs en clients',
      features: [
        { name: 'Design Sur-Mesure', desc: 'Interface unique et professionnelle', icon: '🎨' },
        { name: 'Performance Optimale', desc: 'Temps de chargement < 2s', icon: '⚡' },
        { name: 'SEO Intégré', desc: 'Visibilité Google garantie', icon: '📈' },
        { name: 'Mobile-First', desc: 'Parfait sur tous écrans', icon: '📱' }
      ],
      demo: {
        title: 'Site E-commerce Demo',
        metrics: { conversion: '+180%', speed: '1.2s', seo: '98/100' },
        preview: '🛒'
      },
      pricing: 'À partir de 2 500€',
      timeline: '3-4 semaines',
      satisfaction: '98%'
    },
    {
      id: 'ai-agents',
      title: 'Agents IA',
      subtitle: 'Automatisation Intelligente',
      icon: CpuChipIcon,
      description: 'Agents IA personnalisés qui automatisent vos processus métier',
      features: [
        { name: 'IA Conversationnelle', desc: 'Dialogue naturel 24/7', icon: '🤖' },
        { name: 'Apprentissage Continu', desc: 'Amélioration automatique', icon: '🧠' },
        { name: 'Intégration APIs', desc: 'Connect à vos outils', icon: '🔗' },
        { name: 'Multi-Plateformes', desc: 'Web, mobile, Slack...', icon: '📊' }
      ],
      demo: {
        title: 'Chatbot IA Demo',
        metrics: { automation: '+70%', response: '< 1s', accuracy: '94%' },
        preview: '🤖'
      },
      pricing: 'À partir de 4 000€',
      timeline: '4-6 semaines',
      satisfaction: '96%'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      subtitle: 'Intelligence Business',
      icon: ChartBarIcon,
      description: 'Dashboards intelligents qui transforment vos données en insights',
      features: [
        { name: 'Dashboards Temps Réel', desc: 'Vos KPIs en live', icon: '📊' },
        { name: 'Prédictions IA', desc: 'Anticipez les tendances', icon: '🔮' },
        { name: 'Rapports Auto', desc: 'Envoi programmé', icon: '📈' },
        { name: 'Alertes Smart', desc: 'Notifications intelligentes', icon: '🚨' }
      ],
      demo: {
        title: 'Dashboard Analytics Demo',
        metrics: { insights: '+40%', time: '- 60%', accuracy: '92%' },
        preview: '📊'
      },
      pricing: 'À partir de 3 000€',
      timeline: '2-3 semaines',
      satisfaction: '97%'
    },
    {
      id: 'it-solutions',
      title: 'Solutions IT',
      subtitle: 'Infrastructure & Sécurité',
      icon: WrenchScrewdriverIcon,
      description: 'Infrastructure cloud sécurisée qui scale avec votre croissance',
      features: [
        { name: 'Cloud Sécurisé', desc: 'AWS/Azure certified', icon: '☁️' },
        { name: 'Monitoring 24/7', desc: 'Surveillance continue', icon: '👁️' },
        { name: 'Backup Auto', desc: 'Sauvegarde quotidienne', icon: '💾' },
        { name: 'Support Dédié', desc: 'Équipe technique réactive', icon: '🛟' }
      ],
      demo: {
        title: 'Infrastructure Cloud Demo',
        metrics: { uptime: '99.9%', response: '< 24h', security: '100%' },
        preview: '☁️'
      },
      pricing: 'À partir de 1 500€/mois',
      timeline: '3-5 semaines',
      satisfaction: '99%'
    }
  ];

  const activeService = services.find(s => s.id === activeTab);

  return (
    <section id="services-hero" className="py-16 bg-gradient-to-b from-qventis-white to-qventis-gray-50">
      <Container>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-qventis-gray-900 mb-4">
            Explorez nos <span className="text-qventis-coral">expertises</span>
          </h2>
        </motion.div>

        {/* Services Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            const isActive = activeTab === service.id;
            
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-qventis-coral text-white shadow-lg scale-105' 
                    : 'bg-white text-qventis-gray-700 hover:bg-qventis-gray-50 border border-qventis-gray-200'
                }`}
              >
                <IconComponent className={`w-5 h-5 ${
                  isActive ? 'text-white' : 'text-qventis-coral'
                }`} />
                <span className="font-medium">{service.title}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Active Service Content */}
        {activeService && (
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-12 gap-12 items-start mb-16"
          >
            
            {/* Service Info - Left */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Service Header */}
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-qventis-coral/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <activeService.icon className="w-8 h-8 text-qventis-coral" />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-qventis-gray-900 mb-2">
                    {activeService.title}
                  </h3>
                  <p className="text-lg text-qventis-gray-600 font-medium">
                    {activeService.subtitle}
                  </p>
                  <p className="text-qventis-gray-700 mt-3 leading-relaxed">
                    {activeService.description}
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {activeService.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl border border-qventis-gray-100 hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-2xl flex-shrink-0">{feature.icon}</span>
                    <div>
                      <div className="font-semibold text-qventis-gray-900 mb-1">{feature.name}</div>
                      <div className="text-sm text-qventis-gray-600">{feature.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>

            {/* Demo Preview - Right */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-xl border border-qventis-gray-100 overflow-hidden"
              >
                {/* Demo Header */}
                <div className="bg-qventis-gray-50 px-6 py-4 border-b border-qventis-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium text-qventis-gray-700">{activeService.demo.title}</span>
                    </div>
                  </div>
                </div>

                {/* Demo Content */}
                <div className="p-6 space-y-6">
                  {/* Metrics Preview */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(activeService.demo.metrics).map(([key, value], idx) => (
                      <div key={key} className="text-center p-3 bg-qventis-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-qventis-coral">{value}</div>
                        <div className="text-xs text-qventis-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Progress Animation */}
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-qventis-gray-700">Performance en temps réel :</div>
                    {[
                      { label: "Efficacité", value: 95, color: 'bg-green-500' },
                      { label: "Satisfaction", value: parseInt(activeService.satisfaction), color: 'bg-qventis-coral' },
                      { label: "Rapidité", value: 92, color: 'bg-blue-500' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-16 text-xs text-qventis-gray-600">{item.label}</div>
                        <div className="flex-1 bg-qventis-gray-100 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.value}%` }}
                            transition={{ duration: 1.5, delay: idx * 0.2 + 1 }}
                            className={`h-full ${item.color} rounded-full`}
                          />
                        </div>
                        <div className="text-xs font-semibold text-qventis-gray-900 w-8">{item.value}%</div>
                      </div>
                    ))}
                  </div>

                  {/* Live Demo CTA */}
                  <div className="text-center pt-4 border-t border-qventis-gray-100">
                    <Button className="w-full bg-qventis-gray-900 hover:bg-qventis-gray-800 text-white rounded-lg py-3">
                      <EyeIcon className="w-4 h-4 mr-2" />
                      Voir la démo interactive
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

      </Container>
    </section>
  );
}
