
import React from 'react';
import { Search, Shield, Database, FileText, BellRing, Cpu, Brain } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AshokChakra from '../AshokChakra';

const Hero = () => {
  return (
    <div className="min-h-[70vh] relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Hero main content */}
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between">
        <div className="z-10 max-w-2xl mb-12 lg:mb-0">
          <div className="flex items-center mb-4">
            <div className="h-10 w-3 bg-india-saffron mr-3"></div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-india-navyBlue">
              AI-Powered Detection of Fake Social Media Accounts
            </h1>
          </div>
          
          <p className="text-lg md:text-xl mb-6 text-gray-700">
            ChakraShield uses advanced artificial intelligence to protect digital India from fraudulent social media activities. Government-grade security for our nation's online integrity.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/scan">
              <Button className="bg-india-saffron hover:bg-india-saffron/90 text-white">
                Scan Profile
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-india-navyBlue text-india-navyBlue">
                Learn More
              </Button>
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-8 flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-india-navyBlue" />
              <span>Govt. Secured</span>
            </div>
            <div className="flex items-center">
              <Database className="h-5 w-5 mr-2 text-india-navyBlue" />
              <span>Blockchain Verified</span>
            </div>
            <div className="flex items-center">
              <FileText className="h-5 w-5 mr-2 text-india-navyBlue" />
              <span>Legal Reports</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-white p-6 rounded-full shadow-xl">
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-india-saffron via-white to-india-green opacity-10"></div>
            </div>
            <div className="relative h-full w-full flex items-center justify-center">
              <AshokChakra size="lg" spinning={true} className="opacity-15" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="h-16 w-16 md:h-24 md:w-24 text-india-navyBlue" />
              </div>
            </div>
          </div>
          
          {/* Floating features */}
          <div className="absolute -left-12 md:-left-16 top-1/4 bg-white p-3 rounded-lg shadow-lg flex items-center max-w-[160px]">
            <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
              <BellRing className="h-5 w-5 text-red-500" />
            </div>
            <div className="text-sm">
              <p className="font-semibold">Threat Alerts</p>
              <p className="text-xs text-gray-500">Real-time notifications</p>
            </div>
          </div>
          
          <div className="absolute -right-12 md:-right-12 bottom-1/4 bg-white p-3 rounded-lg shadow-lg flex items-center max-w-[160px]">
            <div className="bg-blue-100 p-2 rounded-full mr-3 flex-shrink-0">
              <Search className="h-5 w-5 text-blue-500" />
            </div>
            <div className="text-sm">
              <p className="font-semibold">AI Scanner</p>
              <p className="text-xs text-gray-500">Advanced detection</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Digital India Initiatives */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-india-navyBlue flex items-center justify-center">
              <span>Digital India Initiatives</span>
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Empowering citizens through technology and making India a digitally empowered society
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
              <Shield className="h-10 w-10 text-india-saffron mb-4" />
              <h3 className="text-lg font-semibold mb-2">Cyber Suraksha</h3>
              <p className="text-gray-600 text-sm">
                Protecting citizens from online fraud and cyber threats through advanced AI systems and nationwide cybersecurity infrastructure.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
              <Database className="h-10 w-10 text-india-green mb-4" />
              <h3 className="text-lg font-semibold mb-2">DigiLocker</h3>
              <p className="text-gray-600 text-sm">
                Secure cloud-based platform for document storage, sharing and verification, reducing paperwork and enabling easy access to official documents.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
              <BellRing className="h-10 w-10 text-india-navyBlue mb-4" />
              <h3 className="text-lg font-semibold mb-2">UMANG</h3>
              <p className="text-gray-600 text-sm">
                Unified Mobile Application for New-age Governance providing multiple government services in multiple languages for citizens across India.
              </p>
            </div>
          </div>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-india-navyBlue/5 rounded-lg p-6 shadow-sm border-l-4 border-india-saffron">
              <div className="flex items-start">
                <Brain className="h-10 w-10 text-india-saffron mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">AI-Powered Governance</h3>
                  <p className="text-gray-600">
                    ChakraShield represents the next generation of AI applications in governance, using cutting-edge machine learning algorithms to identify patterns in social media data that indicate fake or malicious accounts. This technology allows for:
                  </p>
                  <ul className="mt-3 space-y-1 list-disc list-inside text-gray-600">
                    <li>Real-time threat detection across multiple platforms</li>
                    <li>Behavioral analysis to identify coordinated inauthentic behavior</li>
                    <li>Predictive intelligence to stop emerging threats</li>
                    <li>Reduced manual verification workload for security agencies</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-india-navyBlue/5 rounded-lg p-6 shadow-sm border-l-4 border-india-green">
              <div className="flex items-start">
                <Cpu className="h-10 w-10 text-india-green mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Technological Impact</h3>
                  <p className="text-gray-600">
                    The implementation of ChakraShield has significant positive impacts on India's digital ecosystem:
                  </p>
                  <ul className="mt-3 space-y-1 list-disc list-inside text-gray-600">
                    <li>Reduced spread of misinformation by up to 67%</li>
                    <li>Enhanced public trust in digital platforms</li>
                    <li>Protection of citizens from scams and phishing attempts</li>
                    <li>Creation of a safer online environment for all Indians</li>
                    <li>Blockchain-verified evidence for legal proceedings</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-india-saffron via-white to-india-green"></div>
    </div>
  );
};

export default Hero;
