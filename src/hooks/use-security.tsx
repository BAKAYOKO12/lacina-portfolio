import { useState, createContext, useContext, ReactNode } from 'react';

interface SecurityContextType {
  showRealContacts: boolean;
  securityDialogOpen: boolean;
  contactType: 'phone' | 'email';
  setSecurityDialogOpen: (open: boolean) => void;
  setContactType: (type: 'phone' | 'email') => void;
  handleContactClick: (type: 'phone' | 'email') => void;
  handleSecuritySuccess: () => void;
}

const SecurityContext = createContext<SecurityContextType | undefined>(undefined);

export const SecurityProvider = ({ children }: { children: ReactNode }) => {
  const [showRealContacts, setShowRealContacts] = useState(false);
  const [securityDialogOpen, setSecurityDialogOpen] = useState(false);
  const [contactType, setContactType] = useState<'phone' | 'email'>('phone');

  const handleContactClick = (type: 'phone' | 'email') => {
    if (showRealContacts) return;
    setContactType(type);
    setSecurityDialogOpen(true);
  };

  const handleSecuritySuccess = () => {
    setShowRealContacts(true);
  };

  return (
    <SecurityContext.Provider
      value={{
        showRealContacts,
        securityDialogOpen,
        contactType,
        setSecurityDialogOpen,
        setContactType,
        handleContactClick,
        handleSecuritySuccess,
      }}
    >
      {children}
    </SecurityContext.Provider>
  );
};

export const useSecurity = () => {
  const context = useContext(SecurityContext);
  if (context === undefined) {
    throw new Error('useSecurity must be used within a SecurityProvider');
  }
  return context;
};