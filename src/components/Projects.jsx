import React from 'react'
import weatherImg from '../asserts/weatherImage.png';
import MeShop from '../asserts/MeShop.png'
import ColorPicker from '../asserts/ColorPicker.png'
import FoodRecipe from '../asserts/FoodRecipe.png'
import Typing from '../asserts/Typing.png'
import Portfolio from '../asserts/portfolio.png'

const Projects = () => {

    const projects = [
       {
            id:1,
            project : "Typing Speed Test Website",
            src:Typing,
            link : 'https://typing-speed-website-by-sravani.netlify.app/',
            languages : "HTML, CSS, JS, React",
            repoLink : 'https://github.com/SravaniPutturu/Typing-Speed-Test-Website'
        },
        {
            id:4,
            project : "MeShop Shopping Cart",
            src:MeShop,
            link:'https://sravaniputturu.github.io/Ecommerce-Website/',
            languages : "HTML, CSS, JS",
            repoLink : 'https://github.com/SravaniPutturu/Ecommerce-Website'
        },
        {
            id:3,
            project : "Portfolio",
            src:Portfolio,
            link:'https://sravaniputturu.netlify.app/',
            languages : "HTML, Tailwind CSS, ReactJS",
            repoLink : 'https://github.com/SravaniPutturu/My-Portfolio'
        },
        {
            id:2,
            project : "Weather App",
            src:weatherImg,
            link : 'https://main--euphonious-tartufo-089e4c.netlify.app/',
            languages : "HTML, CSS, JS, React",
            repoLink : 'https://github.com/SravaniPutturu/Weather-app-React'
        },
        {
            id:5,
            project : "Color Picker",
            src:ColorPicker,
            link:'https://main--color-picker-03a9ba.netlify.app/',
            languages : "HTML, CSS, JS, React",
            repoLink : 'https://github.com/SravaniPutturu/Color-Picker#readme'
        },
        {
            id:6,
            project : "Food-Recipe-Finder",
            src:FoodRecipe,
            link:'https://food-recipe-finder-by-sravani.netlify.app/',
            languages : "HTML, CSS, JS, React",
            repoLink : 'https://github.com/SravaniPutturu/Food-Recipe-Finder'
        },
        
        
    ]




  return (
    <div name='projects' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                <p className='py-6'>Check out some my work right here</p>
            </div>


            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

            {
                projects.map(({id,repoLink,src,link,languages})=>(
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105'>
                    <img src={src} alt="" className='rounded-md'/>
                    <div className='m-2 text-sm'><b>{languages}</b></div>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 '><a href={link}>Live</a></button>
                        <button className='w-1/2 px-6 py-3 '><a href={repoLink}>Code</a></button>
                    </div>
                    
                </div>
                ))
            }
                
            </div>

        </div>
    </div>
  )
}

export default Projects
