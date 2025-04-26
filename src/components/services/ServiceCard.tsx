
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export interface ServiceProps {
  title: string;
  description: string[];
  image: string;
  tools: string[];
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, image, tools }) => {
  return (
    <Card className="card-hover flex flex-col h-full">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-4">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        
        <div className="mt-4">
          <p className="text-sm font-medium mb-2">Tools & Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, i) => (
              <div 
                key={i} 
                className="bg-secondary rounded-full p-1"
              >
                <img 
                  src={tool} 
                  alt="Tool" 
                  className="h-6 w-6 object-contain" 
                />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link
            to={`/contact?subject=Request for ${title}`}
            className="flex items-center gap-2 w-full justify-center"
          >
            Request Service <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
