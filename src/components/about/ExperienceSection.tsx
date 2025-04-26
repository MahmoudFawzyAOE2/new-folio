
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Experience = {
  company: string;
  position: string;
  details: string;
  image: string;
};

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section className="section-container">
      <h2 className="text-3xl font-bold mb-12 text-center">My Professional Journey</h2>
      
      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className={`grid grid-cols-1 ${
              index % 2 === 0 ? 'md:grid-cols-[1fr_2fr]' : 'md:grid-cols-[2fr_1fr] md:flex-row-reverse'
            } gap-8 items-center`}
          >
            <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src={exp.image} 
                  alt={exp.company} 
                  className="w-full h-auto object-cover aspect-video"
                />
              </div>
            </div>
            
            <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
              <h3 className="text-2xl font-semibold mb-2">{exp.position}</h3>
              <h4 className="text-xl text-primary mb-4">{exp.company}</h4>
              <p className="text-muted-foreground">{exp.details}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <Button className="flex items-center gap-2">
          <Download className="h-4 w-4" /> Download Resume
        </Button>
      </div>
    </section>
  );
};

export default ExperienceSection;
