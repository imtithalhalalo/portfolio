'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-5xl font-extrabold">
                    Hello, I am {' '}
                    <br></br>
                    <span className='text-[#03b9f4]'>
                        <TypeAnimation
                            sequence={[
                                'Imtithal Halalo',
                                1000,
                                'Full Stack Developer',
                                1000,
                                'Frontend Developer',
                                1000,
                            ]}
                            wrapper="span"
                            speed={20}
                            repeat={Infinity}
                        />
                    </span>
                    
                </h1>
                <p className='text-[#e3e3e3] lg:text-lg mb-6 text-base sm:text-md'>
                    Full Stack Developer based in Lebanon
                </p>
                <a 
                    href={'https://drive.google.com/file/d/1YGcZQuUoe4IgWMGR2cPz-1BZqCGrm1rD/view?usp=sharing'}
                    target="_blank"
                    className='px-4 py-2 w-full sm:w-fit rounded-full bg-[#03b9f4] hover:bg-[#281740] text-white border'>
                        Download CV
                </a>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#28174075] w-[250px] h-[250px] relative lg:w-[400px] lg:h-[400px]">
                    <Image
                        src='/images/hero.png'
                        alt='Imtithal'
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={600}
                        height={600}
                    />
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Hero