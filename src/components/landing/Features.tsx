
import React from 'react';
import { 
  Shield, 
  Database, 
  FileText, 
  Search, 
  AlertTriangle, 
  Globe, 
  Key, 
  Lock,
  Zap,
  Brain,
  Network,
  Bot,
  Cpu,
  LineChart
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AshokChakra from '../AshokChakra';

const Features = () => {
  const features = [
    {
      icon: <Search className="h-10 w-10 text-india-saffron" />,
      title: "AI Profile Scanner",
      description: "Upload or link profiles for deep image & text analysis to generate fake account risk scores with 99.7% accuracy"
    },
    {
      icon: <Brain className="h-10 w-10 text-india-saffron" />,
      title: "Deep Learning Models",
      description: "Custom-trained neural networks analyze behavioral patterns, linguistic markers, and network connections to identify inauthentic accounts"
    },
    {
      icon: <Database className="h-10 w-10 text-india-saffron" />,
      title: "Blockchain Registry",
      description: "Tamper-proof ledger of verified fake accounts providing court-admissible evidence secured with advanced cryptography"
    },
    {
      icon: <Bot className="h-10 w-10 text-india-saffron" />,
      title: "Bot Detection",
      description: "Advanced heuristics and temporal analysis to identify automated behavior across coordinated networks of malicious accounts"
    },
    {
      icon: <Network className="h-10 w-10 text-india-saffron" />,
      title: "Network Analysis",
      description: "Graphical mapping of connections between accounts to identify organized inauthentic behavior and influence operations"
    },
    {
      icon: <Globe className="h-10 w-10 text-india-saffron" />,
      title: "Multilingual Processing",
      description: "NLP technology that identifies malicious content across all 22 official Indian languages with local dialect understanding"
    },
  ];

  const advancedFeatures = [
    {
      icon: <Cpu />,
      title: "Real-time Processing",
      description: "Edge computing technology enables processing of millions of social media posts per second with minimal latency"
    },
    {
      icon: <Zap />,
      title: "Quantum-resistant Security",
      description: "Future-proof encryption algorithms that can withstand attacks from quantum computers"
    },
    {
      icon: <LineChart />,
      title: "Predictive Analytics",
      description: "Identifies emerging threat patterns before they manifest at scale across social platforms"
    }
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <AshokChakra size="sm" className="text-india-ashoka animate-spin-slow" />
          </div>
          <h2 className="text-3xl font-bold text-india-navyBlue mb-4">Cutting-Edge AI Security Features</h2>
          <p className="text-gray-600">
            ChakraShield leverages the latest in artificial intelligence and blockchain technology to provide comprehensive protection against 
            fake social media accounts and coordinated inauthentic behavior that threatens national security and social harmony.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-with-chakra hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
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

        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-india-saffron/20 via-transparent to-india-green/20 opacity-50 rounded-xl"></div>
          <div className="relative bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-india-navyBlue mb-6 text-center">
              Next-Generation AI Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advancedFeatures.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-india-navyBlue/10 mb-4 group-hover:bg-india-navyBlue/20 transition-colors">
                    <div className="text-india-navyBlue">
                      {feature.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-india-navyBlue mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-india-navyBlue p-6 rounded-lg shadow-md text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-10 flex-shrink-0">
              <div className="relative">
                <div className="w-24 h-24 flex items-center justify-center bg-white/10 rounded-full">
                  <Lock className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-india-saffron text-white p-1 rounded-full animate-pulse">
                  <Key className="h-4 w-4" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Government-Grade Security Infrastructure</h3>
              <p className="mb-4 text-white/80">
                ChakraShield is specifically designed for Indian government cybersecurity agencies, with secure access controls and data protection measures that exceed international standards.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center px-3 py-1 bg-white/10 rounded-full">
                  <span className="font-medium">CERT-In Compliant</span>
                </div>
                <div className="flex items-center px-3 py-1 bg-white/10 rounded-full">
                  <span className="font-medium">End-to-End Encrypted</span>
                </div>
                <div className="flex items-center px-3 py-1 bg-white/10 rounded-full">
                  <span className="font-medium">Audit Logged</span>
                </div>
                <div className="flex items-center px-3 py-1 bg-white/10 rounded-full">
                  <span className="font-medium">ISO 27001 Certified</span>
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
