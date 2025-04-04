
import React, { useState } from 'react';
import { Shield, Menu, Globe, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import AshokChakra from './AshokChakra';
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full bg-india-navyBlue text-white">
      {/* Top bar with emblem and language selector */}
      <div className="bg-india-navyBlue px-4 py-2 flex items-center justify-between text-xs md:text-sm border-b border-white/20">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/c2ab8b88-6190-49fe-af92-35a0a53524b0.png" 
            alt="Digital India Initiative" 
            className="h-6"
          />
          <div className="hidden md:block font-semibold">
            <p>Digital India Initiative</p>
          </div>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center text-white">
              <Globe className="mr-1 h-4 w-4" />
              <span>LANGUAGE</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
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
          <Link to="/login">
            <Button variant="ghost" className="text-white hidden md:flex">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-india-saffron hover:bg-india-saffron/90 text-white hidden md:flex">
              Register
            </Button>
          </Link>
          <Button variant="ghost" className="md:hidden p-2" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Navigation strip with tricolor border */}
      <div className="india-tricolor-border bg-white/10 text-white">
        <nav className="flex overflow-x-auto">
          <Link to="/" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap">Home</Link>
          <Link to="/scan" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap">Scan Profile</Link>
          <Link to="/dashboard" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap">Dashboard</Link>
          <Link to="/blockchain" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap">Blockchain Registry</Link>
          <Link to="/reports" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap">Reports</Link>
          <Link to="/alerts" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap">Alerts</Link>
          <Link to="/about" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap">About</Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && isMobile && (
        <div className="md:hidden fixed inset-0 z-50 bg-india-navyBlue bg-opacity-95 flex flex-col">
          <div className="flex justify-end p-4">
            <Button variant="ghost" onClick={toggleMobileMenu} className="text-white">
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex flex-col items-center py-8 space-y-6">
            <Link to="/" className="text-white text-xl font-medium" onClick={toggleMobileMenu}>Home</Link>
            <Link to="/scan" className="text-white text-xl font-medium" onClick={toggleMobileMenu}>Scan Profile</Link>
            <Link to="/dashboard" className="text-white text-xl font-medium" onClick={toggleMobileMenu}>Dashboard</Link>
            <Link to="/blockchain" className="text-white text-xl font-medium" onClick={toggleMobileMenu}>Blockchain Registry</Link>
            <Link to="/reports" className="text-white text-xl font-medium" onClick={toggleMobileMenu}>Reports</Link>
            <Link to="/alerts" className="text-white text-xl font-medium" onClick={toggleMobileMenu}>Alerts</Link>
            <Link to="/about" className="text-white text-xl font-medium" onClick={toggleMobileMenu}>About</Link>
            <div className="pt-6 flex flex-col space-y-3">
              <Link to="/login">
                <Button variant="outline" className="w-40">Login</Button>
              </Link>
              <Link to="/register">
                <Button className="bg-india-saffron hover:bg-india-saffron/90 text-white w-40">Register</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
