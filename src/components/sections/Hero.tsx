import { Button } from '@/components/ui/button';
import { Download, Mail, MapPin, Phone, Car, Shield, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-industrial.jpg';
import profilePhoto from '@/assets/photo-profil.jpg';
import SecurityDialog from '@/components/ui/security-dialog';
import CVDownloadDialog from '@/components/ui/cv-download-dialog';
import { useSecurity } from '@/hooks/use-security';
import { useCVDownload } from '@/hooks/use-cv-download';

const Hero = () => {
  const {
    showRealContacts,
    securityDialogOpen,
    contactType,
    setSecurityDialogOpen,
    handleContactClick,
    handleSecuritySuccess,
  } = useSecurity();

  const {
    cvDialogOpen,
    handleDownloadClick,
    handleDialogClose
  } = useCVDownload();

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Main background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-gradient opacity-90"></div>
        </div>
        
        {/* Futuristic overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10"></div>
        
        {/* Animated geometric elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-accent/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-primary/30 rotate-12 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/6 w-16 h-16 bg-gradient-to-r from-accent/10 to-primary/10 blur-sm animate-pulse"></div>
        
        {/* Particle effects */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white animate-fade-in-up">
            {/* Futuristic title with glow effect */}
            <div className="relative mb-6 md:mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 blur-3xl rounded-full"></div>
              <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent animate-pulse">
                <span className="block">BAKAYOKO</span>
                <span className="block text-accent drop-shadow-2xl">LACINA</span>
              </h1>
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/10 to-primary/10 blur-lg -z-10 animate-pulse"></div>
            </div>
            
            <div className="mb-6 md:mb-8 space-y-4 md:space-y-6">
              {/* Enhanced description with glassmorphism */}
              <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl"></div>
                
                {/* ACTUALITÉ Badge */}
                <div className="relative mb-3 md:mb-4 flex items-center justify-center">
                  <div className="inline-flex items-center space-x-1.5 sm:space-x-2 bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-sm">
                    <span className="text-xl sm:text-2xl animate-pulse">📢</span>
                    <span className="text-accent font-semibold text-xs sm:text-sm tracking-wider uppercase">ACTUALITÉ</span>
                  </div>
                </div>
                
                <p className="relative text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed font-light text-center">
                  Étudiant en Dernière année de BUT Automatisme et Informatique Industrielle, je possède une solide base en automatisation, et en maintenance industrielle. Je suis à la recherche d'un <span className="text-accent font-medium">stage conventionné</span> d'une durée de <span className="text-accent font-medium">12 à 14 semaines</span>, du <span className="text-accent font-medium">02 Mars au 30 juin 2026</span>.
                </p>
              </div>
              
              {/* Futuristic tagline */}
              <div className="flex items-center space-x-3 justify-center">
                <Sparkles className="h-5 w-5 text-accent animate-pulse" />
                <p className="text-sm text-accent italic font-medium tracking-wider">
                  Transformons ensemble l'industrie de demain
                </p>
                <Sparkles className="h-5 w-5 text-accent animate-pulse" />
              </div>
            </div>

            {/* Enhanced Contact Info */}
            <div className="grid sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="flex items-center space-x-2 sm:space-x-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3 hover:bg-white/10 transition-all duration-300">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                <span className="text-gray-200 text-xs sm:text-sm">8 avenue du Bivaque, 54400 Longwy</span>
              </div>
              <div 
                className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3 hover:bg-accent/20 hover:border-accent/30 transition-all duration-300"
                onClick={() => handleContactClick('phone')}
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-accent group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                  {showRealContacts ? '07 51 14 44 15' : '07 51 14 XX XX'}
                  {!showRealContacts && <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-400 animate-pulse" />}
                </span>
              </div>
              <div 
                className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3 hover:bg-accent/20 hover:border-accent/30 transition-all duration-300"
                onClick={() => handleContactClick('email')}
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-accent group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm break-all">
                  {showRealContacts ? 'blacina34@gmail.com' : 'blacina34@XXXXX.com'}
                  {!showRealContacts && <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-400 animate-pulse flex-shrink-0" />}
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3">
                <Car className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                <span className="text-gray-200 text-xs sm:text-sm">Permis B + Véhicule</span>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button 
                size="lg" 
                className="relative group bg-gradient-to-r from-accent via-accent to-accent/80 hover:from-accent/90 hover:to-accent text-white shadow-2xl font-medium border-0 overflow-hidden"
                onClick={handleDownloadClick}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Download className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10">Télécharger mon CV</span>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="relative group border-2 border-accent/50 text-accent hover:bg-accent hover:text-white transition-all duration-300 shadow-2xl backdrop-blur-sm bg-white/5 overflow-hidden"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Mail className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10">Me contacter</span>
              </Button>
            </div>
          </div>

          {/* Right Column - Enhanced Professional Photo */}
          <div className="relative animate-slide-in-right mt-8 lg:mt-0">
            <div className="relative mx-auto w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Futuristic glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              
              {/* Main photo container */}
              <div className="relative inset-4 rounded-full border-4 border-accent/30 shadow-2xl overflow-hidden bg-gradient-to-br from-accent/10 to-primary/10 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                <img 
                  src={profilePhoto} 
                  alt="Bakayoko Lacina - Photo professionnelle" 
                  className="w-full h-full object-cover relative z-10"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Animated decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-white/10 animate-pulse"></div>
              <div className="absolute inset-8 rounded-full border border-accent/30 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Floating particles around photo */}
              <div className="absolute -inset-8">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-accent/40 rounded-full animate-pulse"
                    style={{
                      left: `${20 + Math.cos(i * Math.PI / 4) * 120}px`,
                      top: `${20 + Math.sin(i * Math.PI / 4) * 120}px`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: '3s'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats with glassmorphism */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-8 md:mt-12 lg:mt-16 animate-counter">
          {[
            { value: '+10', label: 'Projets académiques' },
            { value: '2', label: 'Expériences pro' },
            { value: '+10', label: 'Logiciels maîtrisés' },
            { value: '+2', label: 'Langues' }
          ].map((stat, index) => (
            <div key={index} className="text-center text-white group">
              <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-3 sm:p-4 hover:bg-white/10 hover:border-accent/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                  <div className="text-xs sm:text-sm opacity-75 leading-tight">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Dialog */}
      <SecurityDialog
        open={securityDialogOpen}
        onOpenChange={setSecurityDialogOpen}
        contactType={contactType}
        onSuccess={handleSecuritySuccess}
      />

      {/* CV Download Dialog */}
      <CVDownloadDialog
        open={cvDialogOpen}
        onOpenChange={handleDialogClose}
      />

      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="relative">
          <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
            <div className="w-1 h-3 bg-gradient-to-b from-accent to-primary rounded-full mt-2 animate-pulse"></div>
          </div>
          <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;