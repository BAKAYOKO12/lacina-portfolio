import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useSecurity } from '@/hooks/use-security';
import { useCVDownload } from '@/hooks/use-cv-download';
import SecurityDialog from '@/components/ui/security-dialog';
import CVDownloadDialog from '@/components/ui/cv-download-dialog';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailjs';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Download, 
  Linkedin, 
  Github,
  ExternalLink,
  Shield
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Paramètres du template EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: EMAILJS_CONFIG.TO_EMAIL
      };

      // Envoi de l'email via EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      toast({
        title: "Message envoyé !",
        description: "Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: showRealContacts ? "blacina34@gmail.com" : "blacina34@XXXXX.com",
      href: showRealContacts ? "mailto:blacina34@gmail.com" : "#",
      isProtected: true,
      type: 'email' as const
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: showRealContacts ? "07 51 14 44 15" : "07 51 14 XX XX",
      href: showRealContacts ? "tel:+33751144415" : "#",
      isProtected: true,
      type: 'phone' as const
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: "8 avenue du Bivaque, 54400 Longwy",
      href: "https://maps.google.com/?q=8+avenue+du+Bivaque+54400+Longwy",
      isProtected: false
    }
  ];

  const socialLinks = [
    {
      icon: Download,
      label: "Télécharger CV",
      href: "#",
      variant: "default" as const,
      onClick: handleDownloadClick
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit",
      variant: "outline" as const
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/lacina-bakayoko",
      variant: "outline" as const
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 md:mb-4">Contact</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter d'opportunités de stage ou d'emploi
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Send className="h-5 w-5 text-accent mr-2" />
                Envoyez-moi un message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre.email@exemple.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Objet de votre message"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Votre message..."
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-accent hover:bg-accent/90 text-white"
                >
                  {isLoading ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Envoyer le message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            {/* Contact Details */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Informations de contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const isClickable = info.isProtected ? !showRealContacts : true;
                  
                  const handleClick = (e: React.MouseEvent) => {
                    if (info.isProtected && !showRealContacts) {
                      e.preventDefault();
                      handleContactClick(info.type!);
                    }
                  };
                  
                  return (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      onClick={handleClick}
                      className={`flex items-start space-x-4 p-3 rounded-lg transition-colors group ${
                        isClickable || !info.isProtected
                          ? 'hover:bg-muted/50 cursor-pointer'
                          : 'hover:bg-amber-50/50 cursor-pointer'
                      }`}
                    >
                      <div className="flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                          {info.label}
                        </p>
                        <div className="flex items-center gap-2">
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {info.value}
                          </p>
                          {info.isProtected && !showRealContacts && (
                            <Shield className="h-4 w-4 text-amber-500 animate-pulse" />
                          )}
                        </div>
                      </div>
                      {info.href.startsWith('http') && (
                        <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Liens utiles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <Button
                      key={index}
                      variant={link.variant}
                      className="w-full justify-start"
                      onClick={link.onClick || undefined}
                      asChild={!link.onClick}
                    >
                      {link.onClick ? (
                        <>
                          <IconComponent className="h-4 w-4 mr-2" />
                          {link.label}
                        </>
                      ) : (
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          <IconComponent className="h-4 w-4 mr-2" />
                          {link.label}
                        </a>
                      )}
                    </Button>
                  );
                })}
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Disponibilité</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Statut actuel</span>
                    <span className="text-accent font-medium">Étudiant BUT 3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Recherche</span>
                    <span className="text-foreground">Stage/Alternance</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Mobilité</span>
                    <span className="text-foreground">France/Europe</span>
                  </div>
                </div>
              </CardContent>
            </Card>
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
      </div>
    </section>
  );
};

export default Contact;