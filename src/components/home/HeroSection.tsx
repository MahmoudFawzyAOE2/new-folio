
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-secondary to-background">
      <div className="section-container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Software Testing <span className="text-primary">Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              I help companies deliver flawless software through meticulous testing strategies,
              automation, and quality assurance best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Me <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" /> Download CV
              </Button>
            </div>
          </div>
          <div className="md:pl-8 animate-fade-in">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=800&q=80"
                alt="Software testing professional"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
