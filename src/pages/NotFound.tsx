
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AshokChakra from "@/components/AshokChakra";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <AlertTriangle className="h-20 w-20 text-india-navyBlue" />
              <div className="absolute -bottom-2 -right-2">
                <AshokChakra size="md" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold mb-4 text-india-navyBlue">404</h1>
          <p className="text-xl text-gray-700 mb-2">Page Not Found</p>
          <p className="text-gray-500 mb-8">
            The page you are looking for does not exist or has been moved.
          </p>
          
          <div className="space-y-4">
            <Link to="/">
              <Button className="bg-india-navyBlue hover:bg-india-navyBlue/90 w-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Home
              </Button>
            </Link>
            
            <p className="text-sm text-gray-500 pt-4">
              If you believe this is an error, please contact our support team at{" "}
              <a href="mailto:support@chakrashield.in" className="text-india-ashoka underline">
                support@chakrashield.in
              </a>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
