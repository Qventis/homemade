'use client';

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { 
  SparklesIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CpuChipIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CodeBracketIcon,
  ArrowUpIcon
} from "@heroicons/react/24/outline";

export function Footer() {
  const services = [
    { name: "Agents IA", icon: CpuChipIcon, href: "#services" },
    { name: "Data Analytics", icon: ChartBarIcon, href: "#services" },
    { name: "Sites Web", icon: GlobeAltIcon, href: "#services" },
    { name: "Solutions IT", icon: CodeBracketIcon, href: "#services" }
  ];

  const quickLinks = [
    { name: "À propos", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Clients", href: "#customers" },
    { name: "Contact", href: "#contact" }
  ];

  const legalLinks = [
    { name: "Mentions légales", href: "#" },
    { name: "Politique de confidentialité", href: "#" },
    { name: "Conditions d'utilisation", href: "#" },
    { name: "RGPD", href: "#" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-qventis-white to-qventis-white text-white relative overflow-hidden">
      
      {/* Effet de fond décoratif */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-qventis-coral rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-400 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-purple-400 rounded-full blur-xl" />
      </div>

      <Container>


        {/* Section du bas */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <p className="text-qventis-gray-400 text-sm">
                © 2024 Qventis. Tous droits réservés. 
                <span className="text-qventis-coral ml-2">Made with ❤️ in France</span>
              </p>
            </motion.div>

            {/* Liens légaux */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6"
            >
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-qventis-gray-400 hover:text-qventis-coral text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>

          </div>
        </div>

      </Container>
    </footer>
  );
}
