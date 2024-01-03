import Image from 'next/image'

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

import useLocale from '../hooks/useLocale';

export default function Rental() {

  const { t } = useLocale();

  return (
    <>
      <NextSeo title='レンタル' description='片品スキーモキャンプではスキーモの道具をレンタルしております。手ぶらでの参加OK！片品村の豊富な積雪、パウダースノーでスキーモを楽しみませんか？スキーモとはスキーマウンテニアリング(Ski Mountaineering=山岳スキー)の略です。スキーモは雪上のトレラン・スカイランです。シールと呼ばれる滑り止めを板の裏に貼り雪山を登り、シールを剥がして降ります。初めての方でもぜひチャレンジしてみてください。' />
      <body>
        <Navbar />
        <main className='min-h-screen bg-base-500'>
          <div class="flex flex-wrap px-8 pt-8">
            <Link href="/">
              <a class="mr-2 text-gray-600 hover:opacity-75">TOP</a>
            </Link>
            <span class="mr-2">/</span>
            <p class="text-base-900">{t.RENTAL}</p>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-base-900 mx-8 pt-4 md:pt-10">{t.RENTAL}</h1>
          <p class="text-base-900 text-sm mx-8">{t.RENTAL}</p>
          <section className='rental p-4 md:p-10'>
            <div className='w-full md:w-4/5 mx-auto py-5 px-2'>
              <p>{t.RENTAL_DESCRIPTION_1}</p>
              <p>{t.RENTAL_DESCRIPTION_2}</p>
              <p>{t.RENTAL_DESCRIPTION_3}</p>
              <p>{t.RENTAL_DESCRIPTION_4}</p>
            </div>
            <div className='my-8 w-full md:w-4/5 mx-auto shadow-md p-8 bg-white rounded-md'>
              <h2 class="border-b pb-1 mb-5 font-bold text-xl">{t.SKI_SET}</h2>
              <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <div class="w-full text-center">
                  <Image src='/images/gear_ski.jpg' width={200} height={200} className='rounded-lg' />
                </div>
                <div>
                  <table class="table-auto mx-auto w-full mb-5 sm:mt-4">
                    <thead>
                      <tr>
                        <th className='border bg-gray-100 p-2'>{t.ONE_DAY}</th>
                        <th className='border bg-gray-100 p-2'>{t.TWO_DAYS}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border text-center p-2'>¥4,000</td>
                        <td className='border text-center p-2'>¥7,500</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>{t.SKI_SET_DESCRIPTION}</p>
                </div>
              </div>
            </div>
            <div className='my-8 w-full md:w-4/5 mx-auto shadow-md p-8 bg-white rounded-md'>
              <h2 class="border-b pb-1 mb-5 font-bold text-xl">{t.BOOTS}</h2>
              <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <div class="w-full text-center">
                  <Image src='/images/gear_boot.jpg' width={200} height={200} className='rounded-lg' />
                </div>
                <div>
                  <table class="table-auto mx-auto w-full mb-5 sm:mt-4">
                    <thead>
                      <tr>
                        <th className='border bg-gray-100 p-2'>{t.ONE_DAY}</th>
                        <th className='border bg-gray-100 p-2'>{t.TWO_DAYS}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border text-center p-2'>¥2,000</td>
                        <td className='border text-center p-2'>¥3,500</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>{t.BOOTS_DESCRIPTION}</p>
                </div>
              </div>
            </div>
            <div className='my-8 w-full md:w-4/5 mx-auto shadow-md p-8 bg-white rounded-md'>
              <h2 class="border-b pb-1 mb-5 font-bold text-xl">{t.SKINS}</h2>
              <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <div class="w-full text-center">
                  <Image src='/images/gear_seal.jpg' width={200} height={200} className='rounded-lg' />
                </div>
                <div>
                  <table class="table-auto mx-auto w-full mb-5 sm:mt-4">
                    <thead>
                      <tr>
                        <th className='border bg-gray-100 p-2'>{t.ONE_DAY}</th>
                        <th className='border bg-gray-100 p-2'>{t.TWO_DAYS}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border p-2 text-center' colSpan='2'>¥500</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>{t.SKINS_DESCRIPTION}</p>
                </div>
              </div>
            </div>
            <div className='my-8 w-full md:w-4/5 mx-auto shadow-md p-8 bg-white rounded-md'>
              <h2 class="border-b pb-1 mb-5 font-bold text-xl">{t.POLES}</h2>
              <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <div class="w-full text-center">
                  <Image src='/images/gear_pole.jpg' width={200} height={200} className='rounded-lg' />
                </div>
                <div>
                  <table class="table-auto mx-auto w-full mb-5 sm:mt-4">
                    <thead>
                      <tr>
                        <th className='border bg-gray-100 p-2'>{t.ONE_DAY}</th>
                        <th className='border bg-gray-100 p-2'>{t.TWO_DAYS}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border p-2 text-center' colSpan='2'>¥500</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>{t.POLES_DESCRIPTION}</p>
                </div>
              </div>
            </div>
            <div className='my-8 w-full md:w-4/5 mx-auto shadow-md p-8 bg-white rounded-md'>
              <h2 class="border-b pb-1 mb-5 font-bold text-xl">{t.BACKPACK}</h2>
              <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <div class="w-full text-center">
                  <Image src='/images/gear_zack.jpg' width={200} height={200} className='rounded-lg' />
                </div>
                <div>
                  <table class="table-auto mx-auto w-full mb-5 sm:mt-4">
                    <thead>
                      <tr>
                        <th className='border bg-gray-100 p-2'>{t.ONE_DAY}</th>
                        <th className='border bg-gray-100 p-2'>{t.TWO_DAYS}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border p-2 text-center' colSpan='2'>¥500</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>{t.BACKPACK_DESCRIPTION}</p>
                </div>
              </div>
            </div>
            <div className='my-8 w-full md:w-4/5 mx-auto shadow-md p-8 bg-white rounded-md'>
              <h2 class="border-b pb-1 mb-5 font-bold text-xl">{t.HELMET}</h2>
              <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <div class="w-full text-center">
                  <Image src='/images/gear_helmet.jpg' width={200} height={200} className='rounded-lg' />
                </div>
                <div>
                  <table class="table-auto mx-auto w-full mb-5 sm:mt-4">
                    <thead>
                      <tr>
                        <th className='border bg-gray-100 p-2'>{t.ONE_DAY}</th>
                        <th className='border bg-gray-100 p-2'>{t.TWO_DAYS}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border p-2 text-center' colSpan='2'>¥500</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>{t.HELMET_DESCRIPTION}</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </body>
    </>
  )
}
