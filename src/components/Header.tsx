
import React from 'react';
import { Shield, Menu, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AshokChakra from './AshokChakra';

const Header = () => {
  return (
    <header className="w-full bg-india-navyBlue text-white">
      {/* Top bar with national emblem and ministry info */}
      <div className="bg-india-navyBlue px-4 py-2 flex items-center justify-between text-xs md:text-sm border-b border-white/20">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/c2ab8b88-6190-49fe-af92-35a0a53524b0.png" 
            alt="Government of India" 
            className="h-6"
          />
          <div className="hidden md:block font-semibold">
            <p>भारत सरकार | GOVERNMENT OF INDIA</p>
            <p>गृह मंत्रालय | MINISTRY OF HOME AFFAIRS</p>
          </div>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center text-white">
              <Globe className="mr-1 h-4 w-4" />
              <span>LANGUAGE</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>English</DropdownMenuItem>
            <DropdownMenuItem className="font-devanagari">हिंदी</DropdownMenuItem>
            <DropdownMenuItem>தமிழ்</DropdownMenuItem>
            <DropdownMenuItem>বাংলা</DropdownMenuItem>
            <DropdownMenuItem>తెలుగు</DropdownMenuItem>
            <DropdownMenuItem>मराठी</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Main header with logo and navigation */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <div className="mr-3">
            <Shield className="h-8 w-8 text-india-saffron" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <h1 className="text-xl md:text-2xl font-bold mr-2">
                ChakraShield
              </h1>
              <AshokChakra size="sm" />
            </div>
            <p className="text-xs md:text-sm font-devanagari">
              साइबर सुरक्षा प्रणाली
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" className="text-white hidden md:flex">
            Login
          </Button>
          <Button className="bg-india-saffron hover:bg-india-saffron/90 text-white hidden md:flex">
            Register
          </Button>
          <Button variant="ghost" className="md:hidden p-2">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Navigation strip with tricolor border */}
      <div className="india-tricolor-border bg-white/10 text-white">
        <nav className="flex overflow-x-auto">
          <a href="/" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap">Home</a>
          <a href="/scan" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap">Scan Profile</a>
          <a href="/dashboard" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap">Dashboard</a>
          <a href="/blockchain" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap">Blockchain Registry</a>
          <a href="/reports" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap">Reports</a>
          <a href="/alerts" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap">Alerts</a>
          <a href="/about" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
