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
                    Hello, I'm {' '}
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
                    href={'https://doc-0g-c4-prod-03-apps-viewer.googleusercontent.com/viewer2/prod-03/pdf/g20i9r917066m4h38mfjnlj6egjcnu2d/ebh1t0u4h07vvpg7bqu4agsnv8f5bkd7/1713731250000/3/111208694794086536048/APznzabEz5lf-tAAbz0ULxWc4doBXrGqt6QpY4X94TUYLirUiSr8nfUe3_SgnJ4mkfVJ9_exrd-8oJF5Fd4gKUxQ635wbRJqiY-3EWTtkQd7ycQIsJNKwaD7dFJ3qBdzbHEPxmLXi1PYPpSGS3vBgs-RKxlsBq8-bA8V71e70Prb2n0TbQo2nHrzSDwSh35vVB8Pjz3D81oLGToGb-2AaX-HFC8yJ12jib5IJUtD3ZdYaKLyIP7CgFMR-_y_VdgXeTjQ6G8FN7AmqIlMNSvlvuoLEpn5yOOD8qoRQhNoLWzIsOPqAd9Zz7gLQHOoi-ffsPMJ8o-7uGSNhOgku33JmJoxDxVCvFt4ly_MgWwYAA88c7ns9NUrXT6YjEAIekMu4P4cYXoE9-GkYZP2Wi7Mp0NMHMsDDUw0J87-sGouDXHT-O9QcuIHEPg=?authuser=0&nonce=jq5odrpa88b5i&user=111208694794086536048&hash=jlvoq38i673qttlv61jos18u5ngbu1ou'}
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