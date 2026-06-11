import React, { useState } from 'react'
import { back, cart, cartIcon, logo, logo1, menuIcon, search, searchIcon, user } from '../assets/asset'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    const [visible,setVisible] = useState(false);
  return (
    <div className='flex items-center justify-between py-4 px-4'>
            <img src={logo1} alt='logo' className="h-12 sm:h-13 lg:h-15"/>
            <ul className='hidden sm:hidden md:flex gap-6 lg:flex gap-8 text-lg text-[#087071]'>
                <NavLink to ="/" className='flex flex-col items-center gap-1 font-mono text-xl '>
                    <p>HOME</p>
                    <hr className='w-2/4 border h-1.5px bg-gray-700 hidden'/> 
                </NavLink>
                <NavLink to ="/collection" className='flex flex-col items-center gap-1 font-mono text-xl'>
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border h-1.5px bg-gray-700 hidden'/> 
                </NavLink>
                <NavLink to ="/about" className='flex flex-col items-center gap-1 font-mono text-xl '>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border h-1.5px bg-gray-700 hidden'/> 
                </NavLink>
                <NavLink to ="/contact" className='flex flex-col items-center gap-1 font-mono text-xl'>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border h-1.5px bg-gray-700 hidden'/> 
                </NavLink>
            </ul>
                
                <div className='flex items-center gap-10'>
                    <img src={searchIcon} alt="" className='w-7 cursor-pointer'/>
                    <div className='group relative'>
                        <img src={user} className='w-8 cursor-pointer' alt="Avatar" />
                        <div className='group-hover:block absolute dropdown-menu right-0 pt-4 hidden'>
                            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-[#e9f5f9] text-gray-700 rounded-lg'>
                                <p className='cursor-pointer hover:text-black text-lg font-mono'>My Profile</p>
                                <p className='cursor-pointer hover:text-black text-lg font-mono'>Orders</p>
                                <p className='cursor-pointer hover:text-black text-lg font-mono'>Logout</p>
                            </div>
                        </div>
                    </div>
                    <Link to="/cart" className='relative'>
                        <img src={cart} className = 'w-8 cursor-pointer' alt="" />
                        <p className='absolute right-[-5px] bottom-[-5px] w-5 text-center leading-4.5 bg-black text-white aspect-square rounded-full text-[10px]'>10</p>
                    </Link>
                    <img onClick={()=>setVisible(true)} src={menuIcon} alt="menu" className='w-10 cursor-pointer sm:hidden'/>
                </div>

                <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                    <div className='flex flex-col text-gray-700'>
                        <div onClick={()=>setVisible(false)} className='flex items-center gap-3 p-3'>
                            <img src={back} alt="" className='w-4.5' />
                            <p className='text-xl'>Back</p>
                        </div>
                        <NavLink onClick={()=>setVisible(false)} className='py-3 pl-11' to={"/"}>HOME</NavLink>
                        <NavLink onClick={()=>setVisible(false)} className='py-3 pl-11' to={"/collection"}>COLLECTION</NavLink>
                        <NavLink onClick={()=>setVisible(false)} className='py-3 pl-11' to={"/about"}>ABOUT</NavLink>
                        <NavLink onClick={()=>setVisible(false)} className='py-3 pl-11' to={"/contact"}>CONTACT</NavLink>
                    </div>
                </div>
                
        </div>
  )
}

export default NavBar