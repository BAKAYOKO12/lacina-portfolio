import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Brain, X, CheckCircle, Lightbulb } from 'lucide-react';

interface EinsteinSecurityDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

const EinsteinSecurityDialog: React.FC<EinsteinSecurityDialogProps> = ({
  open,
  onOpenChange,
  onSuccess,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const answerOptions = [
    { id: 'correct', text: 'E=mc²', isCorrect: true },
    { id: 'wrong1', text: 'F=ma', isCorrect: false },
    { id: 'wrong2', text: 'E=hf', isCorrect: false }
  ];
  
  const handleAnswerSelect = (answerId: string) => {
    const selectedOption = answerOptions.find(option => option.id === answerId);
    
    if (selectedOption?.isCorrect) {
      setIsSuccess(true);
      setError('');
      setTimeout(() => {
        onSuccess();
        onOpenChange(false);
        setSelectedAnswer('');
        setIsSuccess(false);
      }, 2000);
    } else {
      setError('🤔 Pas tout à fait ! Réfléchissez encore...');
      setTimeout(() => setError(''), 3000);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    setSelectedAnswer('');
    setError('');
    setIsSuccess(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg mx-auto bg-background/95 backdrop-blur-xl border border-border/50 shadow-2xl">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center animate-pulse">
            <Brain className="h-10 w-10 text-blue-500" />
          </div>
          <DialogTitle className="text-2xl font-bold text-foreground">
            😊 Question de Sécurité
          </DialogTitle>
          <div className="space-y-2">
            <p className="text-primary font-medium text-lg animate-fade-in">
              🧠 Trouvez la réponse à cette question et accédez à mon monde !
            </p>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Lightbulb className="w-4 h-4 text-yellow-500 animate-pulse" />
              <span className="text-sm">Un petit défi intellectuel vous attend...</span>
            </div>
          </div>
        </DialogHeader>

        {isSuccess ? (
          <div className="text-center py-12 animate-scale-in">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6 animate-bounce" />
            <div className="space-y-3">
              <p className="text-green-600 font-bold text-2xl">
                🎉 Bravo ! Accès autorisé !
              </p>
              <p className="text-muted-foreground">
                Bienvenue dans mon univers technologique...
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Einstein Image Placeholder */}
            <div className="text-center">
              <div className="inline-block p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full mb-4">
                <div className="text-6xl">🧔‍♂️</div>
              </div>
              <p className="text-sm text-muted-foreground italic">
                "L'imagination est plus importante que la connaissance" - A. Einstein
              </p>
            </div>

            <div className="space-y-6">
              <Label className="text-lg font-semibold text-foreground text-center block">
                🤔 La formule la plus célèbre d'Albert Einstein est :
              </Label>
              
              <div className="space-y-4">
                {answerOptions.map((option, index) => (
                  <Button
                    key={option.id}
                    type="button"
                    variant="outline"
                    onClick={() => handleAnswerSelect(option.id)}
                    className="w-full text-left p-6 h-auto hover:bg-accent/10 hover:border-accent transition-all duration-300 border-border text-lg font-medium hover:scale-105"
                  >
                    <span className="flex items-center space-x-3">
                      <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span>{option.text}</span>
                    </span>
                  </Button>
                ))}
              </div>
            </div>

            {error && (
              <div className="text-center animate-fade-in bg-destructive/10 p-4 rounded-lg border border-destructive/20">
                <p className="text-destructive font-medium animate-pulse">
                  {error}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  💡 Indice : Cette formule concerne la relation entre masse et énergie
                </p>
              </div>
            )}

            <div className="flex justify-center pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="border-border hover:bg-muted"
              >
                <X className="h-4 w-4 mr-2" />
                Annuler
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EinsteinSecurityDialog;