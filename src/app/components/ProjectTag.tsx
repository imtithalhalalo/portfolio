import React from "react";

interface IProjectTag {
    name: string
    onClick: any
    isSelected: boolean
}
const ProjectTag = ({ name, onClick, isSelected }: IProjectTag) => {
  const buttonStyles = isSelected
    ? "text-white bg-[#03b9f4] border-none hover:bg-transparent hover:border-white"
    : "text-[#] border-white hover:bg-[#03b9f4bb] bg-transparent";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-4 py-2 text-md cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;