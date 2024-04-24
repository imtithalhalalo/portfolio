import { skills } from "./skills";

export const data: any = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <div className="tag-list">
        <div
          className='loop-slider'
          style={{
            '--duration': `${15000}ms`,
            '--direction': 'normal'
          } as any}
        >
          <div className='inner'>
          {skills.map((skill, index) => (
            <div key={index} className="tag bg-[#ffffff87] rounded-md p-2 mt-5 mr-3 flex-col">
              <div>{skill.icon}</div>
              <div>{skill.text}</div>
            </div>
          ))}
            
          </div>
        </div>
        <div className="fade"></div>
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