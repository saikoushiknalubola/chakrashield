
import React from 'react';
import Header from '@/components/Header';
import BlockchainRegistry from '@/components/blockchain/BlockchainRegistry';
import Footer from '@/components/Footer';

const Blockchain = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <BlockchainRegistry />
      </main>
      <Footer />
    </div>
  );
};

export default Blockchain;
