import React, { useContext, useState } from 'react';
import menuList from '../../assets/menu';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { GhibliContext } from '../../context/GhibliContext';
import { MdKey } from "react-icons/md";
import { GoPeople } from "react-icons/go";

export const Navbar = () => {

    const { countCart } = useContext(GhibliContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='bg-primary  text-white relative'>
            <div className='container md:p-5 mx-auto'>
                <div className='flex justify-between items-center'>

                    {/* Hamburger */}
                    <div className='md:hidden cursor-pointer p-3' onClick={() => (setIsMenuOpen(!isMenuOpen))}>
                        <RxHamburgerMenu />
                    </div>

                    {/* Home Navigation,Logo */}
                    <div>
                        <Link to='/'>
                            < div className='cursor-pointer '>
                                <h2 className='w-[200px] md:w-[280px] text-xs md:text-base  font-bold tracking-wide'>THE STUDIO GHIBLI COLLECTION</h2>
                                <h4 className='text-slate-400 text-[8px] md:text-[10px] '>PRESENTED BY GKIDS</h4>
                            </div>
                        </Link>
                    </div>

                    {/* Menu */}
                    <div className='hidden md:block text-center'>
                        <ul className=' grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-3 '>
                            {
                                menuList.map((menu, index) => (
                                    <Link key={index} to={menu.link}>
                                        <li className=' hover:text-slate-400 cursor-pointer'>
                                            {menu.name}
                                        </li>
                                    </Link>
                                ))
                            }
                        </ul>
                    </div>

                    {/* LOG IN, SEARCH, CART */}
                    <div className="ml-24 flex items-center space-x-4 text-sm lg:text-base">
                        <Link to={'/login'}>
                            <p className=" w-[55px] hover:text-slate-400  cursor-pointer hidden lg:inline-block">LOG IN</p>
                            <MdKey className='inline-block lg:hidden scale-150' />
                        </Link>
                        <Link to={'/signup'}>
                            <p className=" w-[65px] hover:text-slate-400  cursor-pointer hidden lg:inline-block">SIGN UP</p>
                            <GoPeople className='inline-block lg:hidden scale-150' />
                        </Link>
                        <Link to={'/cart'}>
                            <div className="relative ">
                                <FaShoppingCart className=' w-6 h-5 md:w-8 md:h-7 cursor-pointer hover:scale-110 
                            transition-all duration-300 ' />
                                <span className="absolute -top-1 md:-top-2 -right-2 bg-red-500  rounded-full px-2 text-xs">{countCart()}</span>
                            </div>
                        </Link>
                    </div>

                </div>
            </div >
            {/* Navbar Lower Hamburger */}
            {
                isMenuOpen ? (
                    <div className='bg-secondary text-white text-[10px] font-semibold md:hidden'>
                        <ul className='flex justify-start gap-8 pl-5 leading-7'>
                            {
                                menuList.map((menu, index) => (
                                    <li key={index} className=' hover:text-slate-400 cursor-pointer'>
                                        <Link to={menu.link}>
                                            {menu.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ) : null
            }
        </div >
    )
};

