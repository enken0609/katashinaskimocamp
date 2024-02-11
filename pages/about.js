import Link from 'next/link'

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import useLocale from '../hooks/useLocale';

export default function Contact() {

  const { t } = useLocale();

  return (
    <>
      <NextSeo title='KATASHINA SKIMO CAMPについて' description='KATASHINA SKIMO CAMPについて。片品スキーモキャンプのイベント一覧。片品村の豊富な積雪、パウダースノーでスキーモを楽しみませんか？スキーモとはスキーマウンテニアリング(Ski Mountaineering=山岳スキー)の略です。スキーモは雪上のトレラン・スカイランです。シールと呼ばれる滑り止めを板の裏に貼り雪山を登り、シールを剥がして降ります。初めての方でもぜひチャレンジしてみてください。'/>
        <Navbar />
        <main className='min-h-screen bg-base-500'>
          <div className="flex flex-wrap px-8 pt-8">
            <Link href="/" className="mr-2 text-gray-600 hover:opacity-75">
              TOP
            </Link>
            <span className="mr-2">/</span>
            <p className="text-base-900">{t.ABOUT_US}</p>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-base-900 mx-8 pt-4 md:pt-10">ABOUT US</h1>
          <p className="text-base-900 text-sm mx-8">{t.ABOUT_US}</p>
          <section className='events p-4 md:p-10'>
            <div className="bg-white p-6 md:p-8 rounded-md">
              <div className="grid grid-cols-1 lg:grid-cols-2 mb-6">
                  <div className='text-center relative basis-8'>
                    <Image src='/images/aboutus_thumbnail.jpg' width={767} height={504} className='rounded-lg w-full' />
                  </div>
                  <div className="-mt-6 lg:mt-16 pt-14 pb-14 lg:pb-24 pr-6 sm:pr-10 pl-16 sm:pl-28 -mr-4 -ml-16 bg-gray-100 rounded-lg basis-10 md:w-full">
                    <h2 className="text-base-900 font-bold text-2xl mb-6 lg:mt-10">{t.KATASHINA_SKIMO}</h2>
                    <p className="mb-4">{t.KATASHINA_SKIMO_DESCRIPTION_1}</p>
                    <p className="mb-4">{t.KATASHINA_SKIMO_DESCRIPTION_2}</p>
                    <p>{t.KATASHINA_SKIMO_DESCRIPTION_2}</p>
                  </div>
              </div>
              <div class ="mb-6">
                <h2 className="text-base-900 font-bold text-2xl pb-2 mb-4 border-b-2 border-base-500 border-dashed">{t.ABOUT_SKIMO}</h2>
                <p>{t.ABOUT_SKIMO_DESCRIPTION_1}</p>
                <p>{t.ABOUT_SKIMO_DESCRIPTION_2}</p>
              </div>
              <div class ="mb-6">
                <h2 className="text-base-900 font-bold text-2xl pb-2 mb-4 border-b-2 border-base-500 border-dashed">{t.FUN_UPHILL_SKI}</h2>
                <h3 className="text-gray-700 font-semibold text-lg mb-2">{t.FUN_UPHILL_SKI_TITLE_1}</h3>
                <p className="mb-2">{t.FUN_UPHILL_SKI_DESCRIPTION_1}</p>
                <h3 className="text-gray-700 font-semibold text-lg mb-2">{t.FUN_UPHILL_SKI_TITLE_2}</h3>
                <p className="mb-2">{t.FUN_UPHILL_SKI_DESCRIPTION_2}</p>
                </div>
                <div class ="mb-6">
                  <h2 className="text-base-900 font-bold text-2xl pb-2 mb-4 border-b-2 border-base-500 border-dashed">{t.THE_THREE_VALLEYS}</h2>
                  <p className="mb-2">{t.THE_THREE_VALLEYS_DESCRIPTION}</p>
                  <h3 className="text-gray-700 font-semibold text-lg mb-2">{t.THE_THREE_VALLEYS_TITLE_1}</h3>
                  <p className="mb-2">{t.THE_THREE_VALLEYS_DESCRIPTION_1}</p>
                  <h3 className="text-gray-700 font-semibold text-lg mb-2">{t.THE_THREE_VALLEYS_TITLE_2}</h3>
                  <p className="mb-2">{t.THE_THREE_VALLEYS_DESCRIPTION_2}</p>
                  <h3 className="text-gray-700 font-semibold text-lg mb-2">{t.THE_THREE_VALLEYS_TITLE_3}</h3>
                  <p className="mb-2">{t.THE_THREE_VALLEYS_DESCRIPTION_3}</p>
                </div>
                <div class ="mb-6">
                  <h2 className="text-base-900 font-bold text-2xl pb-2 mb-4 border-b-2 border-base-500 border-dashed">{t.COACH}</h2>
                  <p className="mb-2">{t.COACH_DESCRIPTION}</p>
              </div>
              <div class ="mb-6">
                  <h2 className="text-base-900 font-bold text-2xl pb-2 mb-4 border-b-2 border-base-500 border-dashed">{t.GEAR}</h2>
                  <p className="mb-2">{t.GEAR_DESCRIPTION}</p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
    </>
  )
}
