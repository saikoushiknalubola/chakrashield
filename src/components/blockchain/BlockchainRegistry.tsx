
import React, { useState } from 'react';
import { 
  Database, 
  Search, 
  Shield, 
  FileText, 
  Clock, 
  Users, 
  LinkIcon, 
  CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const BlockchainRegistry = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searching, setSearching] = useState(false);
  const [searchComplete, setSearchComplete] = useState(false);
  
  const handleSearch = () => {
    if (!searchQuery) return;
    
    setSearching(true);
    // Simulate search delay
    setTimeout(() => {
      setSearching(false);
      setSearchComplete(true);
    }, 1500);
  };
  
  return (
    <div className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <Database className="h-12 w-12 text-india-navyBlue mx-auto" />
          </div>
          <h2 className="text-3xl font-bold text-india-navyBlue mb-2">Blockchain Registry</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Secure, immutable ledger of verified fake accounts providing tamper-proof evidence for legal proceedings and pattern analysis.
          </p>
        </div>
        
        {/* Search Section */}
        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="text-lg font-medium flex items-center">
              <Search className="h-5 w-5 mr-2 text-india-navyBlue" />
              Search Blockchain Registry
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                placeholder="Enter profile URL, username, or case ID"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow"
                disabled={searching}
              />
              <Button 
                onClick={handleSearch} 
                disabled={searching || !searchQuery}
                className="bg-india-saffron hover:bg-india-saffron/90 text-white"
              >
                {searching ? 'Searching...' : 'Search Registry'}
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Search Results */}
        {searchComplete && (
          <div className="mb-10">
            <h3 className="text-xl font-bold text-india-navyBlue mb-4">Search Results</h3>
            <div className="grid grid-cols-1 gap-4">
              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                      <div className="flex items-center mb-2">
                        <Shield className="h-5 w-5 text-red-500 mr-2" />
                        <h4 className="font-bold text-lg">Fake Profile: @suspicious_user123</h4>
                      </div>
                      <div className="space-y-1 text-sm mb-4">
                        <p className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-gray-500" />
                          <span>Registered: April 02, 2023</span>
                        </p>
                        <p className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-gray-500" />
                          <span>Network: Foreign Bot Cluster #17</span>
                        </p>
                        <p className="flex items-center">
                          <LinkIcon className="h-4 w-4 mr-2 text-gray-500" />
                          <span>Platform: Twitter</span>
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">DeepFake</Badge>
                        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Bot Network</Badge>
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Foreign Origin</Badge>
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-between space-y-4">
                      <div className="flex items-center bg-green-50 p-2 rounded-md text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-green-700">Verified on Blockchain</span>
                      </div>
                      <div className="text-xs bg-gray-100 p-2 rounded-md font-mono">
                        Hash: 0x7f2c8a4d5b3e9f1c0d6a8b7e5d4c3b2a1
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button variant="outline" size="sm" className="text-xs">
                          <FileText className="h-3 w-3 mr-1" />
                          View Evidence
                        </Button>
                        <Button variant="outline" size="sm" className="text-xs text-blue-600 border-blue-600">
                          <LinkIcon className="h-3 w-3 mr-1" />
                          Trace Connections
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                      <div className="flex items-center mb-2">
                        <Shield className="h-5 w-5 text-red-500 mr-2" />
                        <h4 className="font-bold text-lg">Fake Profile: Foreign_News_Official</h4>
                      </div>
                      <div className="space-y-1 text-sm mb-4">
                        <p className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-gray-500" />
                          <span>Registered: March 15, 2023</span>
                        </p>
                        <p className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-gray-500" />
                          <span>Network: Disinformation Campaign #8</span>
                        </p>
                        <p className="flex items-center">
                          <LinkIcon className="h-4 w-4 mr-2 text-gray-500" />
                          <span>Platform: Facebook</span>
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Content Manipulation</Badge>
                        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Bot Network</Badge>
                        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">National Security Threat</Badge>
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-between space-y-4">
                      <div className="flex items-center bg-green-50 p-2 rounded-md text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-green-700">Verified on Blockchain</span>
                      </div>
                      <div className="text-xs bg-gray-100 p-2 rounded-md font-mono">
                        Hash: 0x3a7d8c9f2e5b1a6d4c3f8e7d9a2b5c4
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button variant="outline" size="sm" className="text-xs">
                          <FileText className="h-3 w-3 mr-1" />
                          View Evidence
                        </Button>
                        <Button variant="outline" size="sm" className="text-xs text-blue-600 border-blue-600">
                          <LinkIcon className="h-3 w-3 mr-1" />
                          Trace Connections
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
        
        {/* Registry Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card>
            <CardContent className="p-6 flex flex-col items-center">
              <div className="mb-4 p-3 bg-blue-100 rounded-full">
                <Database className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold text-india-navyBlue">15,284</h4>
              <p className="text-gray-500 text-sm text-center">Verified Fake Accounts</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex flex-col items-center">
              <div className="mb-4 p-3 bg-purple-100 rounded-full">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="text-2xl font-bold text-india-navyBlue">127</h4>
              <p className="text-gray-500 text-sm text-center">Bot Networks Identified</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex flex-col items-center">
              <div className="mb-4 p-3 bg-green-100 rounded-full">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="text-2xl font-bold text-india-navyBlue">1,453</h4>
              <p className="text-gray-500 text-sm text-center">Legal Reports Generated</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Information about the blockchain registry */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium">About the Blockchain Registry</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none text-sm text-gray-600">
              <p>
                ChakraShield's Blockchain Registry provides immutable, tamper-proof evidence of fake social media accounts that can be used in legal proceedings.
                Each entry contains comprehensive forensic data, including:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>AI analysis results and risk scores</li>
                <li>Image manipulation detection evidence</li>
                <li>Text pattern analysis showing bot behaviors</li>
                <li>Network connection maps for coordinated campaigns</li>
                <li>Digital signatures from validating agencies</li>
                <li>Timestamps of detection and verification</li>
              </ul>
              <p className="mt-3">
                All entries are cryptographically secured and can be independently verified through our public verification portal. Government agencies with appropriate clearance can access additional metadata and cross-reference information.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlockchainRegistry;
