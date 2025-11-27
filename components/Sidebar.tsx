import React, { useEffect, useState } from 'react';
import { PolicySectionData } from '../types';
import { ChevronRight } from 'lucide-react';

interface SidebarProps {
  sections: PolicySectionData[];
}

const Sidebar: React.FC<SidebarProps> = ({ sections }) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -60% 0px' }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside className="hidden lg:block w-80 shrink-0">
      <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 pl-3">
          Contents
        </h3>
        <nav>
          <ul className="space-y-1">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`group flex items-center justify-between py-2 px-3 text-sm rounded-md transition-all duration-200 ${
                    activeId === section.id
                      ? 'bg-brand-50 text-brand-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span className="truncate">{section.title}</span>
                  {activeId === section.id && (
                    <ChevronRight size={14} className="text-brand-500" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="mt-8 p-4 bg-brand-50 rounded-xl">
          <p className="text-xs text-brand-800 font-medium mb-1">Need help?</p>
          <p className="text-xs text-brand-600 mb-3">Contact our support team for specific privacy concerns.</p>
          <a href="#contact" className="text-xs font-bold text-brand-700 hover:underline">
            Go to Contact &rarr;
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;