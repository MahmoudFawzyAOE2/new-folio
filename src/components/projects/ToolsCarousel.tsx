
import React from 'react';

interface ToolsCarouselProps {
  tools: string[];
}

const ToolsCarousel: React.FC<ToolsCarouselProps> = ({ tools }) => {
  return (
    <section className="py-12 bg-secondary overflow-hidden">
      <h3 className="text-center text-2xl font-bold mb-8">Technologies & Tools</h3>
      
      <div className="flex whitespace-nowrap">
        <div className="animate-marquee flex">
          {tools.map((tool, i) => (
            <div key={i} className="mx-8 flex items-center space-x-2">
              <div className="bg-background p-2 rounded-full">
                <img 
                  src={tool} 
                  alt="Testing tool" 
                  className="h-12 w-12 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="animate-marquee flex" aria-hidden="true">
          {tools.map((tool, i) => (
            <div key={i} className="mx-8 flex items-center space-x-2">
              <div className="bg-background p-2 rounded-full">
                <img 
                  src={tool} 
                  alt="Testing tool" 
                  className="h-12 w-12 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsCarousel;
