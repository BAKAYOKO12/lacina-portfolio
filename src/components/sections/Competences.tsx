import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Settings, 
  Code, 
  Monitor, 
  Users, 
  Clock, 
  MessageSquare, 
  Target,
  Cpu,
  Database,
  Zap
} from 'lucide-react';

const Competences = () => {
  const technicalSkills = [
    {
      category: "Automatisme",
      icon: Settings,
      skills: [
        { name: "Automates Siemens", level: 85 },
        { name: "Automates Schneider", level: 80 },
        { name: "TIA Portal", level: 90 },
        { name: "Unity Pro", level: 75 }
      ]
    },
    {
      category: "SCADA & HMI",
      icon: Monitor,
      skills: [
        { name: "WinCC", level: 85 },
        { name: "Supervision SCADA", level: 80 },
        { name: "Interface HMI", level: 85 },
        { name: "Modbus TCP/IP", level: 80 }
      ]
    },
    {
      category: "Programmation",
      icon: Code,
      skills: [
        { name: "C/C++", level: 75 },
        { name: "Python", level: 70 },
        { name: "Ladder (automates)", level: 90 },
        { name: "Scilab", level: 65 }
      ]
    },
    {
      category: "Logiciels Techniques",
      icon: Cpu,
      skills: [
        { name: "MATLAB/Simulink", level: 80 },
        { name: "PSIM", level: 70 },
        { name: "Winrelais", level: 75 },
        { name: "LabVIEW", level: 65 }
      ]
    },
    {
      category: "CAO/DAO",
      icon: Database,
      skills: [
        { name: "AutoCAD", level: 75 },
        { name: "SolidWorks", level: 70 },
        { name: "KiCad", level: 65 },
        { name: "Schémas électriques", level: 85 }
      ]
    }
  ];

  const softSkills = [
    { name: "Travail en équipe", level: 90, icon: Users },
    { name: "Adaptabilité", level: 85, icon: Target },
    { name: "Communication", level: 80, icon: MessageSquare },
    { name: "Gestion du temps", level: 75, icon: Clock }
  ];

  const certifications = [
    "Habilitation électrique (en cours)",
    "Formation Sécurité industrielle",
    "Méthodologie Agile Scrum",
    "Protocoles de communication industriels"
  ];

  return (
    <section id="competences" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 md:mb-4">Compétences</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Maîtrise technique et compétences transversales en automatisme industriel
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Technical Skills */}
          <div className="lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 md:mb-8 flex items-center">
              <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-accent mr-2 sm:mr-3" />
              Compétences Techniques
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {technicalSkills.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Card key={index} className="shadow-card">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center text-lg">
                        <IconComponent className="h-5 w-5 text-accent mr-2" />
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-foreground">
                              {skill.name}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Soft Skills & Certifications */}
          <div className="space-y-6 md:space-y-8">
            {/* Soft Skills */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Users className="h-5 w-5 text-accent mr-2" />
                  Compétences Transversales
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {softSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <IconComponent className="h-4 w-4 text-accent mr-2" />
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Target className="h-5 w-5 text-accent mr-2" />
                  Formations & Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <Badge key={index} variant="outline" className="w-full justify-start py-2 px-3">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <MessageSquare className="h-5 w-5 text-accent mr-2" />
                  Langues
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Français</span>
                    <span className="text-xs text-muted-foreground">Natif</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Anglais</span>
                    <span className="text-xs text-muted-foreground">Intermédiaire</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competences;