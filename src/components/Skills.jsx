import React from 'react'
import CSS from '../asserts/Css.png'
import JS from '../asserts/JavaScript.webp'
import ReactJS from '../asserts/react.png'
import BootstrapCSS from '../asserts/Bootstrap.jpeg'
import TailwindCSS from '../asserts/tailwind.png'
import Store from '../asserts/store.png'
import GIT from '../asserts/Github.png'
import Tags from '../asserts/Tags.png'

const Skills = () => {

    const techs = [
        
        {
            id:1,
            src:Tags,
            title : 'HTML',
            style : 'shadow-orange-500'
        },
        {
            id:2,
            src:CSS,
            title : 'CSS',
            style : 'shadow-blue-500'
        },
        {
            id:3,
            src:JS,
            title : 'JavaScript',
            style : 'shadow-yellow-500'
        },
        {
            id:4,
            src: ReactJS,
            title : 'ReactJs',
            style : 'shadow-blue-600'
        },
        {
            id:5,
            src:Store,
            title : 'Redux',
            style : 'shadow-purple-500'
        },
        {
            id:6,
            src:TailwindCSS,
            title : 'Tailwind',
            style : 'shadow-sky-400'
        },
        {
            id:7,
            src:GIT,
            title : 'Github',
            style : 'shadow-gray-500'
        },
        {
            id:8,
            src:BootstrapCSS,
            title : 'Bootstrap',
            style : 'shadow-purple-800'
        },

    ]

  return (
    <div name='skills' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
                <p className='py-6'>These are technologies I've worked with.....</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                
                {
                    techs.map(({id,src,title,style})=>{
                      return  <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                           <img src={src} alt="" className='w-20 mx-auto'/>
                           <p className='mt-4'> {title}</p>
                        </div>
                    })
                }


                
            </div>
        </div>
    </div>
  )
}

export default Skills