
import React from 'react';
import { Shield } from 'lucide-react';
import { Link } from "react-router-dom";
import AshokChakra from './AshokChakra';

const Footer = () => {
  return (
    <footer className="bg-india-navyBlue text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Shield className="h-8 w-8 text-india-saffron mr-3" />
            <div>
              <div className="flex items-center">
                <h3 className="text-xl font-bold mr-2">ChakraShield</h3>
                <AshokChakra size="sm" />
              </div>
              <p className="text-xs font-devanagari">साइबर सुरक्षा प्रणाली</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-300 mb-1">A Digital India Initiative</p>
            <div className="flex items-center justify-center md:justify-end space-x-1">
              <span className="w-3 h-3 bg-india-saffron rounded-full"></span>
              <span className="w-3 h-3 bg-white rounded-full"></span>
              <span className="w-3 h-3 bg-india-green rounded-full"></span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-3 text-india-saffron">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/scan" className="hover:text-india-saffron">Profile Scanner</Link></li>
              <li><Link to="/dashboard" className="hover:text-india-saffron">Agency Dashboard</Link></li>
              <li><Link to="/blockchain" className="hover:text-india-saffron">Blockchain Registry</Link></li>
              <li><Link to="/reports" className="hover:text-india-saffron">Reports</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-india-saffron">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/documentation" className="hover:text-india-saffron">Documentation</Link></li>
              <li><Link to="/agencies" className="hover:text-india-saffron">For Agencies</Link></li>
              <li><Link to="/api" className="hover:text-india-saffron">API Integration</Link></li>
              <li><Link to="/research" className="hover:text-india-saffron">Research Papers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-india-saffron">Digital India</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://digitalindia.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-india-saffron">Digital India Portal</a></li>
              <li><a href="https://www.mygov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-india-saffron">MyGov</a></li>
              <li><a href="https://www.cert-in.org.in/" target="_blank" rel="noopener noreferrer" className="hover:text-india-saffron">CERT-In</a></li>
              <li><a href="https://uidai.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-india-saffron">Aadhaar</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-india-saffron">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: support@chakrashield.in</li>
              <li>Helpline: 1800-XXX-XXXX</li>
              <li>For emergencies: cybersoc@cert-in.org.in</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-white/10 text-sm text-center md:flex md:justify-between md:items-center">
          <p>© 2023 ChakraShield - All rights reserved</p>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center md:justify-end gap-4">
            <Link to="/terms" className="hover:text-india-saffron">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-india-saffron">Privacy Policy</Link>
            <Link to="/security" className="hover:text-india-saffron">Security</Link>
            <Link to="/accessibility" className="hover:text-india-saffron">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
