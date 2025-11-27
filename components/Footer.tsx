import React from 'react';

interface FooterProps {
  appName: string;
  councilName: string;
}

const Footer: React.FC<FooterProps> = ({ appName, councilName }) => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg mb-2">{appName}</h3>
            <p className="text-sm text-gray-400 max-w-md">
              Simplifying waste collection for {councilName}. Never miss a bin day again.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-white font-medium">Privacy Policy</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} {appName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;