import React from 'react';
import { PolicySectionData } from '../types';

interface PolicySectionProps {
  data: PolicySectionData;
}

const PolicySection: React.FC<PolicySectionProps> = ({ data }) => {
  return (
    <section id={data.id} className="scroll-mt-24 mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
        {data.title}
      </h2>
      <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
        {data.content}
      </div>
    </section>
  );
};

export default PolicySection;