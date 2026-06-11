import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({ children, className = '', id }: SectionWrapperProps) {
  return (
    <section id={id} className={`relative w-full overflow-hidden ${className}`}>
      <div className="mx-auto w-full px-4 md:px-12 max-w-[1400px]">
        {children}
      </div>
    </section>
  );
}
