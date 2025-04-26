
import React from 'react';
import ServiceCard, { ServiceProps } from '@/components/services/ServiceCard';

const Services: React.FC = () => {
  const services: ServiceProps[] = [
    {
      title: 'Automated Testing Implementation',
      description: [
        'Custom test automation frameworks tailored to your application',
        'Cross-browser and cross-platform test automation',
        'Integration with CI/CD pipelines',
        'Maintenance and optimization of existing test suites'
      ],
      image: 'https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tools: [
        'https://www.selenium.dev/images/selenium_logo_square_green.png',
        'https://upload.wikimedia.org/wikipedia/commons/a/a4/Cypress.png',
        'https://avatars.githubusercontent.com/u/3221291?s=200&v=4', // Appium
        'https://upload.wikimedia.org/wikipedia/commons/e/e5/Jest_Logo.png',
      ],
    },
    {
      title: 'Manual Testing Services',
      description: [
        'Comprehensive test case development and execution',
        'Exploratory testing for edge cases and user experience',
        'User acceptance testing (UAT) facilitation',
        'Detailed defect reporting and verification'
      ],
      image: 'https://images.unsplash.com/photo-1581092335397-9fa73b388d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tools: [
        'https://upload.wikimedia.org/wikipedia/commons/8/8d/YouTrack_Icon.svg',
        'https://upload.wikimedia.org/wikipedia/commons/4/4e/Jira_Software_%28Blue%29.svg',
        'https://upload.wikimedia.org/wikipedia/commons/8/8f/Testrail.svg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/200px-Notion-logo.svg.png',
      ],
    },
    {
      title: 'Performance Testing',
      description: [
        'Load testing to identify performance bottlenecks',
        'Stress testing to determine system breaking points',
        'Scalability testing for growing applications',
        'Performance monitoring and optimization recommendations'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tools: [
        'https://upload.wikimedia.org/wikipedia/commons/5/59/JMeter.svg',
        'https://avatars.githubusercontent.com/u/6975870?s=200&v=4', // Gatling
        'https://upload.wikimedia.org/wikipedia/commons/3/3c/Grafana_logo.svg',
        'https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg',
      ],
    },
    {
      title: 'API Testing',
      description: [
        'RESTful and GraphQL API test automation',
        'Contract testing between services',
        'Security testing for API endpoints',
        'Performance testing for critical APIs'
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tools: [
        'https://www.postman.com/assets/logos/postman-logo-icon-orange.svg',
        'https://avatars.githubusercontent.com/u/19369327?s=200&v=4', // RestAssured
        'https://github.com/pactumjs.png?size=200', // Pactum
        'https://upload.wikimedia.org/wikipedia/commons/9/9a/Swagger-logo.png',
      ],
    },
    {
      title: 'Test Strategy Consulting',
      description: [
        'Development of comprehensive test strategies',
        'Test process improvement recommendations',
        'Testing tool selection and implementation',
        'Team coaching and best practices implementation'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tools: [
        'https://upload.wikimedia.org/wikipedia/commons/4/4e/Jira_Software_%28Blue%29.svg',
        'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
        'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
        'https://upload.wikimedia.org/wikipedia/commons/4/48/Agile-framework-icon.svg',
      ],
    },
  ];
  
  return (
    <div className="py-12">
      <div className="section-container">
        <h1 className="text-4xl font-bold mb-4 text-center">Services</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
          Comprehensive testing services to help you deliver high-quality software products.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
