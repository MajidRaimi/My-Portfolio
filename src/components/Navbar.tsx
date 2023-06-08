import {  useState } from 'react'
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { smoothScroll } from '../helpers';

export type activeType = 'hero' | 'about' | 'work' | 'contact';

const Navbar = () => {

  const [active, setActive] = useState<activeType>('hero')
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className='sm:px-16 px-6 w-full flex items-center py-5 fixed z-20 top-0 bg-primary'>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2' onClick={() => {
          setActive('hero');
          smoothScroll('hero')
        }}>
          <img src={logo} alt='logo' className='w-12 h-12 object-contain animate__animated animate__fadeInLeft' />
          <p className='text-white text-[18px] font-bold cursor-pointer animate__fadeInLeft animate__animated animate__delay-1s flex'>Majid &nbsp;
            <span className='sm:block hidden '>| &nbsp; Software Engineer</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {
            navLinks.map((nav, index) => (
              <a key={nav.id} onClick={() => setActive(nav.id)} href={`#${nav.id}`} className={classnames('text-secondary hover:text-white text-[18px] font-medium cursor-pointer duration-300', { 'text-white': active === nav.id, }, `animate__fadeInRight animate__animated animate__delay-${index}s`)}>{nav.title}</a>
            ))
          }


        </ul>

        <div className='sm:hidden flex flex--1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="" className='w-[28px] h-[28px] object-cover cursor-pointer' onClick={() => setToggle(!toggle)} />
        </div>

        <div className={classnames('flex p-6 black-gradient absolute top-20 right-2 mx-4 my-2 min-w-[140px] rounded-xl', { 'hidden ': !toggle })}>
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
            {
              navLinks.map((nav) => (
                <a key={nav.id} onClick={() => { setActive(nav.id); setToggle(!toggle) }} href={`#${nav.id}`} className={classnames('text-secondary font-poppins font-medium cursor-pointer text-[16px]', { 'text-white': active === nav.id })}>{nav.title}</a>
              ))
            }


          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar