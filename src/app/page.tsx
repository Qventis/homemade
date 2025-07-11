"use client";

import { Navbar } from "@/components/navigation/Navbar";
import Hero from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WorkProcessV4 } from "@/components/sections/WorkProcess";
import { About } from "@/components/sections/About";
import { Portfolio } from "@/components/sections/Portfolio";

import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Analytics } from "@/components/Analytics";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>
      
      {/* Services Section */}
      <section id="services">
        <Services />
      </section>
      
      {/* Work Process Section */}
      <section id="work-process">
        <WorkProcessV4 />
      </section>
      
      {/* About Section */}
      <section id="about">
        <About />
      </section>
      
      {/* Portfolio Section */}
      <section id="portfolio">
        <Portfolio />
      </section>
      

      {/* CTA Section */}
      <CTA />
      
      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
      
      {/* Footer */}
      <Footer />
      
      {/* Analytics */}
      <Analytics />
    </main>
  );
}
