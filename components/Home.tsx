import React from 'react';
import { Link } from 'react-router-dom';
import { COUNCILS } from '../constants';
import { Trash2, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-8">
        <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
          <Trash2 size={32} />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Council Bin Apps
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Select a council below to view its specific Privacy Policy.
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-3xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(COUNCILS).map((council) => (
            <Link 
              key={council.id} 
              to={`/${council.id}`}
              className="bg-white overflow-hidden shadow rounded-xl hover:shadow-lg hover:ring-2 hover:ring-brand-500 transition-all duration-200 group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <Trash2 size={20} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
                  {council.appName}
                </h3>
                <p className="text-sm text-gray-500 mt-1 mb-4">
                  {council.councilName}
                </p>
                <div className="flex items-center text-sm font-medium text-brand-600">
                  View Policy <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;