import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
      </div>
      <p className='text-xl mt-20'>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quos tempore voluptatum molestiae quae aspernatur iusto nostrum error mollitia dolores explicabo, adipisci unde illum assumenda corporis! Aliquid error doloribus a expedita blanditiis at omnis dolorum officiis voluptates ex sint dolorem magnam nostrum, rerum sed odit similique, consequatur quia quas quibusdam?
      </p>
      <br />
      <p className='text-xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus velit, ex iure assumenda fugit voluptate id blanditiis vero suscipit odio. Beatae est eius velit amet alias quo a eum numquam doloribus nobis quos minus, cum aperiam commodi qui dolores nemo nihil modi aliquid provident tempore, itaque distinctio voluptate sequi? Magni?
      </p>
    </div>
    </div>
  )
}

export default About;