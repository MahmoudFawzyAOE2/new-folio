
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background border-t">
      <div className="section-container py-6">
        <p className="text-center text-muted-foreground text-sm">
          © {currentYear} QA Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
