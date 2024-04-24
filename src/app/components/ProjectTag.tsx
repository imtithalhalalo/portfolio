import React from "react";

interface IProjectTag {
    name: string
    onClick: any
    isSelected: boolean
}
const ProjectTag = ({ name, onClick, isSelected }: IProjectTag) => {
  const buttonStyles = isSelected
    ? "text-white bg-[#03b9f4] border-none hover:bg-transparent hover:border-white relative"
    : "text-[#] border-white bg-transparent relative";

   const waveColor = isSelected
    ? "#fff"
    : "#03b9f4bb";

  return (
    <div>
      <button
          className={`${buttonStyles} rounded-full border-2 px-8 py-2 text-md cursor-pointer`}
          onClick={() => onClick(name)}
        >
            {name}
            <svg className="wave" viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", bottom: 3, left: 4 }}>
              <path d="M0 50 Q 125 70 250 50 Q 375 30 500 50 Q 625 70 750 50 Q 875 30 1000 50" stroke={waveColor} stroke-width="20"  fill="none"></path>
            </svg>
      </button>
    </div>
    
  );
};

export default ProjectTag;