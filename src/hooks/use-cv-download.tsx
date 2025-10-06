import { useState } from 'react';

export const useCVDownload = () => {
  const [cvDialogOpen, setCvDialogOpen] = useState(false);

  const handleDownloadClick = () => {
    setCvDialogOpen(true);
  };

  const handleDialogClose = () => {
    setCvDialogOpen(false);
  };

  return {
    cvDialogOpen,
    handleDownloadClick,
    handleDialogClose,
    setCvDialogOpen
  };
};