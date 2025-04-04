
import React, { useState } from 'react';
import { BellRing, Shield, AlertCircle, CheckCircle, Clock, ExternalLink, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Alerts = () => {
  const [expandedAlerts, setExpandedAlerts] = useState<string[]>([]);
  
  const toggleAlert = (id: string) => {
    if (expandedAlerts.includes(id)) {
      setExpandedAlerts(expandedAlerts.filter(alertId => alertId !== id));
    } else {
      setExpandedAlerts([...expandedAlerts, id]);
    }
  };
  
  const isExpanded = (id: string) => expandedAlerts.includes(id);

  const alerts = [
    {
      id: "alert001",
      title: "High-Risk Bot Network Detected",
      timestamp: "2025-04-04 09:32:17",
      severity: "critical",
      status: "active",
      category: "bot-network",
      platform: "Twitter",
      accounts: 87,
      description: "Coordinated network of 87 bot accounts detected spreading misinformation about current elections."
    },
    {
      id: "alert002",
      title: "Verified Official Impersonation",
      timestamp: "2025-04-03 23:15:42",
      severity: "high",
      status: "active",
      category: "impersonation",
      platform: "Facebook",
      accounts: 3,
      description: "Multiple accounts impersonating official government spokesperson detected with falsified credentials."
    },
    {
      id: "alert003",
      title: "Scam Campaign Targeting Elderly",
      timestamp: "2025-04-03 18:07:55",
      severity: "medium",
      status: "investigating",
      category: "financial-fraud",
      platform: "WhatsApp",
      accounts: 12,
      description: "Coordinated campaign targeting elderly citizens with fraudulent government benefit claims."
    },
    {
      id: "alert004",
      title: "Suspicious Foreign Content Farm",
      timestamp: "2025-04-02 14:23:11",
      severity: "high",
      status: "investigating",
      category: "foreign-influence",
      platform: "Multiple",
      accounts: 43,
      description: "Network of accounts with suspicious foreign origin pushing divisive narratives about internal security."
    },
    {
      id: "alert005",
      title: "Celebrity Impersonation Ring",
      timestamp: "2025-04-01 10:56:37",
      severity: "medium",
      status: "resolved",
      category: "impersonation",
      platform: "Instagram",
      accounts: 28,
      description: "Group of accounts impersonating celebrities to promote fraudulent cryptocurrency investments has been neutralized."
    }
  ];

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'high':
        return <AlertCircle className="h-5 w-5 text-amber-500" />;
      case 'medium':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case 'low':
        return <AlertCircle className="h-5 w-5 text-blue-500" />;
      default:
        return null;
    }
  };

  const getStatusIndicator = (status: string) => {
    switch (status) {
      case 'active':
        return <span className="flex h-3 w-3 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span></span>;
      case 'investigating':
        return <span className="flex h-3 w-3 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span></span>;
      case 'resolved':
        return <span className="inline-flex rounded-full h-3 w-3 bg-green-500"></span>;
      default:
        return null;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-100 text-red-800';
      case 'high':
        return 'bg-amber-100 text-amber-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-red-100 text-red-800';
      case 'investigating':
        return 'bg-amber-100 text-amber-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <BellRing className="h-8 w-8 text-india-navyBlue" />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-india-navyBlue">Threat Alerts System</h1>
                <p className="text-gray-600">Real-time monitoring and notification of security threats</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <div className="flex items-center">
                <Switch id="auto-refresh" />
                <label htmlFor="auto-refresh" className="ml-2 text-sm">Auto-refresh</label>
              </div>
              <Button className="bg-india-saffron hover:bg-india-saffron/90">
                <Shield className="mr-2 h-4 w-4" /> Take Action
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="col-span-1">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Filter className="h-5 w-5 mr-2" /> Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Severity</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Severities</SelectItem>
                      <SelectItem value="critical">Critical</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Status</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="investigating">Investigating</SelectItem>
                      <SelectItem value="resolved">Resolved</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="bot-network">Bot Networks</SelectItem>
                      <SelectItem value="impersonation">Impersonation</SelectItem>
                      <SelectItem value="financial-fraud">Financial Fraud</SelectItem>
                      <SelectItem value="foreign-influence">Foreign Influence</SelectItem>
                      <SelectItem value="disinformation">Disinformation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Platform</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Platforms</SelectItem>
                      <SelectItem value="twitter">Twitter</SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      <SelectItem value="telegram">Telegram</SelectItem>
                      <SelectItem value="multiple">Multiple Platforms</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button className="w-full">Apply Filters</Button>
              </CardContent>
            </Card>
            
            <div className="col-span-1 md:col-span-3">
              <Tabs defaultValue="alerts">
                <TabsList className="w-full mb-6">
                  <TabsTrigger value="alerts" className="flex-1">Current Alerts</TabsTrigger>
                  <TabsTrigger value="trends" className="flex-1">Trend Analysis</TabsTrigger>
                  <TabsTrigger value="settings" className="flex-1">Alert Settings</TabsTrigger>
                </TabsList>
                
                <TabsContent value="alerts" className="space-y-4">
                  <div className="md:hidden flex flex-col space-y-3 mb-4">
                    <div className="flex items-center">
                      <Switch id="mobile-auto-refresh" />
                      <label htmlFor="mobile-auto-refresh" className="ml-2 text-sm">Auto-refresh</label>
                    </div>
                    <Button className="w-full bg-india-saffron hover:bg-india-saffron/90">
                      <Shield className="mr-2 h-4 w-4" /> Take Action
                    </Button>
                  </div>
                
                  {alerts.map(alert => (
                    <div key={alert.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <div 
                        className="p-4 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:bg-gray-50"
                        onClick={() => toggleAlert(alert.id)}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="pt-1">
                            {getSeverityIcon(alert.severity)}
                          </div>
                          <div>
                            <div className="flex items-center">
                              <h3 className="font-medium text-india-navyBlue">{alert.title}</h3>
                              <div className="ml-2">{getStatusIndicator(alert.status)}</div>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              <span className={`text-xs px-2 py-1 rounded-full ${getSeverityColor(alert.severity)}`}>
                                {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                              </span>
                              <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(alert.status)}`}>
                                {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                              </span>
                              <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                                {alert.platform}
                              </span>
                              <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-800">
                                {alert.accounts} Accounts
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center ml-auto mt-4 md:mt-0">
                          <span className="text-xs text-gray-500 mr-4 whitespace-nowrap">
                            <Clock className="inline h-3 w-3 mr-1" />
                            {alert.timestamp}
                          </span>
                          {isExpanded(alert.id) ? 
                            <ChevronUp className="h-5 w-5 text-gray-400" /> : 
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                          }
                        </div>
                      </div>
                      
                      {isExpanded(alert.id) && (
                        <div className="border-t border-gray-200 p-4 bg-gray-50">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="font-medium text-india-navyBlue mb-2">Alert Details</h4>
                              <ul className="space-y-2 text-sm">
                                <li><span className="font-medium">Alert ID:</span> {alert.id}</li>
                                <li><span className="font-medium">Category:</span> {alert.category.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</li>
                                <li><span className="font-medium">Detection Time:</span> {alert.timestamp}</li>
                                <li><span className="font-medium">Platform:</span> {alert.platform}</li>
                                <li><span className="font-medium">Affected Accounts:</span> {alert.accounts}</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium text-india-navyBlue mb-2">Recommended Actions</h4>
                              <ul className="space-y-2 text-sm list-disc list-inside">
                                <li>Escalate to appropriate team for immediate review</li>
                                <li>Request IP blocking for suspicious sources</li>
                                <li>Initiate takedown procedures with platform liaison</li>
                                <li>Prepare evidence collection for legal action</li>
                              </ul>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-3">
                            <Button className="bg-india-navyBlue hover:bg-india-navyBlue/90">
                              Investigate
                            </Button>
                            <Button variant="outline">
                              <ExternalLink className="mr-2 h-4 w-4" /> View Detailed Report
                            </Button>
                            <Button variant="outline">
                              <Shield className="mr-2 h-4 w-4" /> Initiate Response
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="trends">
                  <Card>
                    <CardHeader>
                      <CardTitle>Threat Trend Analysis</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center py-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-india-navyBlue/10 mb-4">
                        <LineChartIcon className="h-8 w-8 text-india-navyBlue" />
                      </div>
                      <h3 className="text-xl font-medium text-india-navyBlue mb-2">Advanced Analytics Dashboard</h3>
                      <p className="text-gray-600 mb-6 max-w-md mx-auto">
                        This section contains advanced threat analytics and requires special authorization.
                      </p>
                      <Button variant="outline">Request Access</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="settings">
                  <Card>
                    <CardHeader>
                      <CardTitle>Alert Notification Settings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Email Notifications</h4>
                            <p className="text-sm text-gray-500">Receive alerts via email</p>
                          </div>
                          <Switch />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">SMS Alerts</h4>
                            <p className="text-sm text-gray-500">Receive alerts via SMS</p>
                          </div>
                          <Switch />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Critical Alerts Only</h4>
                            <p className="text-sm text-gray-500">Only be notified for critical severity</p>
                          </div>
                          <Switch />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Daily Digest</h4>
                            <p className="text-sm text-gray-500">Daily summary of all alerts</p>
                          </div>
                          <Switch />
                        </div>
                        
                        <div className="pt-4">
                          <Button className="mr-2">Save Settings</Button>
                          <Button variant="outline">Reset Defaults</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Custom icon component
const LineChartIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18"></path>
    <path d="M18 17V9"></path>
    <path d="M13 17V5"></path>
    <path d="M8 17v-3"></path>
  </svg>
);

export default Alerts;
