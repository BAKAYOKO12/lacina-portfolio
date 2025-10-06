import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Download, QrCode } from 'lucide-react';
import QRCodeLib from 'qrcode';
import { useToast } from '@/hooks/use-toast';

const QRCodeGenerator = () => {
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Détecter l'URL actuelle du portfolio
    const currentUrl = window.location.origin;
    setPortfolioUrl(currentUrl);
  }, []);

  const generateQRCode = async () => {
    if (!portfolioUrl) {
      toast({
        title: "URL requise",
        description: "Veuillez saisir l'URL de votre portfolio",
        variant: "destructive",
      });
      return;
    }

    try {
      const canvas = canvasRef.current;
      if (canvas) {
        await QRCodeLib.toCanvas(canvas, portfolioUrl, {
          width: 400,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF',
          },
        });

        const dataUrl = canvas.toDataURL('image/png');
        setQrCodeDataUrl(dataUrl);

        toast({
          title: "QR Code généré! 🎉",
          description: "Vous pouvez maintenant télécharger votre QR code",
        });
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de générer le QR code",
        variant: "destructive",
      });
    }
  };

  const downloadQRCode = () => {
    if (!qrCodeDataUrl) return;

    const link = document.createElement('a');
    link.href = qrCodeDataUrl;
    link.download = 'QRCode_Portfolio_BAKAYOKO_LACINA.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Téléchargement réussi! ✅",
      description: "Votre QR code a été téléchargé",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <QrCode className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Générateur de QR Code
          </h1>
          <p className="text-muted-foreground">
            Créez un QR code pour votre portfolio
          </p>
        </div>

        <div className="bg-card rounded-xl shadow-lg p-6 md:p-8 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="portfolio-url">URL de votre portfolio</Label>
            <Input
              id="portfolio-url"
              value={portfolioUrl}
              onChange={(e) => setPortfolioUrl(e.target.value)}
              placeholder="https://votre-portfolio.lovable.app"
              className="text-lg"
            />
            <p className="text-sm text-muted-foreground">
              Cette URL sera encodée dans le QR code
            </p>
          </div>

          <Button
            onClick={generateQRCode}
            className="w-full bg-primary hover:bg-primary/90 text-white"
            size="lg"
          >
            <QrCode className="w-5 h-5 mr-2" />
            Générer le QR Code
          </Button>

          {qrCodeDataUrl && (
            <div className="space-y-4 pt-6 border-t">
              <div className="flex justify-center">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <canvas ref={canvasRef} className="hidden" />
                  <img
                    src={qrCodeDataUrl}
                    alt="QR Code du portfolio"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <Button
                onClick={downloadQRCode}
                className="w-full bg-accent hover:bg-accent/90 text-white"
                size="lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Télécharger le QR Code
              </Button>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  💡 <strong>Astuce:</strong> Ajoutez ce QR code à votre CV pour permettre aux recruteurs d'accéder facilement à votre portfolio en le scannant avec leur smartphone.
                </p>
              </div>
            </div>
          )}

          <canvas ref={canvasRef} className="hidden" />
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
