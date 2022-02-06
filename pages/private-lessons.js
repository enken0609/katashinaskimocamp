import Image from 'next/image'

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { NextSeo } from 'next-seo'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function Rental() {
  return (
    <>
      <NextSeo title='レンタル' description='片品スキーモキャンプではスキーモの道具をレンタルしております。手ぶらでの参加OK！片品村の豊富な積雪、パウダースノーでスキーモを楽しみませんか？スキーモとはスキーマウンテニアリング(Ski Mountaineering=山岳スキー)の略です。スキーモは雪上のトレラン・スカイランです。シールと呼ばれる滑り止めを板の裏に貼り雪山を登り、シールを剥がして降ります。初めての方でもぜひチャレンジしてみてください。' />
      <body>
        <Navbar />
        <main className='min-h-screen'>
        <h1 className="bg-gray-100 p-20 md:p-32 text-center text-2xl md:text-3xl font-bold">プライベートレッスン</h1>
          <section className='events mb-8 p-4 md:p-10'>
            <div className='w-full md:w-4/5 mx-auto py-5 px-2'>
              <p class="mb-4 leading-relaxed text-sm md:text-base">
                週末の予定が合わない方や、個人的にじっくり教えてもらいたいという方に向けてプライベートプランもご用意しております。<br/>
                プランの内容はあくまで参考となります。参加者のレベルに合わせて対応させていただきますので、下記メールアドレスか<a href="https://forms.gle/ErbW5rLC1JV6fyBM7" class="underline text-blue-400">こちら</a>お気軽にお問い合わせください。<br/>
                ※レンタル料金は別途かかります。
              </p>
              <p>Mail：<a href="mailto:katashina.skimo@gmail.com?subject=プレイベートレッスンについて" class="underline text-blue-400">katashina.skimo@gmail.com</a></p>
            </div>
            <div class='my-8 w-full md:w-4/5 mx-auto shadow-md p-4 md:p-8'>
              <h2 class="border-b pb-1 mb-5 font-bold md:text-xl sm:text-base">基本プラン</h2>
              <div class="grid ">
                <div class="overflow-hidden overflow-x-scroll mb-2">
                  <table class="table-auto mx-auto w-full mb-5 sm:mt-4 text-xs md:text-base">
                    <thead>
                      <tr>
                        <th rowSpan={2} className='border bg-gray-100 p-2'>人数</th>
                        <th colSpan={2} className='border bg-gray-100 p-2'>料金</th>
                      </tr>
                      <tr>
                        <th className='border bg-gray-100 p-2'>半日<br/>(9:00~12:00)</th>
                        <th className='border bg-gray-100 p-2'>1日<br/>(9:00~16:00)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border text-center p-2'>プライベート</td>
                        <td className='border text-center p-2'>¥6,000</td>
                        <td className='border text-center p-2'>¥9,000</td>
                      </tr>
                      <tr>
                        <td className='border text-center p-2'>グループ(2名)</td>
                        <td className='border text-center p-2'>¥5,000</td>
                        <td className='border text-center p-2'>¥8,000</td>
                      </tr>
                      <tr>
                        <td className='border text-center p-2'>グループ(3名)</td>
                        <td className='border text-center p-2'>¥4,000</td>
                        <td className='border text-center p-2'>¥7,000</td>
                      </tr>
                      <tr>
                        <td className='border text-center p-2'>グループ(4名)</td>
                        <td className='border text-center p-2'>¥3,000</td>
                        <td className='border text-center p-2'>¥6,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="mb-4">
              <h4 class="font-bold md:text-xl sm:text-base mb-2">概要</h4>
              <p class="text-sm mb-8">
                初めての方にはギアの説明を行います。実際に雪上で板、シールの脱着を行います。<br/>
                登り方、ポールワーク、シール滑走、滑走、キックターンなどスキルアップのための技術指導を行います。<br/>
                また2回目以降の方には技術指導を行いさらにスキルアップをしていただきます。<br/>
                午後のプチツーリングは身につけたスキルを実践練習です。白銀の世界にアテンドします。
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
            <div class='my-8 w-full md:w-4/5 mx-auto shadow-md p-4 md:p-8'>
              <h2 class="border-b pb-1 mb-5 font-bold md:text-xl sm:text-base">ツアープラン</h2>
              <div class="grid">
                <div class="overflow-hidden overflow-x-scroll mb-2">
                  <table class="table-auto mx-auto w-full mb-5 sm:mt-4 text-xs md:text-base">
                    <thead>
                      <tr>
                        <th rowSpan={2} className='border bg-gray-100 p-2'>人数</th>
                        <th colSpan={3} className='border bg-gray-100 p-2'>料金</th>
                      </tr>
                      <tr>
                        <th className='border bg-gray-100 p-2 whitespace-nowrap'>武尊山山麓ツアー<br/>(9:00~16:00)</th>
                        <th className='border bg-gray-100 p-2 whitespace-nowrap'>尾瀬ヶ原ツアー<br/>(9:00~16:00)</th>
                        <th className='border bg-gray-100 p-2 whitespace-nowrap'>アヤメ平ツアー<br/>(9:00~16:00)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border text-center p-2 whitespace-nowrap'>プライベート</td>
                        <td className='border text-center p-2'>¥8,000</td>
                        <td className='border text-center p-2'>¥10,000</td>
                        <td className='border text-center p-2'>¥13,000</td>
                      </tr>
                      <tr>
                        <td className='border text-center p-2 whitespace-nowrap'>グループ(2名)</td>
                        <td className='border text-center p-2'>¥7,000</td>
                        <td className='border text-center p-2'>¥9,000</td>
                        <td className='border text-center p-2'>¥12,000</td>
                      </tr>
                      <tr>
                        <td className='border text-center p-2 whitespace-nowrap'>グループ(3名)</td>
                        <td className='border text-center p-2'>¥6,000</td>
                        <td className='border text-center p-2'>¥8,000</td>
                        <td className='border text-center p-2'>¥11,000</td>
                      </tr>
                      <tr>
                        <td className='border text-center p-2 whitespace-nowrap'>グループ(4名)</td>
                        <td className='border text-center p-2'>¥5,000</td>
                        <td className='border text-center p-2'>¥7,000</td>
                        <td className='border text-center p-2'>¥10,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="mb-10">
                <h3 class="font-bold md:text-xl mb-2 border-l-2 border-red-600 pl-2">武尊山山麓ツアー</h3>
                <p class="mb-2 leading-relaxed text-sm">
                  体力 <span class="text-yellow-400">★</span>☆☆☆<br/>
                  経験 <span class="text-yellow-400">★</span>☆☆☆<br/>
                  滑走 <span class="text-yellow-400">★</span>☆☆☆<br/>
                </p>
                <p class="mb-8 leading-relaxed text-sm">
                  旧武尊牧場スキー場をベースに山嶺の白樺の森、ブナの森、シラビソの森と山嶺を散策する2〜3時間のツアーです。始めたばかりの方でも気軽に申し込みいただけます。
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
                    <Image src='/images/private-lesson/hotaka_4.jpg' width={600} height={400} className='rounded-lg' />
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
                <h3 class="font-bold md:text-xl mb-2 border-l-2 border-red-600 pl-2">尾瀬ヶ原ツアー</h3>
                <p class="mb-2 leading-relaxed text-sm">
                  体力 <span class="text-yellow-400">★</span>☆☆☆<br/>
                  技術 <span class="text-yellow-400">★★</span>☆☆<br/>
                  滑走 <span class="text-yellow-400">★</span>☆☆☆<br/>
                </p>
                <p class="mb-8 leading-relaxed text-sm">
                  鳩待までのゲートが開いた4月下旬〜GWの間の特別プラン鳩待から山の鼻まで降りて尾瀬ヶ原を散策する3時間ほどのツアーです。多少シール滑走したりする部分があるので難易度はあがります。
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
                <h3 class="font-bold md:text-xl mb-2 border-l-2 border-red-600 pl-2">アヤメ平ツアー</h3>
                <p class="mb-2 leading-relaxed text-sm">
                  体力 <span class="text-yellow-400">★★★</span>☆<br/>
                  技術 <span class="text-yellow-400">★</span>☆☆☆<br/>
                  滑走 <span class="text-yellow-400">★★</span>☆☆<br/>
                </p>
                <p class="mb-8 leading-relaxed text-sm">
                  戸倉スキー場から片道9kmで800mの標高差を緩やかに登っていき、天上の楽園と呼ばれるアヤメ平で景色を楽しみ帰りは滑走で楽チン下山。尾瀬谷が一望の景色をお楽しみください。体力差にもよりますがゆっくり行っても6時間以内です。登坂技術はグライドができるようになるとスムーズに体力を温存できます。滑走技術はゲレンデ中級コースを降りて来られればなお良く、初級コースが滑れれば問題ありません。
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
