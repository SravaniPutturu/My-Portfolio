import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
      </div>
      <p className='text-xl mt-20'>
      Hello, I'm [Your Name], a frontend developer with a strong passion for creating visually appealing and user-friendly websites. I graduated in 2020 and have since focused on honing my frontend development skills through training and hands-on projects. 
      </p>
      <br />
      <p className='text-xl'>
      My expertise lies in HTML5, CSS3, and JavaScript, along with proficiency in CSS frameworks like Bootstrap and Tailwind CSS. I am also experienced in React and Vue.js for building interactive web applications. With a solid foundation in UI/UX design principles, I strive to deliver high-quality code and exceptional user experiences.
      </p>
    </div>
    </div>
  )
}

export default About;