
import React from 'react';
import { 
  Shield, 
  Database, 
  FileText, 
  Search, 
  AlertTriangle, 
  Globe, 
  Key, 
  Lock
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AshokChakra from '../AshokChakra';

const Features = () => {
  const features = [
    {
      icon: <Search className="h-10 w-10 text-india-saffron" />,
      title: "AI Profile Scanner",
      description: "Upload or link profiles for deep image & text analysis to generate fake account risk scores"
    },
    {
      icon: <Shield className="h-10 w-10 text-india-saffron" />,
      title: "Real-Time Dashboard",
      description: "View detected threats, regional trends, and prioritized action lists for immediate response"
    },
    {
      icon: <Database className="h-10 w-10 text-india-saffron" />,
      title: "Blockchain Registry",
      description: "Tamper-proof ledger of verified fake accounts providing court-admissible evidence"
    },
    {
      icon: <FileText className="h-10 w-10 text-india-saffron" />,
      title: "Automated Reporting",
      description: "Generate legal notices and API-integrated takedown requests to social media platforms"
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-india-saffron" />,
      title: "Threat Alerts System",
      description: "Instant notifications to agencies about high-threat networks and coordinated bot farms"
    },
    {
      icon: <Globe className="h-10 w-10 text-india-saffron" />,
      title: "Language Detection",
      description: "NLP technology that identifies malicious content across multiple Indian languages"
    },
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <AshokChakra size="sm" className="text-india-ashoka" />
          </div>
          <h2 className="text-3xl font-bold text-india-navyBlue mb-4">Advanced Security Features</h2>
          <p className="text-gray-600">
            ChakraShield combines cutting-edge AI technologies with blockchain verification to provide a comprehensive defense against fake social media accounts that threaten national security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-with-chakra">
              <CardHeader className="pb-2">
                <div className="mb-2">{feature.icon}</div>
                <CardTitle className="text-xl text-india-navyBlue">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-10 flex-shrink-0">
              <div className="relative">
                <div className="w-24 h-24 flex items-center justify-center bg-india-navyBlue/10 rounded-full">
                  <Lock className="h-12 w-12 text-india-navyBlue" />
                </div>
                <div className="absolute -top-2 -right-2 bg-india-saffron text-white p-1 rounded-full">
                  <Key className="h-4 w-4" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-india-navyBlue mb-2">Government-Grade Security</h3>
              <p className="text-gray-600 mb-4">
                ChakraShield is specifically designed for Indian government cybersecurity agencies, with secure access controls and data protection measures that meet the highest standards.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center px-3 py-1 bg-india-navyBlue/10 rounded-full">
                  <span className="font-medium text-india-navyBlue">CERT-In Compliant</span>
                </div>
                <div className="flex items-center px-3 py-1 bg-india-navyBlue/10 rounded-full">
                  <span className="font-medium text-india-navyBlue">End-to-End Encrypted</span>
                </div>
                <div className="flex items-center px-3 py-1 bg-india-navyBlue/10 rounded-full">
                  <span className="font-medium text-india-navyBlue">Audit Logged</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
