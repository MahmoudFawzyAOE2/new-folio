
import React from 'react';

const InfiniteCarousel: React.FC = () => {
  const phrases = [
    "Quality is not an act, it's a habit",
    "Find the bugs before your users do",
    "Testing is about confidence, not perfection",
    "Quality assurance is a developer's best friend",
    "Test early, test often, test smart",
    "Leave no bug unturned",
    "The devil is in the details",
    "Good quality means good business",
    "Automation is the key to scalable testing",
    "Quality is everyone's responsibility",
  ];

  return (
    <section className="bg-background py-12 overflow-hidden border-y">
      <div className="flex whitespace-nowrap">
        <div className="animate-marquee flex">
          {phrases.map((phrase, i) => (
            <div key={i} className="mx-8 text-xl md:text-2xl font-medium">
              {phrase} <span className="text-primary mx-2">•</span>
            </div>
          ))}
        </div>
        <div className="animate-marquee flex" aria-hidden="true">
          {phrases.map((phrase, i) => (
            <div key={i} className="mx-8 text-xl md:text-2xl font-medium">
              {phrase} <span className="text-primary mx-2">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiniteCarousel;
