
import React, { useState } from 'react';
import { Shield, Menu, Globe, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useLocation } from "react-router-dom";
import AshokChakra from './AshokChakra';
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Don't show login/register buttons if we're already on those pages
  const showAuthButtons = !['/login', '/register'].includes(location.pathname);

  return (
    <header className="w-full bg-india-navyBlue text-white shadow-lg">
      {/* Main header with logo and navigation */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="mr-3 relative">
              <div className="absolute inset-0 bg-india-saffron rounded-full opacity-20 animate-pulse"></div>
              <Shield className="h-9 w-9 text-india-saffron relative z-10" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <h1 className="text-xl md:text-2xl font-bold mr-2 bg-gradient-to-r from-india-saffron to-white bg-clip-text text-transparent">
                  ChakraShield
                </h1>
                <AshokChakra size="sm" spinning={true} />
              </div>
              <p className="text-xs md:text-sm font-devanagari text-white/90">
                साइबर सुरक्षा प्रणाली
              </p>
            </div>
          </Link>
        </div>

        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="bg-transparent border-white/20 text-white hover:bg-white/10">
                <Globe className="mr-1 h-4 w-4" />
                <span className="hidden sm:inline">Language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem className="font-devanagari">हिंदी</DropdownMenuItem>
              <DropdownMenuItem>தமிழ்</DropdownMenuItem>
              <DropdownMenuItem>বাংলা</DropdownMenuItem>
              <DropdownMenuItem>తెలుగు</DropdownMenuItem>
              <DropdownMenuItem>മലയാളം</DropdownMenuItem>
              <DropdownMenuItem>ಕನ್ನಡ</DropdownMenuItem>
              <DropdownMenuItem>ગુજરાતી</DropdownMenuItem>
              <DropdownMenuItem>ଓଡ଼ିଆ</DropdownMenuItem>
              <DropdownMenuItem>অসমীয়া</DropdownMenuItem>
              <DropdownMenuItem>ਪੰਜਾਬੀ</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {showAuthButtons && (
            <>
              <Link to="/login">
                <Button variant="ghost" className="text-white hidden md:flex hover:bg-white/10">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-india-saffron hover:bg-india-saffron/90 text-white hidden md:flex">
                  Register
                </Button>
              </Link>
            </>
          )}
          <Button variant="ghost" className="md:hidden p-2 hover:bg-white/10" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Navigation strip with tricolor border */}
      <div className="relative bg-white/10 text-white before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-india-saffron after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-india-green">
        <nav className="container mx-auto flex overflow-x-auto scrollbar-none">
          <Link to="/" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap transition-colors">Home</Link>
          <Link to="/scan" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap transition-colors">Scan Profile</Link>
          <Link to="/dashboard" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap transition-colors">Dashboard</Link>
          <Link to="/blockchain" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap transition-colors">Blockchain Registry</Link>
          <Link to="/reports" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap transition-colors">Reports</Link>
          <Link to="/alerts" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap transition-colors">Alerts</Link>
          <Link to="/about" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap transition-colors">About</Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && isMobile && (
        <div className="md:hidden fixed inset-0 z-50 bg-india-navyBlue bg-opacity-98 flex flex-col">
          <div className="flex justify-end p-4">
            <Button variant="ghost" onClick={toggleMobileMenu} className="text-white hover:bg-white/10">
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex flex-col items-center py-8 space-y-6">
            <Link to="/" className="text-white text-xl font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>Home</Link>
            <Link to="/scan" className="text-white text-xl font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>Scan Profile</Link>
            <Link to="/dashboard" className="text-white text-xl font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>Dashboard</Link>
            <Link to="/blockchain" className="text-white text-xl font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>Blockchain Registry</Link>
            <Link to="/reports" className="text-white text-xl font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>Reports</Link>
            <Link to="/alerts" className="text-white text-xl font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>Alerts</Link>
            <Link to="/about" className="text-white text-xl font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>About</Link>
            {showAuthButtons && (
              <div className="pt-6 flex flex-col space-y-3">
                <Link to="/login" onClick={toggleMobileMenu}>
                  <Button variant="outline" className="w-40 border-white/20 text-white hover:bg-white/10">Login</Button>
                </Link>
                <Link to="/register" onClick={toggleMobileMenu}>
                  <Button className="bg-india-saffron hover:bg-india-saffron/90 text-white w-40">Register</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
