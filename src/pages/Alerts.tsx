
import React from 'react';
import { BellRing, Clock, Users, Shield, AlertTriangle, Check, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Alerts = () => {
  const recentAlerts = [
    { 
      id: 1, 
      title: "Coordinated Bot Network Detected", 
      description: "A network of 37 suspected bot accounts showing coordinated activity targeting government officials.",
      time: "10 minutes ago", 
      severity: "Critical",
      status: "New" 
    },
    { 
      id: 2, 
      title: "Suspicious Login Activity", 
      description: "Multiple login attempts from foreign IP addresses on verified government social accounts.",
      time: "2 hours ago", 
      severity: "High",
      status: "Investigating" 
    },
    { 
      id: 3, 
      title: "Deepfake Video Detection", 
      description: "AI detected a synthetic video impersonating a public official on social media platforms.",
      time: "5 hours ago", 
      severity: "Critical",
      status: "Under Review" 
    },
    { 
      id: 4, 
      title: "Cross-Platform Impersonation", 
      description: "Same fake identity detected across multiple social media platforms.",
      time: "1 day ago", 
      severity: "Medium",
      status: "Resolved" 
    },
    { 
      id: 5, 
      title: "Trending Hashtag Manipulation", 
      description: "Artificial amplification of divisive content by suspected fake accounts.",
      time: "2 days ago", 
      severity: "High",
      status: "Closed" 
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 flex items-center">
              <BellRing className="mr-3 h-8 w-8 text-india-saffron" />
              Threat Alerts System
            </h1>
            <p className="text-gray-600">Real-time monitoring of high-priority security concerns</p>
          </div>
          <Button className="bg-india-navyBlue">
            <Shield className="h-4 w-4 mr-2" />
            Configure Alerts
          </Button>
        </div>
        
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="active">Active Alerts</TabsTrigger>
            <TabsTrigger value="history">Alert History</TabsTrigger>
            <TabsTrigger value="settings">Alert Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active">
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>All Threats</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  <span>Critical Only</span>
                </Button>
              </div>
              <div className="text-sm text-gray-500 flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Last updated: 2 minutes ago
              </div>
            </div>
            
            <div className="space-y-4">
              {recentAlerts.map((alert) => (
                <Card key={alert.id} className={`
                  border-l-4 
                  ${alert.severity === 'Critical' ? 'border-l-red-500' : 
                    alert.severity === 'High' ? 'border-l-orange-500' : 
                    'border-l-yellow-500'}
                  ${alert.status === 'Resolved' || alert.status === 'Closed' ? 'bg-gray-50' : ''}
                `}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center mb-2">
                          <h3 className="font-semibold text-lg">{alert.title}</h3>
                          <span className={`ml-3 px-2 py-1 rounded-full text-xs font-medium ${
                            alert.severity === 'Critical' ? 'bg-red-100 text-red-800' :
                            alert.severity === 'High' ? 'bg-orange-100 text-orange-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {alert.severity}
                          </span>
                          <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                            alert.status === 'New' ? 'bg-blue-100 text-blue-800' :
                            alert.status === 'Investigating' ? 'bg-purple-100 text-purple-800' :
                            alert.status === 'Under Review' ? 'bg-indigo-100 text-indigo-800' :
                            alert.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {alert.status}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-2">{alert.description}</p>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {alert.time}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {alert.status !== 'Resolved' && alert.status !== 'Closed' && (
                          <>
                            <Button size="sm" variant="outline" className="flex items-center gap-1">
                              <Check className="h-4 w-4" />
                              <span>Resolve</span>
                            </Button>
                            <Button size="sm" variant="outline" className="flex items-center gap-1 text-red-600 border-red-200 hover:bg-red-50">
                              <X className="h-4 w-4" />
                              <span>Dismiss</span>
                            </Button>
                          </>
                        )}
                        <Button size="sm" variant="outline">Details</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Alert History</CardTitle>
                <CardDescription>Record of past security alerts and resolution status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-64 bg-gray-50 rounded-md">
                  <p className="text-gray-500">Alert history would be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Alert Configuration</CardTitle>
                <CardDescription>Configure notification preferences and alert thresholds</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-64 bg-gray-50 rounded-md">
                  <p className="text-gray-500">Alert settings would be configured here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Alerts;
