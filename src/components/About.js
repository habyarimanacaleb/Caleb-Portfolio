import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { skill: 'JavaScript', value: 90 },
  { skill: 'React.js', value: 85 },
  { skill: 'Tailwind CSS', value: 80 },
  { skill: 'HTML5', value: 95 },
  { skill: 'CSS3', value: 90 },
  { skill: 'Material UI', value: 80 },
  { skill: 'Git & GitHub', value: 75 },
  { skill: 'Figma', value: 70 },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 text-center">
      <div className="container about-content mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-700 mb-10">
          I'm a Front-End Developer skilled in building responsive, user-friendly websites using React.js, Tailwind CSS, and modern web practices. With a passion for creating interactive and seamless user experiences, I aim to make websites that are both functional and visually appealing. I constantly strive to stay updated with the latest technologies and trends in web development.
        </p>
        <p className="text-lg text-gray-700 mb-10">
          Over the years, I've gained hands-on experience working with different tools and frameworks, enhancing my problem-solving and creative abilities. My focus is on making websites that not only look good but also provide excellent performance and accessibility. I approach each project with a meticulous attention to detail, ensuring a balance between aesthetics and functionality. 
        </p>
        <p className="text-lg text-gray-700 mb-10">
          I’m passionate about learning new technologies and improving my coding skills. I believe in continuous growth and applying my knowledge to solve real-world challenges. In addition to web development, I enjoy mentoring others and sharing my knowledge with the community. Whether it's working on complex projects or collaborating with like-minded individuals, I enjoy every part of the development process.
        </p>
        <p className="text-lg text-gray-700 mb-10">
          When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or learning something new about web development. I’m always looking for exciting projects to work on, and I’m eager to contribute to the world of web development with innovative solutions.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative bg-blue-100 text-blue-600 font-bold py-4 px-6 rounded-lg shadow-md transition-all duration-500 transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-lg opacity-40"
                style={{
                  transform: `scale(${1 + skill.value / 100})`,
                  transition: 'transform 0.5s ease-in-out',
                }}
              ></div>
              <div className="relative md:flex z-10">
                <p className="text-xl">{skill.skill}</p>
                <div className="text-lg text-black mt-2">{skill.value}%</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
