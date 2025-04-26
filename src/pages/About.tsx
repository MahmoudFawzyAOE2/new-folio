
import React from 'react';
import ExperienceSection from '@/components/about/ExperienceSection';

const About: React.FC = () => {
  const experiences = [
    {
      company: 'Tech Innovations Inc.',
      position: 'Senior QA Engineer',
      details: 'Led a team of 5 QA engineers in implementing automated testing strategies across web and mobile applications. Reduced testing time by 40% while improving bug detection rates by 25%.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      company: 'Global Software Solutions',
      position: 'QA Automation Specialist',
      details: 'Designed and implemented comprehensive test automation frameworks using Selenium, Cypress, and Appium. Integrated CI/CD pipelines with automated testing, ensuring 99.5% test coverage.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      company: 'Innovative Apps LLC',
      position: 'QA Analyst',
      details: 'Performed manual and automated testing for mobile applications across iOS and Android platforms. Created detailed test plans, test cases, and defect reports, improving product quality by 30%.',
      image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      company: 'Software Excellence Corp',
      position: 'Junior QA Tester',
      details: 'Started my career performing manual testing on web applications. Gained experience in functional testing, regression testing, and defect tracking, setting the foundation for my testing career.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
  ];
  
  return (
    <div className="py-12">
      <div className="section-container">
        <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
          With over 8 years of experience in software testing, I've helped companies deliver high-quality software that meets and exceeds user expectations.
        </p>
      </div>
      
      <ExperienceSection experiences={experiences} />
    </div>
  );
};

export default About;
