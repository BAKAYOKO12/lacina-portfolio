import Navigation from '@/components/ui/navigation';
import Projets from '@/components/sections/Projets';
import { useEffect } from 'react';

const ProjetsPage = () => {
  useEffect(() => {
    document.title = 'Projets — Portfolio Bakayoko Lacina';
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Projets />
      </main>
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-75">
            © 2024 Bakayoko Lacina. Portfolio professionnel - Automatisme & Informatique Industrielle
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProjetsPage;
