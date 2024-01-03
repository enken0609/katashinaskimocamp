import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import useLocale from '../hooks/useLocale';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
  setMenuVisible(!menuVisible);
  };

  const { t } = useLocale();

  return (
    <>
      <nav className='flex items-center flex-wrap bg-base-500 p-1'>
        <Link href='/'>
          <a className='inline-flex items-center p-2 ml-4 mr-4'>
            <Image src="/images/ksc_logo_fixed.png" width={80} height={54} />
            {/* <span className='text-xl text-base-900 font-bold uppercase tracking-wide'>
              KATASHINA SKIMO CAMP
            </span> */}
          </a>
        </Link>
        <button
          className=' inline-flex p-3 mr-4 bg-base-900 hover:bg-base-900 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto m-4`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto flex-wrap bg-white lg:bg-transparent rounded-lg'>
            <Link href='/about'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-base-900 text-base font-bold items-center justify-center hover:opacity-75 duration-200'>
                {t.ABOUT_US}
              </a>
            </Link>
            {/* <Link href='/race/hotakaskimosummitchallenge'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-base-900 text-sm font-bold items-center justify-center hover:opacity-75 duration-200'>
                レース
              </a>
            </Link> */}
            <Link href='/events'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-base-900 text-base font-bold items-center justify-center hover:opacity-75 duration-200 '>
                {t.EVENT}
              </a>
            </Link>
            <Link href='/rental'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-base-900 text-base font-bold items-center justify-center hover:opacity-75 duration-200 '>
                {t.RENTAL}
              </a>
            </Link>
            <Link href='/private-lessons'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-base-900 text-base font-bold items-center justify-center hover:opacity-75 duration-200 '>
                {t.PRIVATE_LESSON}
              </a>
            </Link>
            <Link href='/faq'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-base-900 text-base font-bold items-center justify-center hover:opacity-75 duration-200'>
                {t.FAQ}
              </a>
            </Link>
            <Link href='/photo'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-base-900 text-base font-bold items-center justify-center hover:opacity-75 duration-200'>
                {t.PHOTO}
              </a>
            </Link>
            <div className='relative inline-flex py-2 lg:py-0 w-full lg:w-auto text-left'>
              <button className='flex lg:inline-flex lg:w-auto w-full px-3 text-base-900 text-base font-bold items-center justify-start lg:justify-center mr-4 hover:opacity-75 duration-200 lg:border-l-2 border-base-900' onClick={toggleMenu}>
                <Image src="/images/language.svg" width={20} height={20} />
                <p class="ml-2">{t.LANGUAGE}</p>
              </button>
              <div className={`menu absolute left-0 lg:right-0 w-40 mt-10 py-2 bg-white border rounded shadow-xl z-10 ${menuVisible ? '' : 'hidden'}`}>
                <Link href='' locale='ja'>
                  <a className='transition-colors duration-200 block px-4 py-2 cursor-pointer text-normal text-gray-900 rounded hover:bg-base-900 hover:text-white' onClick={() => {
                    setMenuVisible(false);
                    handleClick();
                  }}>
                    日本語
                  </a>
                </Link>
                <Link href='' locale='en'>
                  <a className='transition-colors duration-200 block px-4 py-2 cursor-pointer text-normal text-gray-900 rounded hover:bg-base-900 hover:text-white' onClick={() => {
                    setMenuVisible(false);
                    handleClick();
                  }}>
                    English
                  </a>
                </Link>
                <Link href='' locale='zhcn'>
                  <a className='transition-colors duration-200 block px-4 py-2 cursor-pointer text-normal text-gray-900 rounded hover:bg-base-900 hover:text-white' onClick={() => {
                    setMenuVisible(false);
                    handleClick();
                  }}>
                    中文
                  </a>
                </Link>
                <Link href='' locale='ko'>
                  <a className='transition-colors duration-200 block px-4 py-2 cursor-pointer text-normal text-gray-900 rounded hover:bg-base-900 hover:text-white' onClick={() => {
                    setMenuVisible(false);
                    handleClick();
                  }}>
                    한국어
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
