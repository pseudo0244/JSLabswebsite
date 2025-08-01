import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFloat from '../WhatsAppFloat';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({ children, title, description }: LayoutProps) => {
  // Set page title and meta description
  if (title) {
    document.title = `${title} | JS Labs Diagnostic Center - Bengaluru`;
  }
  
  if (description) {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Layout;