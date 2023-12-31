import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'
import MyImage from '../asserts/MyImage.jpg'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full '>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Frontend Developer</h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        Hello, I'm Sravani, a passionate frontend developer with a strong interest in creating engaging user experiences.

                    </p>
                    <div>
                        <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            <Link to="projects" activeClass="active" offset={-70} spy={true} smooth={true} duration={500}>Projects</Link>
                            <span className='group-hover:rotate-90 duration-300'>
                                <RiArrowRightLine size={20} className='ml-1' />
                            </span>
                        </button>
                    </div>
                </div>
            
                <div className='md:pt-20 lg:ml-20'>
                    <img src={MyImage} alt="my profile"
                        className='rounded-3xl lg:mt-10 px-3 mx-auto  w-2/3 md:w-full'
                    />
                </div>
            </div>
        </div>


    )
}

export default Home
