import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SecurityProvider } from "@/hooks/use-security";
import CoverPage from "./pages/CoverPage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FormationPage from "./pages/FormationPage";
import ExperiencesPage from "./pages/ExperiencesPage";
import ProjetsPage from "./pages/ProjetsPage";
import CompetencesPage from "./pages/CompetencesPage";
import ContactPage from "./pages/ContactPage";
import QRCodeGenerator from "./pages/QRCodeGenerator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SecurityProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CoverPage />} />
            <Route path="/portfolio" element={<Index />} />
            <Route path="/formation" element={<FormationPage />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            <Route path="/projets" element={<ProjetsPage />} />
            <Route path="/competences" element={<CompetencesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/qrcode" element={<QRCodeGenerator />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SecurityProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
