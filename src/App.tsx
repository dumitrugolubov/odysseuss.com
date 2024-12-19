import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Trade from './pages/Trade';
import Markets from './pages/Markets';
import Referral from './pages/Referral';
import TermsOfService from './pages/legal/TermsOfService';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import KYCPolicy from './pages/legal/KYCPolicy';
import FAQ from './pages/support/FAQ';
import Contact from './pages/support/Contact';
import APIDocs from './pages/support/APIDocs';

function App() {
  const path = window.location.pathname;

  const renderContent = () => {
    switch (path) {
      case '/trade':
        return <Trade />;
      case '/markets':
        return <Markets />;
      case '/referral':
        return <Referral />;
      case '/terms':
        return <TermsOfService />;
      case '/privacy':
        return <PrivacyPolicy />;
      case '/kyc':
        return <KYCPolicy />;
      case '/faq':
        return <FAQ />;
      case '/support':
        return <Contact />;
      case '/docs':
        return <APIDocs />;
      default:
        return <Hero />;
    }
  };

  return (
    <Layout>
      {renderContent()}
    </Layout>
  );
}

export default App;