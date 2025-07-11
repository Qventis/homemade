export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: {
    from: number;
    currency: string;
  };
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  url?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
  budget?: string;
}
