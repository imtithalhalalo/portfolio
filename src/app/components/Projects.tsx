'use client'
import React, { useRef, useState } from 'react'
import ProjectCard from './ProjectCard'
import { motion, useInView } from "framer-motion";
import ProjectTag from './ProjectTag';

const projects = [
    {
        imageUrl: '/images/projects/memory-game.png',
        title: 'Fitnest',
        description: `Developed a Mobile App where the user's data is collected and
        connected to fitness trainers. Provides a full vision of their progress
        using charts and graphs. Developed using React Native, Laravel, MySQL, and Firebase.`,
        github: 'https://github.com/imtithalhalalo/fitnest',
        video: '',
        tag: ["All", "Mobile"],
    },
    {
        imageUrl: '/images/projects/memory-game.png',
        title: 'Coffee Shop',
        description: 'Coffee Shop Management System with Laravel MySQL and Bootstrap and Tailwind CSS.',
        github: 'https://github.com/imtithalhalalo/coffee-shop',
        video: '',
        tag: ["All", "Web"],
    },
    {
        imageUrl: '/images/projects/memory-game.png',
        title: 'Lets Write',
        description: 'MERN Story Sharing Application where you can share your own story.',
        github: 'https://github.com/imtithalhalalo/LetsWrite',
        video: '',
        tag: ["All", "Web"],
    },
    {
        imageUrl: '/images/projects/memory-game.png',
        title: 'Alpha Store',
        description: `A store application built with TypeScript, utilizing Redux Toolkit for state management. 
        It includes features such as managing data with Redux Toolkit, implementing search, filter, and sorting functionalities, and performing cart actions.`,
        github: 'https://github.com/imtithalhalalo/AlphaStore',
        video: '',
        tag: ["All", "Web"],
    },
    {
        imageUrl: '/images/projects/memory-game.png',
        title: 'To do list',
        description: 'This ToDo List application provides a simple and intuitive way to manage your tasks efficiently. Built with Redux for state management, it offers powerful features such as search functionality and filters for organizing tasks based on completion status.',
        github: 'https://github.com/imtithalhalalo/todolist-redux-tailwindCSS',
        video: '',
        tag: ["All", "Web"],
    },
    {
        imageUrl: '/images/projects/memory-game.png',
        title: 'Memory Game',
        description: 'Memory Card Game! This is a simple web-based game where you need to match pairs of cards.',
        github: 'https://github.com/imtithalhalalo/memory-game-reactjs',
        video: '',
        tag: ["All", "Web"],
    },
]
const Projects = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag: any) => {
        setTag(newTag);
    };

    const filteredProjects = projects.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };
  return (
    <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {
                    filteredProjects.map((project, index) => (
                        <motion.li 
                            key={index}
                            variants={cardVariants}
                            initial="initial"
                            animate={isInView ? "animate" : "initial"}
                            transition={{ duration: 0.3, delay: index * 0.4 }}> 
                            <ProjectCard
                                key={index} 
                                imageUrl={project.imageUrl} 
                                title={project.title} 
                                description={project.description} 
                                github={project.github} 
                                video={project.video}
                            />
                        </motion.li>
                    ))
                }    
        </ul>
        
        
    </section>
  )
}

export default Projects