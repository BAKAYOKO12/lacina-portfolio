import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Download, Building2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CVDownloadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CVDownloadDialog = ({ open, onOpenChange }: CVDownloadDialogProps) => {
  const [companyName, setCompanyName] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const handleDownload = async () => {
    if (!companyName.trim()) {
      toast({
        title: "Nom d'entreprise requis",
        description: "Veuillez saisir le nom de votre entreprise pour télécharger le CV.",
        variant: "destructive",
      });
      return;
    }

    setIsDownloading(true);
    
    try {
      // Simuler un petit délai pour l'expérience utilisateur
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Créer le lien de téléchargement
      const link = document.createElement('a');
      link.href = '/CV_BAKAYOKO_LACINA.pdf';
      link.download = 'CV_BAKAYOKO_LACINA.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "Téléchargement en cours 🎉",
        description: `Merci ${companyName} ! Le CV de Bakayoko Lacina est en cours de téléchargement.`,
      });

      // Réinitialiser et fermer
      setCompanyName('');
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Erreur de téléchargement",
        description: "Une erreur est survenue lors du téléchargement du CV.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const handleClose = () => {
    setCompanyName('');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center text-xl">
            <Building2 className="h-5 w-5 text-accent mr-2" />
            Téléchargement du CV
          </DialogTitle>
          <DialogDescription>
            Pour télécharger le CV de Bakayoko Lacina, veuillez indiquer le nom de votre entreprise
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="company-name" className="text-sm font-medium">
              🏢 Nom de votre entreprise
            </Label>
            <Input
              id="company-name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Ex: Google, Microsoft, Apple..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleDownload();
                }
              }}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            onClick={handleClose}
            className="flex-1"
          >
            Annuler
          </Button>
          <Button
            onClick={handleDownload}
            disabled={!companyName.trim() || isDownloading}
            className="flex-1 bg-accent hover:bg-accent/90 text-white"
          >
            {isDownloading ? (
              "Téléchargement..."
            ) : (
              <>
                <Download className="h-4 w-4 mr-2" />
                Télécharger le CV
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CVDownloadDialog;