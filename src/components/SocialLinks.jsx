import React from 'react'
import {AiFillGithub,AiFillLinkedin,AiOutlineMail} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'


const SocialLinks = () => {
    const links = [
        {
            id:1,
            child:(
                <>
                  LinkedIn<AiFillLinkedin size={30}/>
                </>
            ),
            href:'https://linkedin.com/sravani+putturu',
            style:'rounded-tr-md'

        },
        {
            id:1,
            child:(
                <>
                  Github<AiFillGithub size={30}/>
                </>
            ),
            href:'https://github.com',

        },
        {
            id:3,
            child:(
                <>
                  Mail<AiOutlineMail size={30}/>
                </>
            ),
            href:'mailto:putturusravani.123@gmail.com',
           
        },
        {
            id:4,
            child:(
                <>
                  Resume<BsFillPersonFill size={30}/>
                </>
            ),
            href:'/resume.pdf',
            style:'rounded-br-md',
            download:true,
        }
    ]
  return (
    <div className='hidden  lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id,child,href,style,download})=>{

               return <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'+" "+style}>
                            <a href={href} className='flex justify-between items-center w-full text-white'
                            download={document} target='_black' rel='noreferrer'>
                               {child}
                            </a>
                      </li>

            })}

            
        </ul>
    </div>
  )
}

export default SocialLinks