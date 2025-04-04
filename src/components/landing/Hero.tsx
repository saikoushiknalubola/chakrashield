
import React from 'react';
import { Search, Shield, Database, FileText, BellRing } from 'lucide-react';
import { Button } from "@/components/ui/button";
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
            <Button className="bg-india-saffron hover:bg-india-saffron/90 text-white">
              Scan Profile
            </Button>
            <Button variant="outline" className="border-india-navyBlue text-india-navyBlue">
              Learn More
            </Button>
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
          <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] bg-white p-6 rounded-full shadow-xl">
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-india-saffron via-white to-india-green opacity-10"></div>
            </div>
            <div className="relative h-full w-full flex items-center justify-center">
              <AshokChakra size="lg" spinning={true} className="opacity-15" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="h-24 w-24 text-india-navyBlue" />
              </div>
            </div>
          </div>
          
          {/* Floating features */}
          <div className="absolute -left-16 top-1/4 bg-white p-3 rounded-lg shadow-lg flex items-center">
            <div className="bg-red-100 p-2 rounded-full mr-3">
              <BellRing className="h-5 w-5 text-red-500" />
            </div>
            <div className="text-sm">
              <p className="font-semibold">Threat Alerts</p>
              <p className="text-xs text-gray-500">Real-time notifications</p>
            </div>
          </div>
          
          <div className="absolute -right-12 bottom-1/4 bg-white p-3 rounded-lg shadow-lg flex items-center">
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <Search className="h-5 w-5 text-blue-500" />
            </div>
            <div className="text-sm">
              <p className="font-semibold">AI Scanner</p>
              <p className="text-xs text-gray-500">Advanced detection</p>
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
