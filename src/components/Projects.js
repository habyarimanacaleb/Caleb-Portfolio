import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Personal Finance App",
    description: "Manage personal finances with real-time updates.",
    github: "https://github.com/habyarimanacaleb/finance-app",
    demo: "https://finance-app.example.com",
    status: "Project in Progress",
  },
  {
    title: "Kivu Business Website",
    description:
      "Responsive website for showcasing Kivu River and Karongi services.",
    github: "https://github.com/habyarimanacaleb/",
    demo: "https://kivu-grafter.netlify.app/",
    status: "Completed",
  },
  {
    title: "React Portfolio Website",
    description: "A personal portfolio built with React.js and Tailwind CSS.",
    github: "https://github.com/habyarimanacaleb/react-portfolio",
    demo: "https://react-portfolio.example.com",
    status: "Project in peding",
  },
  {
    title: "E-Commerce Website",
    description:
      "An online store for selling products with shopping cart functionality.",
    github: "https://github.com/habyarimanacaleb/e-commerce-site",
    demo: "https://e-commerce-site.example.com",
    status: "Project in Progress",
  },
  {
    title: "Weather App",
    description: "Get real-time weather information based on user location.",
    github: "https://github.com/habyarimanacaleb/weather-app",
    demo: "https://weather-app.example.com",
    status: "Project in Progress",
  },
  {
    title: "Blog Platform",
    description: "A platform to write, read, and comment on blog posts.",
    github: "https://github.com/habyarimanacaleb/blog-platform",
    demo: "https://blog-platform.example.com",
    status: "Completed",
  },
  {
    title: "Task Manager App",
    description:
      "Manage your tasks efficiently with options to add, delete, and mark them as complete.",
    github: "https://github.com/habyarimanacaleb/task-manager-app",
    demo: "https://task-manager-app.example.com",
    status: "Project in Progress",
  },
  {
    title: "Photo Gallery Website",
    description:
      "Showcase your photo collection with a beautiful, responsive gallery layout.",
    github: "https://github.com/habyarimanacaleb/photo-gallery",
    demo: "https://photo-gallery.example.com",
    status: "Completed",
  },
  {
    title: "Application Assistant&Product Design",
    description:
      "An intuitive application assistant enhancing product design workflows with seamless UX/UI and collaboration tools",
    github: "https://github.com/habyarimanacaleb/",
    demo: "https://application-assistant-product-design.netlify.app/",
    status: "Project in Progress",
  },
  {
    title: "Portfolio Website with Animations",
    description:
      "A personal portfolio with dynamic animations using React and framer-motion.",
    github: "https://github.com/habyarimanacaleb/portfolio-animations",
    demo: "https://portfolio-animations.example.com",
    status: "Project in Progress",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="pt-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>{" "}
              |{" "}
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Live Demo
              </a>
              <p className="text-sm text-gray-500 mt-2">{project.status}</p>
            </motion.div>
          ))}
        </div>

        <section id="figma-showcase" className="py-20 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Figma Project Showcase</h2>
            <p className="text-lg text-gray-700 mb-10">
              Check out the design and prototype of one of my projects created
              in Figma. Click on the iframe to view the full prototype.
            </p>
            <div className="figma-embed">
              <iframe
                style={{border: '1px solid rgba(0, 0, 0, 0.1)',width:'100%',height:'500px', borderRadius: '4px'}}
                title="Online Learning App Design (Community)"
                src="https://embed.figma.com/design/BzIxaER75hhr6EJeiA1Nzn/Online-Learning-App-Design-(Community)?node-id=0-1&embed-host=share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Projects;
