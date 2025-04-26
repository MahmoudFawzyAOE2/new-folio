
import React from 'react';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export interface ProjectProps {
  title: string;
  description: string[];
  image: string;
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, image, githubUrl }) => {
  return (
    <Card className="card-hover overflow-hidden">
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
      <CardContent>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github className="h-4 w-4" /> View on GitHub
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
