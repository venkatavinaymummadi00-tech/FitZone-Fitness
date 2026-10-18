import React, { createContext, useContext, useState } from 'react';

const EnquiryContext = createContext();

export const EnquiryProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prefill, setPrefill] = useState({
    plan: '',
    service: '',
    trainer: '',
    message: ''
  });

  const openEnquiry = (options = {}) => {
    setPrefill({
      plan: options.plan || '',
      service: options.service || '',
      trainer: options.trainer || '',
      message: options.message || ''
    });
    setIsOpen(true);
  };

  const closeEnquiry = () => {
    setIsOpen(false);
  };

  return (
    <EnquiryContext.Provider value={{ isOpen, prefill, openEnquiry, closeEnquiry }}>
      {children}
    </EnquiryContext.Provider>
  );
};

export const useEnquiry = () => {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return context;
};
