import React from 'react'
import { FaMobileAlt } from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaLocationDot, FaMapLocationDot } from 'react-icons/fa6'
import { FiShoppingBag } from 'react-icons/fi'
import { IoCall } from 'react-icons/io5'

const footerLinks = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'About',
        link: '/about'
    },
    {
        title: 'Contact',
        link: '/contact'
    },
    {
        title: 'Blog',
        link: '/blog'
    },

]
const Footer = () => {
    return (
        <div className='text-white bg-[#212529] '>
            <div className='container'>
                <div data-aos='zoom-in' className='grid md:grid-cols-3 pb-44 pt-5'>
                    <div className="py-8 px-4">
                        <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-1'>
                            <FiShoppingBag size='30' />
                            D-Cart
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, reiciendis saepe ducimus totam sit consectetur assumenda mollitia hic eaque dolor quo veritatis impedit praesentium in similique quos nihil alias aperiam, tenetur neque.</p>
                    </div>
                    <div>
                        <div className="py-8 px-4">
                            <h1 className='sm-text-xl text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {footerLinks.map((data) => (
                                    <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={data.title}>
                                        {data.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='sm-text-xl text-xl font-bold sm:text-left text-justify mb-3'>Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {footerLinks.map((data) => (
                                    <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={data.title}>
                                        {data.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='py-8 px-4'>
                        <div className='flex items-center gap-3 mt-6'>
                            <a href="/">
                                <FaInstagram className='text-3xl'/>
                            </a>
                            <a href="/">
                                <FaFacebook className='text-3xl'/>
                            </a>
                            <a href="/">
                                <FaLinkedin className='text-3xl'/>
                            </a>
                        </div>
                        <div className="mt-6">
                            <div className='flex items-center gap-3'>
                                <FaMapLocationDot/>
                                <p>Karachi, Tando Adam</p>
                            </div>
                            <div className='flex items-center gap-3 mt-3'>
                                <IoCall/>
                                <p>+92-314-771417-14</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const FooterLinks = [
    {
        title: 'Home',
        link: '/#'
    },
    {
        title: 'Home',
        link: '/#'
    },
]
export default Footer
