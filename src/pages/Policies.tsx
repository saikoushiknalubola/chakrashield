
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Shield, FileText, Lock, Eye, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AshokChakra from '@/components/AshokChakra';

const Policies = () => {
  const { policyType } = useParams();
  const defaultTab = policyType === 'privacy' ? 'privacy' : 'terms';

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6 text-center">
            <div className="flex justify-center mb-2">
              <div className="bg-india-navyBlue/10 p-3 rounded-full">
                <FileText className="h-8 w-8 text-india-saffron" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-india-navyBlue flex items-center justify-center">
              ChakraShield Policies
              <AshokChakra size="sm" className="ml-2" />
            </h1>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Our commitment to security, privacy, and ethical operations
            </p>
          </div>

          <Card className="shadow-md border-2 border-gray-200">
            <CardHeader>
              <Tabs defaultValue={defaultTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="terms" className="data-[state=active]:bg-india-navyBlue data-[state=active]:text-white">
                    <FileText className="mr-2 h-4 w-4" /> Terms of Service
                  </TabsTrigger>
                  <TabsTrigger value="privacy" className="data-[state=active]:bg-india-navyBlue data-[state=active]:text-white">
                    <Lock className="mr-2 h-4 w-4" /> Privacy Policy
                  </TabsTrigger>
                  <TabsTrigger value="security" className="data-[state=active]:bg-india-navyBlue data-[state=active]:text-white">
                    <Shield className="mr-2 h-4 w-4" /> Security
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="terms" className="mt-6">
                  <div className="space-y-4 text-sm">
                    <h2 className="text-xl font-semibold text-india-navyBlue">Terms of Service</h2>
                    <p className="text-gray-600">Last updated: April 1, 2025</p>
                    
                    <div className="space-y-4">
                      <section className="space-y-2">
                        <h3 className="font-semibold text-india-navyBlue">1. Acceptance of Terms</h3>
                        <p>By accessing or using ChakraShield, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this platform.</p>
                      </section>
                      
                      <section className="space-y-2">
                        <h3 className="font-semibold text-india-navyBlue">2. Authorized Use</h3>
                        <p>ChakraShield is intended for use by authorized government agencies and law enforcement bodies for the purpose of detecting and analyzing potential fake social media accounts that pose threats to national security and public order.</p>
                      </section>
                      
                      <section className="space-y-2">
                        <h3 className="font-semibold text-india-navyBlue">3. Account Registration</h3>
                        <p>Users must register with valid government credentials and maintain the confidentiality of their account information. You are responsible for all activities that occur under your account.</p>
                      </section>
                      
                      <section className="space-y-2">
                        <h3 className="font-semibold text-india-navyBlue">4. Intellectual Property</h3>
                        <p>The ChakraShield platform, including all content, features, and functionality, is owned by the Digital India Initiative and is protected by intellectual property laws.</p>
                      </section>
                      
                      <section className="space-y-2">
                        <h3 className="font-semibold text-india-navyBlue">5. Data Usage</h3>
                        <p>Data gathered through ChakraShield must be used solely for official purposes and in accordance with applicable laws. Misuse of data or the platform may result in account termination and legal action.</p>
                      </section>

                      <section className="space-y-2">
                        <h3 className="font-semibold text-india-navyBlue">6. Modifications</h3>
                        <p>We reserve the right to modify these terms at any time. Users will be notified of significant changes to the terms.</p>
                      </section>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="privacy" className="mt-6">
                  <div className="space-y-4 text-sm">
                    <h2 className="text-xl font-semibold text-india-navyBlue">Privacy Policy</h2>
                    <p className="text-gray-600">Last updated: April 1, 2025</p>
                    
                    <div className="space-y-4">
                      <section className="space-y-2">
                        <h3 className="font-semibold text-india-navyBlue">1. Information Collection</h3>
                        <p>ChakraShield collects information necessary for the detection and analysis of potentially fraudulent social media accounts, including profile data, images, text content, and network information.</p>
                      </section>
                      
                      <section className="space-y-2">
                        <h3 className="font-semibold text-india-navyBlue">2. Data Security</h3>
                        <p>We implement robust security measures to protect all data within ChakraShield, including encryption, access controls, and audit logging. All data is stored in accordance with government security protocols.</p>
                      </section>
                      
                      <section className="space-y-2">
                        <h3 className="font-semibold text-india-navyBlue">3. Information Usage</h3>
                        <p>Data collected is used solely for the purpose of identifying potential security threats. The platform employs AI models for analysis of patterns and indicators of fraudulent activity.</p>
                      </section>
                      
                      <section className="space-y-2">
                        <h3 className="font-semibold text-india-navyBlue">4. Blockchain Registry</h3>
                        <p>Information about confirmed fraudulent accounts may be recorded in our blockchain registry to create an immutable record for legal purposes. This registry is accessible only to authorized government users.</p>
                      </section>
                      
                      <section className="space-y-2">
                        <h3 className="font-semibold text-india-navyBlue">5. Compliance</h3>
                        <p>ChakraShield operates in compliance with the Information Technology Act, 2000, and all relevant data protection laws of India.</p>
                      </section>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="security" className="mt-6">
                  <div className="space-y-4 text-sm">
                    <h2 className="text-xl font-semibold text-india-navyBlue">Security Policy</h2>
                    <p className="text-gray-600">Last updated: April 1, 2025</p>
                    
                    <div className="space-y-4">
                      <section className="space-y-2">
                        <h3 className="font-semibold text-india-navyBlue">1. Platform Security</h3>
                        <p>ChakraShield implements multiple layers of security including encryption, intrusion detection, and continuous monitoring to ensure protection of all data and functionalities.</p>
                      </section>
                      
                      <section className="space-y-2">
                        <h3 className="font-semibold text-india-navyBlue">2. Access Controls</h3>
                        <p>Access to ChakraShield is strictly controlled and limited to authorized government personnel. Multi-factor authentication and role-based access controls are implemented for all user accounts.</p>
                      </section>
                      
                      <section className="space-y-2">
                        <h3 className="font-semibold text-india-navyBlue">3. Audit Logging</h3>
                        <p>All system activities are logged and monitored for security purposes. Logs are maintained in accordance with government retention policies.</p>
                      </section>
                      
                      <section className="space-y-2">
                        <h3 className="font-semibold text-india-navyBlue">4. Vulnerability Management</h3>
                        <p>Regular security assessments and vulnerability scans are conducted to identify and remediate potential security weaknesses.</p>
                      </section>
                      
                      <section className="space-y-2">
                        <h3 className="font-semibold text-india-navyBlue">5. Incident Response</h3>
                        <p>ChakraShield has established incident response procedures to address security incidents promptly and effectively.</p>
                      </section>
                      
                      <section className="space-y-2">
                        <h3 className="font-semibold text-india-navyBlue">6. Compliance</h3>
                        <p>The platform is designed to comply with CERT-In guidelines, the Information Technology Act, 2000, and other relevant security frameworks.</p>
                      </section>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardHeader>
            <CardContent>
              <div className="bg-india-navyBlue/5 p-4 rounded-md border border-india-navyBlue/20 mt-4">
                <div className="flex items-start">
                  <AlertCircle className="text-india-navyBlue mr-3 mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div className="text-sm text-india-navyBlue/80">
                    <p className="font-medium text-india-navyBlue mb-1">Important Notice</p>
                    <p>
                      ChakraShield is a secure platform operated under the Digital India Initiative. Unauthorized access or use of this system may result in civil and criminal penalties. All activities are monitored and logged.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Link to="/login">
                  <button className="inline-flex items-center text-india-navyBlue hover:text-india-saffron">
                    <Eye className="mr-2 h-4 w-4" /> Return to login
                  </button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Policies;
