// ErrorContext.js
import React, { createContext, useState } from 'react';

const ErrorContext = createContext();



export const ErrorProvider = ({ children }) => {
  const [errors, setErrors] = useState({});

  const setError = (key, message) => {
    setErrors((prevErrors) => ({ ...prevErrors, [key]: message }));
  };

  const clearError = (key) => {
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[key];
      return updatedErrors;
    });
  };

  return (
    <ErrorContext.Provider value={{ errors, setError, clearError }}>
      {children}
    </ErrorContext.Provider>
  );
};
