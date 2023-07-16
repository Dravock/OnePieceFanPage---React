import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import Logo from '../../includes/img/png/pngegg (4).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {

    const cookies = new Cookies()
    const navigate = useNavigate()

    const navbarLinks = [
        { title:"Home",url:"/" },
        { title:"Characters",url:"/characters" },
        { title:"Services",url:"/services" },
        { title:"Contact Us",url:"/contact-us" },
    ]

    const baseURL = process.env.REACT_APP_BASE_URL ;


const logout =()=>{
    cookies.remove('token', { path: '/todo-app' });
    cookies.remove('token', { path: '/' });
    navigate('/')
}



const openMobileNav =()=>{
    const navOpen = document.getElementById("mobile-nav-open")
    const body = document.body
    body.classList.add("overflow-hidden")
    navOpen.classList.add("block")
    navOpen.classList.remove("hidden")
}

const closeMobileNav =()=>{
    const navOpen = document.getElementById("mobile-nav-open")
    const body = document.body
    body.classList.remove("overflow-hidden")
    navOpen.classList.add("hidden")
    navOpen.classList.remove("block")
}

return (
    <header>
    <section id="Navbar">
        <div className='grid grid-cols-12 gap-4 bg-blue-500/40'>

            <div className='col-span-9 md:col-span-4'>
                <img src={Logo} width={"250px"} height={"80px"} alt="company-logo" className='p-1'/>
            </div>

            <div className='md:col-span-2 hidden sm:flex  items-center justify-end '>
                <h3 className=' text-lg  md:text-8xl op-font text-white'>wOrld</h3>
            </div>

            <div className='col-span-4 md:col-span-5 pb-2 flex items-end justify-end'>
                <div className='sm:hidden mt-3 mr-4 cursor-pointer' >
                    <FontAwesomeIcon icon={faBars} className="absolute right-3 top-2 text-black justify-end text-7xl"  onClick={()=>openMobileNav()}/>

                </div>
                <div id="mobile-nav-open" className='absolute h-[101%]  bg-black/95 z-30 top-0 right-0 w-full hidden'>
                    <div className='flex justify-center'>
                        <h2 className=' text-white  text-2xl font-bold mt-4 '>KSS</h2>
                        <FontAwesomeIcon icon={faXmark} className="absolute right-7 top-2 text-white justify-end cursor-pointer text-3xl" onClick={()=>closeMobileNav()}/>
                    </div>
                    <div className='grid grid-cols-12 text-white mt-20'>
                        {navbarLinks && navbarLinks.map(({title,url},index) =>
                            <a href={baseURL+url}  className='col-span-full py-6 text-lg md:text-xl font-bold mx-2'  key={index}>{title}</a>
                        )}
                    </div>
                </div>

                <div id="desktop-nav-bar" className='hidden sm:flex  items-start'>     
                        {navbarLinks && navbarLinks.map(({title,url},index)=>
                            <a href={baseURL+url} className='col-span-3 text-2xl md:text-3xl  mx-2 hover-underline-animation text-white cursor-pointer'  key={index}>{title}</a>
                        )}
                </div>
            </div>
        </div>
    </section>
    </header>    
)}

export default Header