
import React from 'react';
import { 
  ShieldAlert, 
  AlertTriangle, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Map, 
  Bell, 
  RefreshCw
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

// Dashboard components would typically connect to real data
// This is a simulated version for the MVP

const StatCard = ({ title, value, icon, change, changeType }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={`text-xs ${changeType === 'positive' ? 'text-green-500' : 'text-red-500'} flex items-center mt-1`}>
          {changeType === 'positive' ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingUp className="h-3 w-3 mr-1 transform rotate-180" />}
          {change}% from last month
        </p>
      </CardContent>
    </Card>
  );
};

const DashboardOverview = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-india-navyBlue">Agency Dashboard</h1>
            <p className="text-gray-500">Real-time overview of fake account activities</p>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <Button variant="outline" className="mr-3 border-india-navyBlue text-india-navyBlue">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button className="bg-india-saffron hover:bg-india-saffron/90 text-white">
              <Bell className="h-4 w-4 mr-2" />
              Alerts
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Detected Threats" 
            value="284" 
            icon={<ShieldAlert className="h-4 w-4 text-red-500" />}
            change="12"
            changeType="negative"
          />
          <StatCard 
            title="High Risk Profiles" 
            value="86" 
            icon={<AlertTriangle className="h-4 w-4 text-amber-500" />}
            change="6"
            changeType="negative"
          />
          <StatCard 
            title="Profiles Verified" 
            value="1,549" 
            icon={<CheckCircle className="h-4 w-4 text-green-500" />}
            change="24"
            changeType="positive"
          />
          <StatCard 
            title="Bot Networks" 
            value="12" 
            icon={<Users className="h-4 w-4 text-blue-500" />}
            change="3"
            changeType="negative"
          />
        </div>

        {/* Map and Alerts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Threat Map - In a real implementation, this would be a GeoJSON map of India */}
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="text-lg font-medium flex items-center">
                <Map className="h-5 w-5 mr-2 text-india-navyBlue" />
                Geographic Threat Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-sm text-gray-500 mb-4">Map data visualization would appear here</p>
                  <p className="text-xs text-gray-400">Shows fake account hotspots across India with real-time updates</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium flex items-center">
                <Bell className="h-5 w-5 mr-2 text-india-navyBlue" />
                Recent Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-red-50 p-3 rounded-md border-l-4 border-red-500">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Bot Network Detected</p>
                      <p className="text-xs text-gray-500">43 accounts targeting election hashtags</p>
                      <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-amber-50 p-3 rounded-md border-l-4 border-amber-500">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">DeepFake Profile Surge</p>
                      <p className="text-xs text-gray-500">12 new accounts using generated images</p>
                      <p className="text-xs text-gray-400 mt-1">6 hours ago</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Cross-Platform Campaign</p>
                      <p className="text-xs text-gray-500">Similar messaging across Twitter, Facebook</p>
                      <p className="text-xs text-gray-400 mt-1">1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Risk Analysis and Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Risk Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Risk Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>DeepFake Images</span>
                    <span className="font-medium">64%</span>
                  </div>
                  <Progress value={64} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Bot Text Patterns</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Suspicious Network Activity</span>
                    <span className="font-medium">42%</span>
                  </div>
                  <Progress value={42} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Cross-Platform Correlation</span>
                    <span className="font-medium">56%</span>
                  </div>
                  <Progress value={56} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Priority Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Priority Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-red-500 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Review High-Risk Network</p>
                      <p className="text-xs text-gray-500">12 accounts targeting defense hashtags</p>
                    </div>
                  </div>
                  <Button size="sm" className="bg-india-navyBlue hover:bg-india-navyBlue/90 text-white">
                    View
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-amber-500 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Process Takedown Requests</p>
                      <p className="text-xs text-gray-500">24 pending requests for Meta platforms</p>
                    </div>
                  </div>
                  <Button size="sm" className="bg-india-navyBlue hover:bg-india-navyBlue/90 text-white">
                    Process
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-blue-500 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Review Blockchain Registry</p>
                      <p className="text-xs text-gray-500">36 new entries awaiting verification</p>
                    </div>
                  </div>
                  <Button size="sm" className="bg-india-navyBlue hover:bg-india-navyBlue/90 text-white">
                    Review
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
