import { Quote, Brain } from 'lucide-react';
import einsteinPortrait from '@/assets/einstein-portrait.jpg';

const Citation = () => {
  return (
    <section id="citation" className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-muted/30 via-background to-muted/30 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 right-16 w-40 h-40 border border-primary/30 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-16 w-28 h-28 border border-accent/30 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-primary/20 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header with elegant styling */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-16 sm:w-24"></div>
              <Brain className="mx-3 sm:mx-4 h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-16 sm:w-24"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 md:mb-4">
              Citation Inspirante
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg italic px-4">
              "Des mots qui éclairent le chemin"
            </p>
          </div>
          
          {/* Main content with portrait and quote */}
          <div className="relative">
            {/* Background blur effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-card/60 via-background/40 to-card/60 backdrop-blur-lg rounded-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl"></div>
            
            {/* Content */}
            <div className="relative p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 rounded-2xl md:rounded-3xl border border-border/50 shadow-hero">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
                {/* Portrait Section */}
                <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80">
                    <div className="absolute inset-0 rounded-full border-4 border-primary/20 shadow-hero overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                      <img 
                        src={einsteinPortrait} 
                        alt="Albert Einstein - Physicien théoricien" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    {/* Decorative rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-pulse"></div>
                    <div className="absolute -inset-4 rounded-full border border-primary/20 animate-pulse delay-500"></div>
                  </div>
                  
                  {/* Author info */}
                  <div className="text-center mt-4 sm:mt-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">Albert Einstein</h3>
                    <p className="text-sm sm:text-base text-muted-foreground italic">Physicien théoricien (1879-1955)</p>
                    <p className="text-xs sm:text-sm text-accent mt-1 sm:mt-2">Prix Nobel de Physique 1921</p>
                  </div>
                </div>

                {/* Quote Section */}
                <div className="animate-fade-in-up mt-6 lg:mt-0" style={{animationDelay: '0.6s'}}>
                  {/* Quote icon */}
                  <Quote className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary/30 mb-4 sm:mb-6 animate-pulse" />
                  
                  <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl italic text-foreground/90 leading-relaxed mb-6 sm:mb-8 pl-4 sm:pl-6 border-l-2 sm:border-l-4 border-primary/30">
                    "L'éducation est ce qui reste quand on a oublié tout ce qu'on a appris à l'école. La seule chose que vous devez savoir, c'est comment faire confiance à votre propre inconscient, et cela prend du courage."
                  </blockquote>
                  
                  {/* Secondary quote */}
                  <div className="group">
                    <Quote className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-accent/40 mb-3 sm:mb-4 group-hover:text-accent/60 transition-colors duration-300" />
                    <blockquote className="text-sm sm:text-base md:text-lg italic text-muted-foreground leading-relaxed pl-4 sm:pl-6 border-l-2 border-accent/30 group-hover:border-accent/50 transition-colors duration-300">
                      "Il n'y a que deux façons de vivre sa vie : l'une en faisant comme si rien n'était un miracle, l'autre en faisant comme si tout était un miracle."
                    </blockquote>
                  </div>
                  
                  {/* Decorative element */}
                  <div className="mt-8 flex items-center justify-end">
                    <div className="h-px bg-gradient-to-l from-primary/50 to-transparent w-32"></div>
                    <Quote className="ml-4 h-8 w-8 text-primary/20 rotate-180" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Inspirational message */}
          <div className="text-center mt-12 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-xl rounded-full"></div>
              <p className="relative text-lg italic text-muted-foreground">
                "Que ces mots nous inspirent dans notre quête de connaissance et d'excellence"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Citation;