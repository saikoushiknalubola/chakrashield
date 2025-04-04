
import React from 'react';
import Header from '@/components/Header';
import ProfileScanner from '@/components/scanner/ProfileScanner';
import Footer from '@/components/Footer';

const Scan = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ProfileScanner />
      </main>
      <Footer />
    </div>
  );
};

export default Scan;
