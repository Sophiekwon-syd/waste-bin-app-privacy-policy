import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import PolicySection from './PolicySection';
import { getCouncilConfig, generatePolicyData } from '../constants';
import { ShieldCheck, Calendar } from 'lucide-react';

const PolicyPage: React.FC = () => {
  const { councilId } = useParams<{ councilId: string }>();
  const config = getCouncilConfig(councilId);

  // If council not found, redirect to home
  if (!config) {
    return <Navigate to="/" replace />;
  }

  const policyData = generatePolicyData(config);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header appName={config.appName} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-brand-900 text-white py-16 md:py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
             </svg>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4 text-brand-200">
                <ShieldCheck size={24} />
                <span className="font-semibold tracking-wide uppercase text-sm">Legal Documentation</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                {config.appName} Privacy Policy
              </h1>
              <p className="text-brand-100 text-lg md:text-xl max-w-2xl leading-relaxed">
                Transparency about how {config.appName} collects, uses, and protects your data while helping you manage your waste collection schedule.
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm text-brand-300 bg-brand-800/50 w-fit px-4 py-2 rounded-full backdrop-blur-sm">
                <Calendar size={14} />
                <span>Last Updated: {config.lastUpdated}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="flex gap-12">
            {/* Sidebar Navigation (Desktop) */}
            <Sidebar sections={policyData} />

            {/* Main Text Content */}
            <div className="flex-1 max-w-3xl mx-auto lg:mx-0">
              {policyData.map((section) => (
                <PolicySection key={section.id} data={section} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer appName={config.appName} councilName={config.councilName} />
    </div>
  );
};

export default PolicyPage;