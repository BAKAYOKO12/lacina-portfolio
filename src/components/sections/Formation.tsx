import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

const Formation = () => {
  const formations = [
    {
      id: 1,
      degree: "BUT 3 – Automatisme et Informatique Industrielle",
      school: "IUT Henri Poincaré Longwy",
      year: "2025 (en cours)",
      status: "current",
      description: "Formation approfondie en automatisation industrielle, supervision SCADA et programmation"
    },
    {
      id: 2,
      degree: "DUT – Automatisme et Informatique Industrielle",
      school: "IUT Henri Poincaré Longwy",
      year: "2024",
      status: "completed",
      description: "Bases solides en automatisation, électronique industrielle et informatique"
    },
    {
      id: 3,
      degree: "Licence 1 – Physique Chimie",
      school: "UPPA",
      year: "2021",
      status: "completed",
      description: "Fondamentaux scientifiques en physique et chimie"
    },
    {
      id: 4,
      degree: "Baccalauréat Scientifique, Série D",
      school: "Lycée Moderne Nimbo de Bouaké",
      year: "2019",
      status: "completed",
      description: "Formation scientifique générale avec spécialisation en sciences"
    }
  ];

  return (
    <section id="formation" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 md:mb-4">Formation</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Parcours académique en automatisme et informatique industrielle
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-primary transform md:-translate-x-1/2"></div>

          {formations.map((formation, index) => (
            <div
              key={formation.id}
              className={`relative flex items-center mb-8 sm:mb-10 md:mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 sm:left-8 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-accent rounded-full transform -translate-x-1/2 z-10 shadow-lg">
                <div className="absolute inset-0.5 sm:inset-1 bg-white rounded-full"></div>
              </div>

              {/* Content card */}
              <Card 
                className={`ml-10 sm:ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                } project-card shadow-card`}
              >
                <CardContent className="p-6">
                  {/* Status badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      formation.status === 'current' 
                        ? 'bg-accent/10 text-accent' 
                        : 'bg-primary/10 text-primary'
                    }`}>
                      {formation.status === 'current' ? 'En cours' : 'Obtenu'}
                    </span>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formation.year}
                    </div>
                  </div>

                  {/* Degree */}
                  <h3 className="text-xl font-semibold text-foreground mb-2 flex items-start">
                    <GraduationCap className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" />
                    {formation.degree}
                  </h3>

                  {/* School */}
                  <p className="text-primary font-medium mb-3">{formation.school}</p>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {formation.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formation;