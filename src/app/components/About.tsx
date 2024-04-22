"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const data: any = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <div className="flex justify-start flex-wrap overflow-hidden">
          {["Node.js", "TypeScript", "NextJS", "JavaScript", "ReactJS", "Laravel"].map((skill, index) => (
            <div key={index} className="bg-[#ffffff87] rounded-md p-2 mt-5 mr-3">
              {skill}
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <div className="flex justify-start space-x-4 overflow-hidden">
          {["Lebanese International University", "Bachelor Degree in computer science"].map((education, index) => (
            <div key={index} className="bg-[#ffffff87] rounded-md p-2">
              {education}
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <div className="flex justify-start space-x-4 overflow-hidden">
          {["SE Factory Foundation of computer science", "SE Factory Full Stack web development", "Udemy Practical Typescript and MERN stack"].map((certification, index) => (
            <div key={index} className="bg-[#ffffff87] rounded-md p-2">
              {certification}
            </div>
          ))}
        </div>
      ),
    },
];
  
  
  

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src='/images/hero-2.jpeg' alt="image" width={400} height={400} className="rounded-md" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, MySQL,
            HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div>
            {data.find((t: any) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;