import Navigation from '@/components/ui/navigation';
import Competences from '@/components/sections/Competences';
import { useEffect } from 'react';

const CompetencesPage = () => {
  useEffect(() => {
    document.title = 'Compétences — Portfolio Bakayoko Lacina';
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Competences />
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

export default CompetencesPage;
