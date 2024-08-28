import { useState } from "react";
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6'
import { FiShoppingBag } from 'react-icons/fi'
import { FaBars } from "react-icons/fa";
import { navbarData } from "./navbarData";
import DarkMode from './DarkMode'
import { Link } from "react-router-dom";

export default function Navbar(props) {
    const [toggle, setToggle] = useState(false);

    const showNav = () => {
        setToggle(!toggle);
    };

    // start mobile first plus facile
    return (
        <nav className="shadow-md bg-white dark:bg-text-white duration-200 sticky top-0 z-40">
            <div className="bg-primary/40 py-2">
                <div className=" container flex justify-between items-center w-full flex-wrap md:flex-nowrap">
                    <h1 className="text-xl text-white cursor-pointer font-bold items-center flex gap-1">
                        <FiShoppingBag size='30' />
                        D-Cart
                    </h1>

                    <button
                        className="flex justify-end md:hidden ring-1 ring-white rounded"
                        onClick={showNav}
                    >
                        <i className="fas fa-bars text-white w-9 h-9 flex justify-center items-center hover:bg-white hover:text-primary/40"><FaBars size={25} /></i>
                    </button>

                    <ul
                        className={`${toggle ? " flex" : " hidden"
                            } flex-col justify-center items-center w-full first:mt-2 md:flex-row md:w-auto md:space-x-10 md:flex`}
                    >
                        {navbarData.map((link, index) => {
                            return (
                                <li key={index} className={link.cname}>
                                    <Link
                                        className="hover:text-primary/40 cursor-pointer"
                                        to={link.href}
                                        onClick={showNav}
                                        // onClick={window.scrollTo(0,0)}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className={`${toggle ? " flex" : " hidden"} mx-auto md:mx-0 md:flex md:mt-0 gap-4 items-center justify-around py-2 rounded-lg mt-4 `}>
                        {/* <div className="relative group hidden sm:block">
                            <input type="text" className='w-[40px] sm:w-[40px] group-hover:w-[200px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-slate-100' />
                            <IoMdSearch className='text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
                        </div> */}
                        <button onClick={() => { props.handleOrderPopup() }} className='bg-gradient-to-t from-primary to-secondary duration-200 py-1 px-4 rounded-full flex items-center gap-3 group:'>
                            <span className='group-hover:block hidden transition-all duration-200'>Order</span>
                            <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
                        </button>
                        <div><DarkMode /></div>
                    </div>
                    {/* <div className={`${toggle ? "flex" : " hidden"} flex items-center justify-center gap-4`}>
                        
                        <button onClick={() => { props.handleOrderPopup() }} className='bg-gradient-to-t from-primary to-secondary duration-200 py-1 px-4 rounded-full flex items-center gap-3 group:'>
                            <span className='group-hover:block hidden transition-all duration-200'>Order</span>
                            <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
                        </button>
                        <div><DarkMode /></div>
                    </div> */}
                </div>
            </div>
        </nav>
    );
}
