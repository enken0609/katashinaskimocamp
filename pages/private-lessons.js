import Image from 'next/image'

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { NextSeo } from 'next-seo'
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link'

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import useLocale from '../hooks/useLocale';

export default function Rental() {

  const { t } = useLocale();

  return (
    <>
      <NextSeo title='プライベートレッスン' description='片品スキーモキャンプのプライベートレッスン。週末の予定が合わない方や、個人的にじっくり教えてもらいたいという方向けです。片品村の豊富な積雪、パウダースノーでスキーモを楽しみませんか？スキーモとはスキーマウンテニアリング(Ski Mountaineering=山岳スキー)の略です。スキーモは雪上のトレラン・スカイランです。シールと呼ばれる滑り止めを板の裏に貼り雪山を登り、シールを剥がして降ります。初めての方でもぜひチャレンジしてみてください。' />
      <body>
        <Navbar />
        <main className='min-h-screen bg-base-500'>
          <div class="flex flex-wrap px-8 pt-8">
            <Link href="/">
              <a class="mr-2 text-gray-600 hover:opacity-75">TOP</a>
            </Link>
            <span class="mr-2">/</span>
            <p class="text-base-900">{t.PRIVATE_LESSON}</p>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-base-900 mx-8 pt-4 md:pt-10">{t.PRIVATE_LESSON}</h1>
          <p class="text-base-900 text-sm mx-8">{t.PRIVATE_LESSON}</p>
          <section className='events p-4 md:p-10'>
            <div className='w-full md:w-4/5 mx-auto py-5 px-2'>
              <p class="mb-4 leading-relaxed text-sm md:text-base">
                {t.PRIVATE_LESSON_DESCRIPTION_1}<br/>
                {t.PRIVATE_LESSON_DESCRIPTION_2}<a href="https://forms.gle/ErbW5rLC1JV6fyBM7" class="underline text-blue-400">{t.HERE}</a>{t.PRIVATE_LESSON_DESCRIPTION_3}<br/>
                {t.PRIVATE_LESSON_DESCRIPTION_4}
              </p>
              <p>Mail：<a href="mailto:katashina.skimo@gmail.com?subject=プレイベートレッスンについて" class="underline text-blue-400">katashina.skimo@gmail.com</a></p>
            </div>
            <div class='my-8 w-full md:w-4/5 mx-auto shadow-md p-4 md:p-8 bg-white rounded-md'>
              <h2 class="border-b pb-1 mb-5 font-bold md:text-xl sm:text-base">{t.BASIC_PLAN}</h2>
              <div class="grid ">
                <div class="overflow-hidden overflow-x-scroll mb-2">
                  <table class="table-auto mx-auto w-full mb-5 sm:mt-4 text-xs md:text-base">
                    <thead>
                      <tr>
                        <th rowSpan={2} className='border bg-gray-100 p-2'>{t.NUMBER_OF_PEOPLE}</th>
                        <th colSpan={2} className='border bg-gray-100 p-2'>{t.FEE}</th>
                      </tr>
                      <tr>
                        <th className='border bg-gray-100 p-2'>{t.HALF_DAY}<br/>(9:00~12:00)</th>
                        <th className='border bg-gray-100 p-2'>{t.ONE_DAY}<br/>(9:00~16:00)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border text-center p-2'>{t.PRIVATE}</td>
                        <td className='border text-center p-2'>¥6,000</td>
                        <td className='border text-center p-2'>¥9,000</td>
                      </tr>
                      <tr>
                        <td className='border text-center p-2'>{t.GROUP}(2{t.PEOPLE})</td>
                        <td className='border text-center p-2'>¥5,000</td>
                        <td className='border text-center p-2'>¥8,000</td>
                      </tr>
                      <tr>
                        <td className='border text-center p-2'>{t.GROUP}(3{t.PEOPLE})</td>
                        <td className='border text-center p-2'>¥4,000</td>
                        <td className='border text-center p-2'>¥7,000</td>
                      </tr>
                      <tr>
                        <td className='border text-center p-2'>{t.GROUP}(4{t.PEOPLE})</td>
                        <td className='border text-center p-2'>¥3,000</td>
                        <td className='border text-center p-2'>¥6,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="mb-4">
              <h4 class="font-bold md:text-xl sm:text-base mb-2">{t.SUMMARY}</h4>
              <p class="text-sm mb-8">
                {t.SUMMARY_DESCRIPTION_1}<br/>
                {t.SUMMARY_DESCRIPTION_2}<br/>
                {t.SUMMARY_DESCRIPTION_3}<br/>
                {t.SUMMARY_DESCRIPTION_4}
              </p>
              <Swiper
                  slidesPerView={1.5}
                  spaceBetween={10}
                  centeredSlides={true}
                  pagination={{
                    clickable: true,
                  }}
                  initialSlide={1}
                  modules={[Pagination]}
                  breakpoints={{
                      768: {
                          slidesPerView: 1.9,
                          spaceBetween:20,
                          centeredSlides: true
                      }
                  }}
                >
                  <SwiperSlide>
                    <Image src='/images/private-lesson/basic_1.jpg' width={600} height={400} className='rounded-lg' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src='/images/private-lesson/basic_2.jpg' width={600} height={400} className='rounded-lg' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src='/images/private-lesson/basic_3.jpg' width={600} height={400} className='rounded-lg' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src='/images/private-lesson/basic_4.jpg' width={600} height={400} className='rounded-lg' />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div class='my-8 w-full md:w-4/5 mx-auto shadow-md p-4 md:p-8 bg-white rounded-md'>
              <h2 class="border-b pb-1 mb-5 font-bold md:text-xl sm:text-base">{t.TOUR_PLAN}</h2>
              <div class="grid">
                <div class="overflow-hidden overflow-x-scroll mb-2">
                  <table class="table-auto mx-auto w-full mb-5 sm:mt-4 text-xs md:text-base">
                    <thead>
                      <tr>
                        <th rowSpan={2} className='border bg-gray-100 p-2'>{t.NUMBER_OF_PEOPLE}</th>
                        <th colSpan={3} className='border bg-gray-100 p-2'>{t.FEE}</th>
                      </tr>
                      <tr>
                        <th className='border bg-gray-100 p-2 whitespace-nowrap'>{t.TOUR_PLAN_HOTAKA}<br/>(9:00~16:00)</th>
                        <th className='border bg-gray-100 p-2 whitespace-nowrap'>{t.TOUR_PLAN_OZEGAHARA}<br/>(9:00~16:00)</th>
                        <th className='border bg-gray-100 p-2 whitespace-nowrap'>{t.TOUR_PLAN_AYAMEDAIRA}<br/>(9:00~16:00)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border text-center p-2 whitespace-nowrap'>{t.PRIVATE}</td>
                        <td className='border text-center p-2'>¥8,000</td>
                        <td className='border text-center p-2'>¥10,000</td>
                        <td className='border text-center p-2'>¥13,000</td>
                      </tr>
                      <tr>
                        <td className='border text-center p-2 whitespace-nowrap'>{t.GROUP}(2{t.PEOPLE})</td>
                        <td className='border text-center p-2'>¥7,000</td>
                        <td className='border text-center p-2'>¥9,000</td>
                        <td className='border text-center p-2'>¥12,000</td>
                      </tr>
                      <tr>
                        <td className='border text-center p-2 whitespace-nowrap'>{t.GROUP}(3{t.PEOPLE})</td>
                        <td className='border text-center p-2'>¥6,000</td>
                        <td className='border text-center p-2'>¥8,000</td>
                        <td className='border text-center p-2'>¥11,000</td>
                      </tr>
                      <tr>
                        <td className='border text-center p-2 whitespace-nowrap'>{t.GROUP}(4{t.PEOPLE})</td>
                        <td className='border text-center p-2'>¥5,000</td>
                        <td className='border text-center p-2'>¥7,000</td>
                        <td className='border text-center p-2'>¥10,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="mb-10">
                <h3 class="font-bold md:text-xl mb-2 border-l-2 border-base-900 pl-2">{t.TOUR_PLAN_HOTAKA}</h3>
                <p class="mb-2 leading-relaxed text-sm">
                  {t.FITNESS_LEVEL} <span class="text-yellow-400">★</span>☆☆☆<br/>
                  {t.TECHNICAL_LEVEL} <span class="text-yellow-400">★</span>☆☆☆<br/>
                  {t.SKIING_LEVEL} <span class="text-yellow-400">★</span>☆☆☆<br/>
                </p>
                <p class="mb-8 leading-relaxed text-sm">
                  {t.TOUR_PLAN_HOTAKA_DESCRIPTION}
                </p>
                <Swiper
                  slidesPerView={1.5}
                  spaceBetween={10}
                  centeredSlides={true}
                  pagination={{
                    clickable: true,
                  }}
                  initialSlide={1}
                  modules={[Pagination]}
                  breakpoints={{
                      768: {
                          slidesPerView: 1.9,
                          spaceBetween:20,
                          centeredSlides: true
                      }
                  }}
                >
                  <SwiperSlide>
                    <Image src='/images/private-lesson/hotaka_1.jpg' width={600} height={400} className='rounded-lg' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src='/images/private-lesson/hotaka_5.jpg' width={600} height={400} className='rounded-lg' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src='/images/private-lesson/hotaka_2.jpg' width={600} height={400} className='rounded-lg' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src='/images/private-lesson/hotaka_3.jpg' width={600} height={400} className='rounded-lg' />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div class="mb-10">
                <h3 class="font-bold md:text-xl mb-2 border-l-2 border-base-900 pl-2">{t.TOUR_PLAN_OZEGAHARA}</h3>
                <p class="mb-2 leading-relaxed text-sm">
                  {t.FITNESS_LEVEL} <span class="text-yellow-400">★</span>☆☆☆<br/>
                  {t.TECHNICAL_LEVEL} <span class="text-yellow-400">★★</span>☆☆<br/>
                  {t.SKIING_LEVEL} <span class="text-yellow-400">★</span>☆☆☆<br/>
                </p>
                <p class="mb-8 leading-relaxed text-sm">
                  {t.TOUR_PLAN_OZEGAHARA_DESCRIPTION}
                </p>
                <Swiper
                  slidesPerView={1.5}
                  spaceBetween={10}
                  centeredSlides={true}
                  pagination={{
                    clickable: true,
                  }}
                  initialSlide={1}
                  modules={[Pagination]}
                  breakpoints={{
                      768: {
                          slidesPerView: 1.9,
                          spaceBetween:20,
                          centeredSlides: true
                      }
                  }}
                >
                  <SwiperSlide>
                    <Image src='/images/private-lesson/ozegahara_1.jpg' width={600} height={400} className='rounded-lg' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src='/images/private-lesson/ozegahara_2.jpg' width={600} height={400} className='rounded-lg' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src='/images/private-lesson/ozegahara_3.jpg' width={600} height={400} className='rounded-lg' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src='/images/private-lesson/ozegahara_4.jpg' width={600} height={400} className='rounded-lg' />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div class="mb-10">
                <h3 class="font-bold md:text-xl mb-2 border-l-2 border-base-900 pl-2">{t.TOUR_PLAN_AYAMEDAIRA}</h3>
                <p class="mb-2 leading-relaxed text-sm">
                  {t.FITNESS_LEVEL} <span class="text-yellow-400">★★★</span>☆<br/>
                  {t.TECHNICAL_LEVEL} <span class="text-yellow-400">★</span>☆☆☆<br/>
                  {t.SKIING_LEVEL} <span class="text-yellow-400">★★</span>☆☆<br/>
                </p>
                <p class="mb-8 leading-relaxed text-sm">
                  {t.TOUR_PLAN_AYAMEDAIRA_DESCRIPTION}
                </p>
                <Swiper
                  slidesPerView={1.5}
                  spaceBetween={10}
                  centeredSlides={true}
                  pagination={{
                    clickable: true,
                  }}
                  initialSlide={1}
                  modules={[Pagination]}
                  breakpoints={{
                      768: {
                          slidesPerView: 1.9,
                          spaceBetween:20,
                          centeredSlides: true
                      }
                  }}
                >
                  <SwiperSlide>
                    <Image src='/images/private-lesson/ayamedaira_1.jpg' width={600} height={400} className='rounded-lg' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src='/images/private-lesson/ayamedaira_2.jpg' width={600} height={400} className='rounded-lg' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src='/images/private-lesson/ayamedaira_3.jpg' width={600} height={400} className='rounded-lg' />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </body>
    </>
  )
}
