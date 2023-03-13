import React from 'react';
import {BiChevronRight} from "react-icons/bi"
import BachelorDegree from "./img/BachelorDegree.png"
import {NavLink} from "react-router-dom"
const Navigationbar = () => {
    return (
        <>
            <div className='bg-[#2f24a9d5] w-full lg:flex lg:flex-col hidden h-screen overflow-hidden'>
                <div className='bg-[#23019d] w-full h-[70px] relative flex justify-center'>
                    <img src={BachelorDegree} alt="" width="60px" className='absolute right-10 top-0 scale-150'/>
                    <span className='text-lg font-bold uppercase mt-5 pr-10'>KH-School</span>
                </div>
                <ul className='w-full flex flex-col items-center mt-10'>
                    <NavLink to="/" className="w-full">
                        <li className='hover:bg-blue-500 rounded-sm w-full flex pl-[30px] pr-[10px]  items-center justify-between border-y-[1px] border-blue-500'>
                            <span className='flex justify-center items-center gap-2'>
                            <img src="https://thumbs.dreamstime.com/z/dashboard-concept-vector-linear-icon-isolated-transparent-bac-background-transparency-outline-style-130080118.jpg" alt="" width="30px" className='rounded-full'/>
                                Dashboard
                            </span>
                            <BiChevronRight size="20px"/>
                        </li>
                    </NavLink>
                    <NavLink to="/clas" className="w-full">
                        <li className='hover:bg-blue-500 rounded-sm w-full flex pl-[30px] pr-[10px]  items-center justify-between border-y-[1px] border-blue-500'>
                            <span className='flex justify-center items-center gap-4'>
                            <img src="https://thumbs.dreamstime.com/b/class-teacher-students-icon-simple-glyph-flat-vector-people-talk-icons-ui-ux-website-mobile-application-dark-156313691.jpg" alt="" width="30px" className='rounded-full'/>
                                Class
                            </span>
                            <BiChevronRight size="20px"/>
                        </li>
                    </NavLink>
                    <NavLink to="/teacher" className="w-full">
                        <li className='hover:bg-blue-500 rounded-sm w-full flex pl-[30px] pr-[10px]  items-center justify-between border-y-[1px] border-blue-500'>
                            <span className='flex justify-center items-center gap-4'>
                            <img src="https://cdn-icons-png.flaticon.com/512/2784/2784488.png" alt="" width="30px" className='rounded-full'/>
                                Teacher
                            </span>
                            <BiChevronRight size="20px"/>
                        </li>
                    </NavLink>
                    <NavLink to="/student" className="w-full">
                        <li className='hover:bg-blue-500 rounded-sm w-full flex pl-[30px] pr-[10px]  items-center justify-between border-y-[1px] border-blue-500'>
                            <span className='flex justify-center items-center gap-4'>
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/350/111/small/Education__28193_29.jpg" alt="" width="30px" className='rounded-full'/>
                                Student
                            </span>
                            <BiChevronRight size="20px"/>
                        </li>
                    </NavLink>
                    <NavLink to="/parents" className="w-full">
                        <li className='hover:bg-blue-500 rounded-sm w-full flex pl-[30px] pr-[10px]  items-center justify-between border-y-[1px] border-blue-500'>
                            <span className='flex justify-center items-center gap-4'>
                            <img src="https://i.pinimg.com/originals/c1/c6/46/c1c64691d4c734c2d057f008620246f6.png" alt="" width="30px" className='rounded-full'/>
                            Parents
                            </span>
                            <BiChevronRight size="20px"/>
                        </li>
                    </NavLink>
                    <NavLink to="/examination" className="w-full">
                        <li className='hover:bg-blue-500 rounded-sm w-full flex pl-[30px] pr-[10px]  items-center justify-between border-y-[1px] border-blue-500'>
                            <span className='flex justify-center items-center gap-4'>
                            <img src="https://cdn3.vectorstock.com/i/1000x1000/11/82/exam-back-to-school-filled-design-icon-vector-26641182.jpg" alt="" width="30px" className='rounded-full'/>
                            Examinations
                            </span>
                            <BiChevronRight size="20px"/>
                        </li>
                    </NavLink>
                    <NavLink to="/trainning-course" className="w-full">
                        <li className='hover:bg-blue-500 rounded-sm w-full flex pl-[30px] pr-[10px]  items-center justify-between border-y-[1px] border-blue-500'>
                            <span className='flex justify-center items-center gap-4'>
                            <img src="https://thumbs.dreamstime.com/b/online-course-line-icon-e-learning-education-online-course-line-icon-e-learning-education-distance-learn-sign-vector-111047111.jpg" alt="" width="30px" className='rounded-full'/>
                                Trainning Course
                            </span>
                            <BiChevronRight size="20px"/>
                        </li>
                    </NavLink>
                    <NavLink to="/payment" className="w-full">
                        <li className='hover:bg-blue-500 rounded-sm w-full flex pl-[30px] pr-[10px]  items-center justify-between border-y-[1px] border-blue-500'>
                            <span className='flex justify-center items-center gap-4'>
                            <img src="https://as1.ftcdn.net/v2/jpg/02/25/06/72/1000_F_225067264_vF4yokF0D22LNs6CDmGJ8Onwz8zSHTi2.jpg" alt="" width="30px" className='rounded-full'/>
                                Payment
                            </span>
                            <BiChevronRight size="20px"/>
                        </li>
                    </NavLink>
                    <NavLink to="/aboutUs" className="w-full">
                        <li className='hover:bg-blue-500 rounded-sm w-full flex pl-[30px] pr-[10px]  items-center justify-between border-y-[1px] border-blue-500'>
                            <span className='flex justify-center items-center gap-4'>
                            <img src="https://icons.veryicon.com/png/o/education-technology/radio-and-tv-cloud/about-us-22.png" alt="" width="30px" className='rounded-full'/>AboutUs
                            </span>
                            <BiChevronRight size="20px"/>
                        </li>
                    </NavLink>
                    <NavLink to="/contact" className="w-full">
                        <li className='hover:bg-blue-500 rounded-sm w-full flex pl-[30px] pr-[10px]  items-center justify-between border-y-[1px] border-blue-500'>
                            <span className='flex justify-center items-center gap-4'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR45ggmjvVKz8NqayIMJZ5yogopWXj5-yXW4xzUxQXLOd9xo25evqtqXfG5SpLamtSXY7E&usqp=CAU" alt="" width="30px" className='rounded-full'/>
                            Contact
                            </span>
                            <BiChevronRight size="20px"/>
                        </li>
                    </NavLink>
                </ul>
            </div>
        </>
    );
}

export default Navigationbar;
