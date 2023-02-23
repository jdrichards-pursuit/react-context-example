import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';
import { UserProvider } from './context/UserContext';
import './index.css';

// Wrap the whole application with the LanguageContext Provider
const Main = () => {
  return (
    <UserProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </UserProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
