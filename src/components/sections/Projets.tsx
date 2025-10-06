import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Code, Settings, Zap, Filter } from 'lucide-react';

// Import project images
import parkingImage from '@/assets/projet-parking.jpg';
import echangeurImage from '@/assets/projet-echangeur.jpg';
import bancMoteurImage from '@/assets/projet-banc-moteur.jpg';
import arduinoImage from '@/assets/projet-arduino.jpg';
import portiqueImage from '@/assets/projet-portique.jpg';
import scadaImage from '@/assets/projet-scada.jpg';

const Projets = () => {
  const [activeFilter, setActiveFilter] = useState('tous');

  const categories = [
    { id: 'tous', label: 'Tous les projets', icon: Settings },
    { id: 'automatisme', label: 'Automatisme', icon: Settings },
    { id: 'scada', label: 'SCADA', icon: Code },
    { id: 'electronique', label: 'Électronique', icon: Zap }
  ];

  const projets = [
    {
      id: 1,
      title: "SAE 3.01 : Automatisation d'un Parking",
      category: 'automatisme',
      description: "Conception et programmation d'un système automatisé de gestion de parking avec contrôle d'accès, détection de véhicules et interface de supervision.",
      technologies: ["TIA Portal", "Automate Siemens", "SCADA", "Modbus"],
      image: parkingImage,
      status: "completed",
      features: [
        "Système de barrières automatiques",
        "Détection de présence véhicules",
        "Interface de supervision",
        "Gestion des places disponibles"
      ]
    },
    {
      id: 2,
      title: "SAE 3.01 : Échangeur thermique",
      category: 'automatisme',
      description: "Modélisation et régulation automatique d'un échangeur thermique avec contrôle de température et supervision des paramètres thermodynamiques.",
      technologies: ["MATLAB", "Simulink", "Régulation PID", "Capteurs"],
      image: echangeurImage,
      status: "completed",
      features: [
        "Modélisation thermodynamique",
        "Régulation PID température",
        "Supervision temps réel",
        "Analyse des performances"
      ]
    },
    {
      id: 3,
      title: "SAE 4.01 : Banc moteur automatisé",
      category: 'automatisme',
      description: "Développement d'un banc d'essai automatisé pour moteurs avec acquisition de données, contrôle de vitesse et analyse des performances.",
      technologies: ["Automate Schneider", "HMI", "Acquisition données", "LabVIEW"],
      image: bancMoteurImage,
      status: "completed",
      features: [
        "Contrôle automatique vitesse",
        "Acquisition données temps réel",
        "Interface opérateur HMI",
        "Analyse performances moteur"
      ]
    },
    {
      id: 4,
      title: "Enceinte thermostat Arduino",
      category: 'electronique',
      description: "Conception d'une enceinte climatique régulée avec Arduino pour maintenir température et humidité constantes avec interface de contrôle.",
      technologies: ["Arduino", "Capteurs DHT22", "Régulation", "Interface LCD"],
      image: arduinoImage,
      status: "completed",
      features: [
        "Régulation température/humidité",
        "Interface utilisateur LCD",
        "Système d'alarmes",
        "Logging des données"
      ]
    },
    {
      id: 5,
      title: "Portique de manutention",
      category: 'automatisme',
      description: "Automatisation d'un portique de manutention industriel avec contrôle de position, gestion de charges et sécurité intégrée.",
      technologies: ["API Siemens", "Variateurs", "Encodeurs", "SCADA"],
      image: portiqueImage,
      status: "completed",
      features: [
        "Contrôle position 3 axes",
        "Gestion sécurité intégrée",
        "Interface SCADA",
        "Optimisation trajectoires"
      ]
    },
    {
      id: 6,
      title: "Système supervision SCADA",
      category: 'scada',
      description: "Développement d'une interface de supervision complète pour ligne de production avec monitoring temps réel et historisation des données.",
      technologies: ["WinCC", "Modbus TCP/IP", "Base de données", "Alarmes"],
      image: scadaImage,
      status: "completed",
      features: [
        "Supervision temps réel",
        "Historisation données",
        "Gestion alarmes",
        "Rapports automatiques"
      ]
    }
  ];

  const filteredProjets = activeFilter === 'tous' 
    ? projets 
    : projets.filter(projet => projet.category === activeFilter);

  return (
    <section id="projets" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 md:mb-4">Projets Académiques</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Portfolio de projets en automatisme, SCADA et électronique industrielle
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm"
                size="sm"
              >
                <IconComponent className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="hidden xs:inline sm:inline">{category.label}</span>
                <span className="xs:hidden sm:hidden">{category.label.split(' ')[0]}</span>
              </Button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredProjets.map((projet) => (
            <Card key={projet.id} className="project-card shadow-card overflow-hidden h-full group hover:shadow-lg transition-all duration-300">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={projet.image} 
                  alt={`Image du projet ${projet.title}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <Badge 
                  className="absolute top-3 right-3 bg-accent text-accent-foreground shadow-md"
                >
                  {projet.status === 'completed' ? 'Terminé' : 'En cours'}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-lg leading-tight">{projet.title}</CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {projet.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Technologies */}
                <div>
                  <h4 className="font-medium text-foreground mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {projet.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-medium text-foreground mb-2">Fonctionnalités clés</h4>
                  <ul className="space-y-1">
                    {projet.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Voir les détails
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjets.length === 0 && (
          <div className="text-center py-12">
            <Filter className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Aucun projet trouvé pour cette catégorie.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projets;