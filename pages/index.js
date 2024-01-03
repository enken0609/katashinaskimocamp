import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { client } from '../libs/client'
import { NextSeo } from 'next-seo'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination } from "swiper";
import { Autoplay } from 'swiper';

import useLocale from '../hooks/useLocale';
import FAQ from '../components/Faq';

export default function Home({ events }) {

  const { t } = useLocale();

  return (
    <>
      <NextSeo />
      <Head>
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_TAG}></meta>
      </Head>
      <body>
        <Navbar />
        <main className='min-h-screen bg-base-500'>
          <section className='py-4'>
            <div class="mx-auto">
              <Swiper
                centeredSlides={true}
                navigation
                pagination={{
                  clickable: true,
                }}
                loop={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                initialSlide={0}
                modules={[Pagination, Autoplay]}
                breakpoints={{
                    0: {
                        slidesPerView: 1.1,
                        spaceBetween:20,
                        centeredSlides: true
                    },
                    767: {
                        slidesPerView: 1.3,
                        spaceBetween:20,
                        centeredSlides: true
                    },
                    1080: {
                        slidesPerView: 1.5,
                        spaceBetween:20,
                        centeredSlides: true
                    }
                }}
              >
                <SwiperSlide>
                  <Image src='/images/mv_1.jpg' width={1280} height={853} className='rounded-lg' />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src='/images/mv_2.jpg' width={1280} height={853} className='rounded-lg' />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src='/images/mv_3.jpg' width={1280} height={853} className='rounded-lg' />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src='/images/mv_4.jpg' width={1280} height={853} className='rounded-lg' />
                </SwiperSlide>
              </Swiper>
            </div>

          </section>
          <section className='events mb-2 px-10 pb-10'>
            <div className='w-full mb-6'>
              <h2 className='text-2xl font-bold leading-7 text-base-900 sm:text-3xl sm:truncate'>EVENT</h2>
              <p class="text-base-900 font-bold">{t.EVENT}</p>
            </div>
              <div class="text-right relative h-0 bottom-14">
                <Image src='/images/mizubasho.png' width={70} height={64} class="absolute"/>
              </div>
            {events.length > 0 ? (
              <>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
                  {events.map((events) => (
                    <a href={events.link} key={events.id} class="hover:opacity-75 duration-200" target="_blank">
                      <div className='rounded overflow-hidden shadow-lg bg-white'>
                        <Image src={events.mainVisual.url+'?fit=crop&w=740&h=400'} width={700} height={400} />
                        <div className='px-6 py-4'>
                          <div className='font-bold text-xl mb-2'>{events.eventName}</div>
                          <p className='text-gray-700 text-base'>{t.EVENT_DATE}：{events.eventDate}</p>
                        </div>
                        <div className='px-6 pt-2 pb-2'>
                          {events.tag_1 && <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#{events.tag_1}</span>}
                          {events.tag_2 && <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#{events.tag_2}</span>}
                          {events.tag_3 && <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#{events.tag_3}</span>}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
                <div className='mt-8 text-center'>
                  <Link href="/events">
                    <a class="inline-block py-2 text-white bg-base-900 px-7 hover:opacity-75 duration-200 rounded-lg">{t.BTN_TO_EVENT}</a>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="w-full py-20 text-center text-2xl font-bold rounded-md">Coming Soon</div>
                <div className='mt-8 text-center'>
                  <a href="https://moshicom.com/search/?s=3&keyword=&event_start_date=&event_end_date=2021-12-01&entry_status=no&except_eventup=no&scale=0&day_entry=no&measurement=no&user_id=255516&search_type=1&recommend_event=true&recommend_course=true&recommend_facility=true&mode=1&l=20&o=0&m=1" target="_blank" class="inline-block py-2 text-white bg-gray-900 px-7 hover:bg-gray-800 rounded-lg">{t.BTN_PREVIOUS_EVENT}</a>
                </div>
              </>
            )}
          </section>
          <section className='aboutus mb-2 px-10 pt-6 pb-10'>
            <div className='w-full'>
              <div class="relative h-0 bottom-32 left-0 md:left-8">
                <Image src='/images/tree.png' width={96} height={137} class="absolute"/>
              </div>
              <div className='grid gap-4 grid-cols-1 lg:grid-cols-2'>
                <div className='text-center'>
                  <Image src='/images/aboutus_thumbnail.jpg' width={767} height={504} className='rounded-lg w-full' />
                </div>
                <div className='sm:p-8 my-auto'>
                  <h2 className='text-2xl font-bold leading-7 text-base-900 sm:text-3xl mb-4'>{t.WHAT_IS_KATASHINA_SKIMO_CAMP}</h2>
                  <p className='mb-6'>{t.WHAT_IS_KATASHINA_SKIMO_CAMP_DESCRIPTION_1}<br/> {t.WHAT_IS_KATASHINA_SKIMO_CAMP_DESCRIPTION_2}</p>
                </div>
              </div>
            </div>
            <div className='mt-8 text-center'>
              <Link href="/rental">
                <a class="inline-block py-2 text-white bg-base-900 px-7 hover:opacity-75 duration-200 rounded-lg">{t.BTN_MORE_DETAIL}</a>
              </Link>
            </div>
          </section>
          <section className='rental_private_lesson mb-2 pb-10 pt-6 px-10'>
              <div class="relative h-0 bottom-16 text-right right-0 md:right-10">
                <Image src='/images/mountain.png' width={135} height={67} class="absolute"/>
              </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 -mt-2">
              <div class="rental border-4 border-base-900 bg-white p-6 md:p-10 md:mr-1 mb-4 z-10">
                <div className="flex items-center mb-4">
                  <div className="flex-1 mr-2">
                    <hr className="border-base-900 border-t-2"/>
                  </div>
                  <h2 className="text-xl font-bold leading-7 text-base-900 sm:text-2xl sm:truncate">RENTAL</h2>
                  <div className="flex-1 ml-2">
                    <hr className="border-base-900 border-t-2"/>
                  </div>
                </div>
                <div class="text-center">
                  <p class="text-base-900 mb-4">{t.TOP_RENTAL_DESCRIPTION}</p>
                <Link href="/rental">
                  <a>
                    <Image src='/images/ksc_rental.jpg' width={500} height={435} className='w-full mb-4 rounded-lg hover:opacity-75 duration-200'/>
                  </a>
                </Link>
                </div>
              </div>
              <div class="private_lesson border-4 border-base-900 bg-white p-6 md:p-10 md:mr-1 mb-4 z-10">
                <div className="flex items-center mb-4">
                  <div className="flex-1 mr-2">
                    <hr className="border-base-900 border-t-2"/>
                  </div>
                  <h2 className="text-xl font-bold leading-7 text-base-900 sm:text-2xl sm:truncate">PRIVATE LESSON</h2>
                  <div className="flex-1 ml-2">
                    <hr className="border-base-900 border-t-2"/>
                  </div>
                </div>
                <div class="text-center">
                <p class="text-base-900 mb-4">{t.TOP_PRIVATE_LESSON_DESCRIPTION}</p>
                <Link href="/rental">
                  <a>
                    <Image src='/images/private_lesson.jpg' width={500} height={435} className='w-full mb-4 rounded-lg hover:opacity-75 duration-200'/>
                  </a>
                </Link>
                </div>
              </div>
            </div>
          </section>
          <section className='coach mb-2 p-10'>
            <div className='w-full mb-6'>
              <h2 className='text-2xl font-bold leading-7 text-base-900 sm:text-3xl sm:truncate'>COACH</h2>
              <p class="text-base-900 font-bold">{t.COACH}</p>
            </div>
            <div class="w-full">
              <div class="relative h-0 bottom-32 left-1/2">
                <Image src='/images/tree.png' width={96} height={137} class="absolute"/>
              </div>
              <div class="mx-auto">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div class="bg-white w-full shadow-lg rounded-lg p-12 flex flex-col justify-center items-center">
                    <div class="mb-8">
                      <Image src='/images/kazuakihoshino.jpg' width={300} height={300} className='object-center object-cover rounded-full h-36 w-36' />
                    </div>
                    <div class="text-center">
                      <p class="text-xl text-gray-900 font-bold mb-2">{t.KAZUAKI_HOSHINO}</p>
                      <p class="text-xs text-gray-900 font-normal">{t.KAZUAKI_HOSHINO_DESCRIPTION_1}</p>
                      <p class="text-xs text-gray-900 font-normal">{t.KAZUAKI_HOSHINO_DESCRIPTION_2}</p>
                      <p class="text-xs text-gray-900 font-normal">{t.KAZUAKI_HOSHINO_DESCRIPTION_3}</p>
                      <p class="text-xs text-gray-900 font-normal">{t.KAZUAKI_HOSHINO_DESCRIPTION_4}</p>
                      <div className='pt-4 flex justify-center space-x-2'>
                        <a href="https://www.instagram.com/hoshinodash/" class="text-base-900 hover:opacity-75 duration-200" target="_blank">
                          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                              <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                          </svg>
                        </a>
                        <a href="https://www.facebook.com/kazuaki.hoshino.94" class="text-base-900 hover:opacity-75 duration-200" target="_blank">
                          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white w-full shadow-lg rounded-lg p-12 flex flex-col justify-center items-center">
                    <div class="mb-8">
                      <Image src='/images/ayaka_ueda.jpg' width={300} height={300} className='object-center object-cover rounded-full h-36 w-36' />
                    </div>
                    <div class="text-center">
                      <p class="text-xl text-gray-900 font-bold mb-2">{t.AYAKA_UEDA}</p>
                      <p class="text-xs text-gray-900 font-normal">{t.AYAKA_UEDA_DESCRIPTION_1}</p>
                      <p class="text-xs text-gray-900 font-normal">{t.AYAKA_UEDA_DESCRIPTION_2}</p>
                      <p class="text-xs text-gray-900 font-normal">{t.AYAKA_UEDA_DESCRIPTION_3}</p>
                      <p class="text-xs text-gray-900 font-normal">{t.AYAKA_UEDA_DESCRIPTION_4}</p>
                      <div className='pt-4 flex justify-center space-x-2'>
                        <a href="https://www.instagram.com/ayacan182/" class="text-base-900 hover:opacity-75 duration-200" target="_blank">
                          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                              <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                          </svg>
                        </a>
                        <a href="https://www.facebook.com/search/top?q=ayaka%20ueda" class="text-base-900 hover:opacity-75 duration-200" target="_blank">
                          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                              <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white w-full shadow-lg rounded-lg p-12 flex flex-col justify-center items-center">
                    <div class="mb-8">
                      <Image src='/images/kenta_endo.jpeg' width={300} height={300} className='object-center object-cover rounded-full h-36 w-36' />
                    </div>
                    <div class="text-center">
                      <p class="text-xl text-gray-900 font-bold mb-2">{t.KENTA_ENDO}</p>
                      <p class="text-xs text-gray-900 font-normal">{t.KENTA_ENDO_DESCRIPTION_1}</p>
                      <p class="text-xs text-gray-900 font-normal">{t.KENTA_ENDO_DESCRIPTION_2}</p>
                      <p class="text-xs text-gray-900 font-normal">{t.KENTA_ENDO_DESCRIPTION_3}</p>
                      <p class="text-xs text-gray-900 font-normal">{t.KENTA_ENDO_DESCRIPTION_4}</p>
                      <div className='pt-4 flex justify-center space-x-2'>
                        <a href="https://www.instagram.com/enken0609/" class="text-base-900 hover:opacity-75 duration-200" target="_blank">
                          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                              <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                          </svg>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100005796331083" class="text-base-900 hover:opacity-75 duration-200" target="_blank">
                          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                              <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='faq mb-2 px-10 pt-10'>
            <div className='w-full mb-6'>
              <h2 className='text-2xl font-bold leading-7 text-base-900 sm:text-3xl sm:truncate'>FAQ</h2>
              <p class="text-base-900 font-bold mb-4">{t.FAQ}</p>
              <div class="text-right relative h-0 bottom-20">
                <Image src='/images/mizubasho.png' width={96} height={88} class="absolute"/>
              </div>
              <div className="faq-list">
                <FAQ />
              </div>
            </div>
          </section>
          <section className='faq mb-2 p-10'>
            <div className="relative w-full rounded-md">
              <Link href="/contact">
                <a>
                  <img
                    src="/images/contact_thumbnail.jpg"
                    alt="Contact Banner"
                    className="w-full h-auto filter brightness-75 rounded-md hover:opacity-75 duration-200 hidden md:block"
                  />
                  <img
                    src="/images/contact_thumbnail_sp.jpg"
                    alt="Contact Banner"
                    className="w-full h-auto filter brightness-75 rounded-md hover:opacity-75 duration-200 md:hidden"
                  />
                </a>
              </Link>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <h2 className="text-4xl font-bold mb-4 cursor-pointer">Contact</h2>
                <Link href="/contact">
                  <a className="text-base font-semibold border-white">{t.CONTACT}</a>
                </Link>
              </div>
            </div>
          </section>
          <div>
            <Image src="/images/ksc_lift_free_activity.png" width={1920} height={800} className='w-full' />
          </div>
        </main>
        <Footer />
      </body>
    </>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "events?limit=4"});
  let filterData = [];
  data.contents.forEach(function(e) {
    if (e.status[0] == '開催前') {
      filterData.push(e)
    }
  })
  return {
    props: {
      events: filterData,
    }
  }
}
