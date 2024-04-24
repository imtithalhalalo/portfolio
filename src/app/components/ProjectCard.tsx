import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import VideosModal from './VideosModal'

interface IProjectCard {
    imageUrl: string
    title: string
    description: string
    github: string
    video: string
}

const ProjectCard = ({ imageUrl, title, description, github, video }: IProjectCard) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    return (
        <div>
            <div
                className="h-84 md:h-72 rounded relative group"
            >
                <Image
                    src={imageUrl}
                    alt='Imtithal'
                    className="object-cover w-full h-full rounded-md"
                    width={600}
                    height={600}
                />
            <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                <Link
                    href={github}
                    target='_blank'
                    className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                >
                    <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                </Link>
                <button
                    onClick={handleOpen}
                    className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                >
                    <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                </button>
            </div>
        </div>

        <div className="text-white rounded-b-xl mt-3 bg-[#e4e4e49b] py-6 px-4">
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            <p className="text-[#010101]">{description}</p>
        </div>
        <VideosModal
            title={title}
            description={description}
            videoUrl={video}
            open={open}
            setOpen={setOpen}
        />
      </div>
    )
}

export default ProjectCard