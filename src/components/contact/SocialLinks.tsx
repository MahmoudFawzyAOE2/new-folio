
import React from 'react';
import { Linkedin, Mail, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const SocialLinks: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile',
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: <Mail className="h-5 w-5" />,
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/yourphonenumber',
      icon: <ExternalLink className="h-5 w-5" />,
    },
    {
      name: 'Upwork',
      url: 'https://www.upwork.com/freelancers/yourusername',
      icon: <ExternalLink className="h-5 w-5" />,
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Connect with me</h3>
      <div className="flex flex-wrap gap-3">
        {socialLinks.map((link) => (
          <Button
            key={link.name}
            variant="outline"
            asChild
            className="flex items-center gap-2"
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
              {link.name}
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
