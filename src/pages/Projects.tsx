
import React from 'react';
import ProjectCard, { ProjectProps } from '@/components/projects/ProjectCard';
import ToolsCarousel from '@/components/projects/ToolsCarousel';

const Projects: React.FC = () => {
  // Static project data with updated images
  const staticProjects: ProjectProps[] = [
    {
      title: "Testing The Guru99 Bank Demo Website",
      description: [
        "Tests multiple versions of Guru99 Bank Demo website.",
        "Performs SRS analysis, unit, integration, and system testing.",
        "Implement and executes test cases and reports bugs."
      ],
      image: "https://images.unsplash.com/photo-1515965885361-f43ed66ff4cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Bank/finance themed image
      githubUrl: "https://github.com/MahmoudFawzyAOE2/Guru99-SW-Tesing-Project-1",
    },
    {
      title: "Sutra E-commerce Test Automation",
      description: [
        "Automates testing of multiple core functionalities.",
        "Streamlines the testing process for Sutra E-commerce.",
        "Built with Selenium WebDriver for robust automation."
      ],
      image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // E-commerce/shopping themed image
      githubUrl: "https://github.com/MahmoudFawzyAOE2/Sutra_ShoppingWebsite_WebAutomation",
    },
    {
      title: "Trello API Test Automation",
      description: [
        "Automates testing of Trello API functionalities.",
        "Ensures reliable and efficient API testing.",
        "Built with RestAssured for robust API interaction."
      ],
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // API/coding themed image
      githubUrl: "https://github.com/MahmoudFawzyAOE2/Trello_API_Testing_Project",
    },
    {
      title: "Mahmoud Fawzy's Personal Website",
      description: [
        "Showcases a portfolio for a Software Testing Engineer.",
        "Highlights experience, projects, and services in QA.",
        "Provides a way for visitors to connect for inquiries."
      ],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Portfolio/personal website themed image
      githubUrl: "https://github.com/MahmoudFawzyAOE2/MahmoudFawzyAOE2.github.io",
    }
  ];

  const tools = [
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg',
    'https://user-images.githubusercontent.com/25181517/192106073-90fffafe-3562-4ff9-a37e-c77a2da0ff58.png',
    'https://cdn-icons-png.flaticon.com/512/226/226777.png',
    'https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png',
    'https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png',
    'https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png',
    'https://github.com/marwin1991/profile-technology-icons/assets/76662862/2481dc48-be6b-4ebb-9e8c-3b957efe69fa',
    'https://www.svgrepo.com/show/354202/postman-icon.svg',
    'https://avatars.githubusercontent.com/u/19369327?s=200&v=4',
    'https://miro.medium.com/v2/resize:fit:1400/1*musVE9e4bgjTWeoRmc-P_w.png',
    'https://howtodoinjava.com/wp-content/uploads/2014/12/TestNG.png',
    'https://avatars.githubusercontent.com/u/5879127?s=280&v=4',
    'https://user-images.githubusercontent.com/25181517/183914128-3fc88b4a-4ac1-40e6-9443-9a30182379b7.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/2048px-IntelliJ_IDEA_Icon.svg.png',
    'https://user-images.githubusercontent.com/25181517/183912952-83784e94-629d-4c34-a961-ae2ae795b662.png'
  ];

  return (
    <div className="py-12">
      <div className="section-container">
        <h1 className="text-4xl font-bold mb-4 text-center">Projects</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
          Explore my testing projects that have helped companies deliver high-quality software products.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {staticProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
      
      <div className="mt-16">
        <ToolsCarousel tools={tools} />
      </div>
    </div>
  );
};

export default Projects;

