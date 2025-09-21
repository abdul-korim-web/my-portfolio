import React from 'react';
import Button from '@mui/material/Button';

const Hero = () => {
    const skils=[`React`,`TailwindCSS`,`JavaScript`,`HTML`,`CSS`]
    const role = [`Web Developer`]
    return (
        <>
            <section className='max-w-full py-20 px-5 flex flex-col justify-center items-center space-y-5 '>
                <div className='w-[80%]'>
                    <img className='rounded-2xl' src="image/logo.png" alt="Hero image" />
                </div>
                <div>
                    <div>
                        <h2>Hello I am A  <span></span></h2>
                        <p>I am a passionate Web Developer creating responsive and user-friendly websites using <span>{skils[1]}</span> and modern web technologies</p>

                    </div>
                    <div>
                        <Button variant="contained">Hire Me</Button>
                        <Button variant="outlined">View Project</Button>
                        
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
