import { Quote } from 'lucide-react';
import lacinaPortrait from '@/assets/lacina-portrait.jpg';

const Dedicace = () => {
  return (
    <section id="dedicace" className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-accent/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-primary/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-accent/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header with elegant styling */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent w-16 sm:w-24"></div>
              <Quote className="mx-3 sm:mx-4 h-6 w-6 sm:h-8 sm:w-8 text-accent" />
              <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent w-16 sm:w-24"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 md:mb-4">
              Dédicace
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg italic px-4">
              "Avec reconnaissance et gratitude profonde"
            </p>
          </div>
          
          {/* Main content with elegant card design */}
          <div className="relative">
            {/* Background blur effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-card/60 via-background/40 to-card/60 backdrop-blur-lg rounded-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 rounded-3xl"></div>
            
            {/* Content */}
            <div className="relative p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 rounded-2xl md:rounded-3xl border border-border/50 shadow-hero">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
                {/* Portrait Section */}
                <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 mb-12 sm:mb-16">
                    {/* Futuristic glow effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute inset-2 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    
                    {/* Main photo container */}
                    <div className="relative w-full h-full rounded-full border-4 border-accent/30 shadow-2xl overflow-hidden bg-gradient-to-br from-accent/10 to-primary/10 backdrop-blur-sm">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                      <img 
                        src={lacinaPortrait} 
                        alt="Lacina Bakayoko - Portrait professionnel" 
                        className="w-full h-full object-cover object-center relative z-10"
                        style={{ objectPosition: 'center 25%' }}
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Animated decorative rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/10 animate-pulse pointer-events-none"></div>
                    <div className="absolute inset-4 rounded-full border border-accent/30 animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>
                    
                    {/* Floating particles around photo */}
                    <div className="absolute -inset-8 pointer-events-none">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-accent/40 rounded-full animate-pulse"
                          style={{
                            left: `${50 + Math.cos(i * Math.PI / 4) * 60}%`,
                            top: `${50 + Math.sin(i * Math.PI / 4) * 60}%`,
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: '3s'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Author info - Completely separated from photo */}
                  <div className="text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">Lacina Bakayoko</h3>
                    <p className="text-sm sm:text-base text-muted-foreground italic">Automatisme & Informatique Industrielle</p>
                    <p className="text-xs sm:text-sm text-accent mt-1 sm:mt-2">Diplômé en Génie Électrique</p>
                  </div>
                </div>

                {/* Dedication Content */}
                <div className="animate-fade-in-up mt-6 lg:mt-0" style={{animationDelay: '0.6s'}}>
                  {/* Quote icon */}
                  <Quote className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-accent/30 mb-6 sm:mb-8 animate-pulse" />
                  
                  <div className="space-y-6 sm:space-y-8 text-foreground/90 leading-relaxed">
                    {/* Each dedication with elegant styling */}
                    <div className="group animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                      <h3 className="text-lg sm:text-xl font-semibold text-accent mb-3 sm:mb-4 italic group-hover:text-accent/80 transition-colors duration-300">
                        À mes très chers parents,
                      </h3>
                      <blockquote className="text-sm sm:text-base md:text-lg italic text-muted-foreground leading-relaxed pl-4 sm:pl-6 border-l-2 border-accent/30 group-hover:border-accent/50 transition-colors duration-300">
                        "Pour votre amour inconditionnel, vos sacrifices silencieux,
                        votre bienveillance et vos prières constantes.
                        Je vous dois tout ce que je suis. Que Dieu vous protège et
                        vous comble de ses bienfaits."
                      </blockquote>
                    </div>
                    
                    <div className="group animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                      <h3 className="text-lg sm:text-xl font-semibold text-accent mb-3 sm:mb-4 italic group-hover:text-accent/80 transition-colors duration-300">
                        À ma famille toute entière,
                      </h3>
                      <blockquote className="text-sm sm:text-base md:text-lg italic text-muted-foreground leading-relaxed pl-4 sm:pl-6 border-l-2 border-accent/30 group-hover:border-accent/50 transition-colors duration-300">
                        "Merci pour votre soutien, votre confiance et votre présence
                        à chaque étape de mon parcours."
                      </blockquote>
                    </div>
                    
                    <div className="group animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                      <h3 className="text-lg sm:text-xl font-semibold text-accent mb-3 sm:mb-4 italic group-hover:text-accent/80 transition-colors duration-300">
                        À mes enseignants et camarades,
                      </h3>
                      <blockquote className="text-sm sm:text-base md:text-lg italic text-muted-foreground leading-relaxed pl-4 sm:pl-6 border-l-2 border-accent/30 group-hover:border-accent/50 transition-colors duration-300">
                        "Pour les connaissances partagées, les échanges constructifs
                        et les souvenirs inoubliables."
                      </blockquote>
                    </div>
                    
                    <div className="group animate-fade-in-up" style={{animationDelay: '1.0s'}}>
                      <h3 className="text-lg sm:text-xl font-semibold text-accent mb-3 sm:mb-4 italic group-hover:text-accent/80 transition-colors duration-300">
                        À tous ceux qui me sont chers,
                      </h3>
                      <blockquote className="text-sm sm:text-base md:text-lg italic text-muted-foreground leading-relaxed pl-4 sm:pl-6 border-l-2 border-accent/30 group-hover:border-accent/50 transition-colors duration-300">
                        "Recevez à travers ce travail le témoignage de mon estime,
                        de mon attachement et de ma gratitude profonde."
                      </blockquote>
                    </div>
                  </div>
                  
                  {/* Decorative quote at the bottom */}
                  <Quote className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-accent/20 ml-auto mt-6 sm:mt-8 rotate-180 animate-pulse" />
                </div>
              </div>
              
              {/* Signature with elegant styling */}
              <div className="text-center mt-12 pt-8 border-t border-accent/20 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 blur-xl rounded-full"></div>
                  <p className="relative text-2xl font-bold text-primary italic">
                    — Lacina Bakayoko
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dedicace;