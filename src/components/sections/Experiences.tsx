import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, MapPin, Calendar, Wrench } from 'lucide-react';

const Experiences = () => {
  const experiences = [
    {
      id: 1,
      position: "Stagiaire – Technicien systèmes automatisés",
      company: "ZEHAWI Technologies",
      location: "Tunis",
      period: "Stage professionnel",
      type: "stage",
      description: "Mission de supervision et automatisation de systèmes industriels avec focus sur les technologies SCADA et les protocoles de communication industriels.",
      skills: [
        "Supervision distante via SCADA",
        "Protocoles Modbus TCP/IP & Profinet",
        "Interfaces graphiques de supervision",
        "Méthodologie Agile Scrum"
      ],
      achievements: [
        "Mise en place de systèmes de supervision distante",
        "Configuration de protocoles de communication industriels",
        "Développement d'interfaces utilisateur pour supervision",
        "Participation active aux sprints Agile"
      ]
    },
    {
      id: 2,
      position: "Opérateur de Production",
      company: "SERETRAM",
      location: "France",
      period: "Expérience professionnelle",
      type: "emploi",
      description: "Responsable de l'optimisation des processus de production et de la maintenance préventive des équipements industriels.",
      skills: [
        "Optimisation de la production",
        "Maintenance préventive",
        "Inspection qualité",
        "Analyse des performances"
      ],
      achievements: [
        "Amélioration des rendements de production",
        "Mise en place de procédures de maintenance",
        "Contrôle qualité systématique",
        "Réduction des temps d'arrêt"
      ]
    }
  ];

  return (
    <section id="experiences" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 md:mb-4">Expériences Professionnelles</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Expérience pratique en automatisation et systèmes industriels
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {experiences.map((experience) => (
            <Card key={experience.id} className="project-card shadow-card h-full">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Building className="h-5 w-5 text-accent" />
                    <Badge variant={experience.type === 'stage' ? 'secondary' : 'default'}>
                      {experience.type === 'stage' ? 'Stage' : 'Emploi'}
                    </Badge>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {experience.period}
                    </div>
                  </div>
                </div>

                <CardTitle className="text-xl text-foreground leading-tight">
                  {experience.position}
                </CardTitle>

                <div className="flex items-center text-primary font-medium">
                  <span>{experience.company}</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {experience.location}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>

                {/* Skills */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Wrench className="h-4 w-4 mr-2 text-accent" />
                    Compétences développées
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Réalisations clés</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;