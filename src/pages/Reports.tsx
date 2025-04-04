
import React from 'react';
import { 
  BarChart,
  AreaChart,
  Table,
  File,
  Download,
  Calendar,
  Filter
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Reports = () => {
  const recentReports = [
    { id: 1, title: "Coordinated Fake Account Network", date: "2025-04-01", status: "High", type: "Network Analysis" },
    { id: 2, title: "Deepfake Detection Report", date: "2025-03-28", status: "Medium", type: "Image Analysis" },
    { id: 3, title: "Cross-Platform Bot Activity", date: "2025-03-25", status: "Critical", type: "Behavior Analysis" },
    { id: 4, title: "Misinformation Campaign", date: "2025-03-20", status: "High", type: "Content Analysis" },
    { id: 5, title: "Foreign Influence Operation", date: "2025-03-15", status: "Critical", type: "Network Analysis" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Reports Dashboard</h1>
          <p className="text-gray-600">Generate and access analytical reports on fake profile activities</p>
        </div>
        
        <Tabs defaultValue="reports" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="reports" className="flex items-center gap-2">
              <File className="h-4 w-4" />
              <span>Reports</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart className="h-4 w-4" />
              <span>Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="trends" className="flex items-center gap-2">
              <AreaChart className="h-4 w-4" />
              <span>Trends</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="reports">
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Date Range</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </Button>
              </div>
              <Button className="bg-india-navyBlue">
                <File className="h-4 w-4 mr-2" />
                Generate New Report
              </Button>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
                <CardDescription>Access and download previously generated reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b">
                        <th className="py-3 px-4 text-left">Report Title</th>
                        <th className="py-3 px-4 text-left">Date</th>
                        <th className="py-3 px-4 text-left">Threat Level</th>
                        <th className="py-3 px-4 text-left">Type</th>
                        <th className="py-3 px-4 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentReports.map((report) => (
                        <tr key={report.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">{report.title}</td>
                          <td className="py-3 px-4">{report.date}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              report.status === 'Critical' ? 'bg-red-100 text-red-800' :
                              report.status === 'High' ? 'bg-orange-100 text-orange-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {report.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">{report.type}</td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                <Download className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <File className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                <div className="text-sm text-gray-500">Showing 5 of 24 reports</div>
                <div className="flex space-x-1">
                  <Button variant="outline" size="sm" disabled>Previous</Button>
                  <Button variant="outline" size="sm">Next</Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Detection Metrics</CardTitle>
                  <CardDescription>Fake profile detection statistics</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center bg-gray-50 rounded-md">
                  <div className="text-center text-gray-500">
                    <BarChart className="h-12 w-12 mx-auto mb-2" />
                    <p>Analytics visualization would appear here</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Geographic Distribution</CardTitle>
                  <CardDescription>Origin of suspicious accounts</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center bg-gray-50 rounded-md">
                  <div className="text-center text-gray-500">
                    <BarChart className="h-12 w-12 mx-auto mb-2" />
                    <p>Map visualization would appear here</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="trends">
            <Card>
              <CardHeader>
                <CardTitle>Fake Account Activity Trends</CardTitle>
                <CardDescription>Monthly detection trends and patterns</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center bg-gray-50 rounded-md">
                <div className="text-center text-gray-500">
                  <AreaChart className="h-12 w-12 mx-auto mb-2" />
                  <p>Trend visualization would appear here</p>
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

export default Reports;
