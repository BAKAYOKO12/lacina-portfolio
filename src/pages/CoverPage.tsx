import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Cpu, Code, Zap } from 'lucide-react';
import EinsteinSecurityDialog from '@/components/ui/einstein-security-dialog';
import { useNavigate } from 'react-router-dom';

const CoverPage = () => {
  const [securityDialogOpen, setSecurityDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleAccessPortfolio = () => {
    setSecurityDialogOpen(true);
  };

  const handleSecuritySuccess = () => {
    navigate('/portfolio');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto space-y-12">
          
          {/* Logo/Avatar Section */}
          <div className="animate-fade-in-up">
            <div className="relative inline-block">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-8 shadow-2xl hover:scale-105 transition-transform duration-500">
                <div className="w-28 h-28 bg-background rounded-full flex items-center justify-center">
                  <Cpu className="w-12 h-12 text-primary animate-pulse" />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Welcome Section */}
          <div className="animate-fade-in-up space-y-4 md:space-y-6" style={{animationDelay: '0.2s'}}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
              🚀 Bienvenue
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/90">
              sur le portfolio de 
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mt-2">
                BAKAYOKO LACINA
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="animate-fade-in-up space-y-6 md:space-y-8" style={{animationDelay: '0.4s'}}>
            <div className="max-w-3xl mx-auto px-4">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                💻 Je suis passionné de <span className="text-primary font-semibold">technologies</span>, 
                spécialisé en <span className="text-accent font-semibold">automatisme industriel</span> et 
                <span className="text-primary font-semibold"> informatique</span>.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mt-3 md:mt-4">
                🎯 Découvrez mon univers où l'innovation rencontre la technologie, 
                où chaque projet raconte une histoire de <span className="text-accent font-semibold">créativité</span> et 
                d'<span className="text-primary font-semibold">expertise technique</span>.
              </p>
            </div>

            {/* Tech Icons */}
            <div className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8 mt-6 md:mt-8">
              <div className="p-3 sm:p-4 bg-primary/10 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}>
                <Code className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div className="p-3 sm:p-4 bg-accent/10 rounded-full animate-bounce" style={{animationDelay: '0.7s'}}>
                <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
              </div>
              <div className="p-3 sm:p-4 bg-primary/10 rounded-full animate-bounce" style={{animationDelay: '0.9s'}}>
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up px-4" style={{animationDelay: '0.6s'}}>
            <Button 
              onClick={handleAccessPortfolio}
              size="lg"
              className="relative group px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center space-x-2 sm:space-x-3">
                <span>✨ Accéder au Portfolio</span>
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            </Button>
            
            <p className="text-xs sm:text-sm text-muted-foreground mt-3 md:mt-4 animate-pulse">
              🔐 Sécurisé par une question de vérification
            </p>
          </div>
        </div>
      </div>

      {/* Security Dialog */}
      <EinsteinSecurityDialog
        open={securityDialogOpen}
        onOpenChange={setSecurityDialogOpen}
        onSuccess={handleSecuritySuccess}
      />
    </div>
  );
};

export default CoverPage;