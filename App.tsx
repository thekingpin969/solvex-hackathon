import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { RegistrationPage } from './components/RegistrationPage';
import { PaymentPage } from './components/PaymentPage';
import { RulesPage } from './components/RulesPage';
import { SuccessPage } from './components/SuccessPage';

type Page = 'landing' | 'register' | 'payment' | 'rules' | 'success';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  return (
    <div className="min-h-screen bg-deep-purple text-white font-sans selection:bg-neon-pink selection:text-white">
      {currentPage === 'landing' && (
        <LandingPage 
            onRegister={() => setCurrentPage('register')} 
            onViewRules={() => setCurrentPage('rules')}
        />
      )}
      {currentPage === 'register' && (
        <RegistrationPage 
            onBack={() => setCurrentPage('landing')} 
            onSuccess={() => setCurrentPage('payment')}
        />
      )}
      {currentPage === 'payment' && (
        <PaymentPage onComplete={() => setCurrentPage('success')} />
      )}
      {currentPage === 'rules' && (
        <RulesPage 
            onBack={() => setCurrentPage('landing')} 
            onRegister={() => setCurrentPage('register')}
        />
      )}
      {currentPage === 'success' && (
        <SuccessPage 
            onBack={() => setCurrentPage('landing')} 
        />
      )}
    </div>
  );
}

export default App;