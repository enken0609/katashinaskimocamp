import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <>
      <nav className='bg-white text-center'>
        <Link href='/'>
          <div class="text-center">
            <h1 class="w-1/3 mx-auto">
              <a className='inline-flex items-center p-2 hover:cursor-pointer'>
                <Image src="/images/race/hsc_logo.png" width={200} height={95} />
              </a>
            </h1>
          </div>
        </Link>
        <div
          className='w-full'
        >
          <div className='w-full py-2 bg-hotaka-900 overflow-x-auto whitespace-nowrap'>
              <a href="#summary" className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-xs lg:text-base font-bold items-center justify-center mr-1 lg:mr-4 hover:opacity-80 hover:text-white '>
                大会概要
              </a>
              <a href="#course" className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-xs lg:text-base font-bold items-center justify-center mr-1 lg:mr-4 hover:opacity-80 hover:text-white '>
                コース
              </a>
              <a href="#entry" className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-xs lg:text-base font-bold items-center justify-center mr-1 lg:mr-4 hover:opacity-80 hover:text-white '>
                エントリー
              </a>
              <a href="#rental" className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-xs lg:text-base font-bold items-center justify-center mr-1 lg:mr-4 hover:opacity-80 hover:text-white'>
                レンタル
              </a>
              <a href="#access" className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-xs lg:text-base font-bold items-center justify-center mr-1 lg:mr-4 hover:opacity-80 hover:text-white'>
                宿泊・アクセス
              </a>
              <a href="#info" className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-xs lg:text-base font-bold items-center justify-center mr-1 lg:mr-4 hover:opacity-80 hover:text-white'>
                注意事項
              </a>
          </div>
        </div>
      </nav>
    </>
  );
};
