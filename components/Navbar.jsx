import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap bg-gray-900 p-1 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            {/* <Image src="/../public/images/ksc_logo.svg" width={30} height={30} /> */}
            <span className='text-xl text-white font-bold uppercase tracking-wide'>
              KATASHINA SKIMO CAMP
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-gray-800 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
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
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/events'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-sm font-bold items-center justify-center mr-4 hover:bg-gray-800 hover:text-white '>
                イベント
              </a>
            </Link>
            <Link href='/rental'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-sm font-bold items-center justify-center mr-4 hover:bg-gray-800 hover:text-white '>
                レンタル
              </a>
            </Link>
            <Link href='/contact'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-sm font-bold items-center justify-center mr-4 hover:bg-gray-800 hover:text-white'>
                お問い合わせ
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
