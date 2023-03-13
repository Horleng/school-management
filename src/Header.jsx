import React from 'react';
import Logo from './img/Logo.png';
import {MdDarkMode} from "react-icons/md"
import {AiOutlineSearch} from "react-icons/ai"
import {RiArrowDropDownLine} from "react-icons/ri"
const Header = () => {
    return (
        <>
            <div className='bg-white w-[85%] h-[10vh] flex items-center justify-between'>
                <div className='flex items-center flex-1'>
                    <img src={Logo} alt="" width="80px"/>
                    <span className='text-lg font-bold text-gray-600'>Wellcome to KH-SCHOOL</span>
                    <span className='text-lg font-Noto font-semibold mx-2 text-gray-500'>School Management System</span>
                </div>
                <div className='relative flex flex-[0.5]'>
                    <input type="search" placeholder='Searching...' className='placeholder:font-Noto placeholder:text-sm py-3 text-gray-600 text-base font-Noto font-semibold w-full rounded-full bg-[#ebebeb] px-5 transition-all outline-none'/>
                    <AiOutlineSearch size='25px' fill='gray' className='absolute right-4 top-2'/>
                </div>
                <div className='flex-[0.5] flex justify-center items-center gap-5'>
                    <span className='cursor-pointer'><MdDarkMode size="30px"/></span>
                    <div className='flex justify-center items-center gap-2 cursor-pointer'>
                        <img src="https://marketplace.magento.com/media/catalog/product/4/a/4acb_rsz_admin-logo_1.png" alt="" width="30px"
                        className='rounded-full'/>
                        <span>Ly Horleng</span>
                        <RiArrowDropDownLine fill='gray' size='25px'/>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Header;
