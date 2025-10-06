import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { AlertTriangle, X, CheckCircle } from 'lucide-react';

interface SecurityDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  contactType: 'phone' | 'email';
  onSuccess: () => void;
}

const SecurityDialog: React.FC<SecurityDialogProps> = ({
  open,
  onOpenChange,
  contactType,
  onSuccess,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const correctAnswer = 'début 1 septembre 1939, fin 2 septembre 1945';
  
  const answerOptions = [
    { id: 'correct', text: 'Début : 1 septembre 1939, Fin : 2 septembre 1945' },
    { id: 'wrong1', text: 'Début : 1 septembre 1940, Fin : 8 mai 1945' },
    { id: 'wrong2', text: 'Début : 3 septembre 1939, Fin : 15 août 1945' }
  ];
  
  const handleAnswerSelect = (answerId: string) => {
    if (answerId === 'correct') {
      setIsSuccess(true);
      setError('');
      setTimeout(() => {
        onSuccess();
        onOpenChange(false);
        setSelectedAnswer('');
        setIsSuccess(false);
      }, 1500);
    } else {
      setError('❌ Mauvaise réponse, réessayez !');
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
      <DialogContent className="sm:max-w-md mx-auto bg-background/95 backdrop-blur-xl border border-border/50 shadow-2xl">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center animate-pulse">
            <AlertTriangle className="h-8 w-8 text-amber-500" />
          </div>
          <DialogTitle className="text-xl font-bold text-foreground">
            ⚠️ Vérification de sécurité
          </DialogTitle>
          <p className="text-muted-foreground text-sm">
            Pour accéder aux coordonnées {contactType === 'phone' ? 'téléphoniques' : 'email'}, 
            veuillez répondre à cette question :
          </p>
        </DialogHeader>

        {isSuccess ? (
          <div className="text-center py-8 animate-scale-in">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 animate-bounce" />
            <p className="text-green-600 font-medium text-lg">
              ✅ Accès autorisé !
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-3">
              <Label className="text-sm font-medium text-foreground">
                Quelle est la date de début et de fin de la Deuxième Guerre mondiale ?
              </Label>
              <div className="space-y-3">
                {answerOptions.map((option) => (
                  <Button
                    key={option.id}
                    type="button"
                    variant="outline"
                    onClick={() => handleAnswerSelect(option.id)}
                    className="w-full text-left p-4 h-auto hover:bg-accent/10 hover:border-accent transition-all duration-300 border-border"
                  >
                    {option.text}
                  </Button>
                ))}
              </div>
            </div>

            {error && (
              <div className="text-center animate-fade-in">
                <p className="text-destructive font-medium animate-pulse">
                  {error}
                </p>
              </div>
            )}

            <div className="flex justify-center">
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

export default SecurityDialog;