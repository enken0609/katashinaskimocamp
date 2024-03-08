import Link from 'next/link'

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { NextSeo } from 'next-seo'

import useLocale from '../hooks/useLocale';

export default function Contact() {

  const { t } = useLocale();

  return (
    <>
      <NextSeo title='フォト' description='フォトギャラリー。片品村の豊富な積雪、パウダースノーでスキーモを楽しみませんか？スキーモとはスキーマウンテニアリング(Ski Mountaineering=山岳スキー)の略です。スキーモは雪上のトレラン・スカイランです。シールと呼ばれる滑り止めを板の裏に貼り雪山を登り、シールを剥がして降ります。初めての方でもぜひチャレンジしてみてください。'/>
      <body>
        <Navbar />
        <main className='min-h-screen bg-base-500'>
        <div className="flex flex-wrap px-8 pt-8">
            <Link href="/" className="mr-2 text-gray-600 hover:opacity-75">
              TOP
            </Link>
            <span className="mr-2">/</span>
            <p className="text-base-900">{t.PHOTO}</p>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-base-900 mx-8 pt-4 md:pt-10">PHOTO</h1>
          <p className="text-base-900 text-sm mx-8">{t.PHOTO}</p>
          <section className='events p-4 md:p-10'>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
              <a href='https://photos.app.goo.gl/LMH1aVJ3PJvLye3s7' target="_blank">
                <div className="bg-20240211-quest2 w-full bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:opacity-90 transition duration-300 ease-in-out filter brightness-90">
                  <div className="px-4 sm:px-6 lg:px-4 justify-center items-center grid py-16">
                    <h2 className="text-center text-white text-3xl font-bold w-full mb-4">2024/2/11-2/12<br/>QUEST Level.2</h2>
                    <p className="border w-full p-3 text-white text-center font-bold">{t.PHOTO_GALLERY}</p>
                  </div>
                </div>
              </a>
              <a href='https://photos.app.goo.gl/bUf9UvVJ1Wcau4ga8' target="_blank">
                <div className="bg-20240102-quest2 w-full bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:opacity-90 transition duration-300 ease-in-out filter brightness-90">
                  <div className="px-4 sm:px-6 lg:px-4 justify-center items-center grid py-16">
                    <h2 className="text-center text-white text-3xl font-bold w-full mb-4">2024/1/2-1/3<br/>QUEST Level.1</h2>
                    <p className="border w-full p-3 text-white text-center font-bold">{t.PHOTO_GALLERY}</p>
                  </div>
                </div>
              </a>
              <a href='https://photos.app.goo.gl/uuxnSeF72yisrvPMA' target="_blank">
                <div className="bg-20231223-basic1 w-full bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:opacity-90 transition duration-300 ease-in-out filter brightness-90">
                  <div className="px-4 sm:px-6 lg:px-4 justify-center items-center grid py-16">
                    <h2 className="text-center text-white text-3xl font-bold w-full mb-4">2023/12/23-12/24<br/>BASIC Vol.1</h2>
                    <p className="border w-full p-3 text-white text-center font-bold">{t.PHOTO_GALLERY}</p>
                  </div>
                </div>
              </a>
              <a href='https://photos.app.goo.gl/uuxnSeF72yisrvPMA' target="_blank">
                <div className="bg-20230325-quest1 w-full bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:opacity-90 transition duration-300 ease-in-out">
                  <div className="px-4 sm:px-6 lg:px-4 justify-center items-center grid py-16">
                    <h2 className="text-center text-white text-3xl font-bold w-full mb-4">2023/3/25-3/26<br/>QUEST Vol.1</h2>
                    <p className="border w-full p-3 text-white text-center font-bold">{t.PHOTO_GALLERY}</p>
                  </div>
                </div>
              </a>
              <a href='https://photos.app.goo.gl/XySjMbdCPE9BYdMe7' target="_blank">
                <div className="bg-20230108-basic1 w-full bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:opacity-90 transition duration-300 ease-in-out">
                  <div className="px-4 sm:px-6 lg:px-4 justify-center items-center grid py-16">
                    <h2 className="text-center text-white text-3xl font-bold w-full mb-4">2023/1/8-1/9<br/>BASIC Vol.1</h2>
                    <p className="border w-full p-3 text-white text-center font-bold">{t.PHOTO_GALLERY}</p>
                  </div>
                </div>
              </a>
              <a href='https://photos.app.goo.gl/jBcoqGNJkLPrdywh9' target="_blank">
                <div className="bg-20220416-quest2 w-full bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:opacity-90 transition duration-300 ease-in-out">
                  <div className="px-4 sm:px-6 lg:px-4 justify-center items-center grid py-16">
                    <h2 className="text-center text-white text-3xl font-bold w-full mb-4">2022/4/16-4/17<br/>QUEST Vol.2</h2>
                    <p className="border w-full p-3 text-white text-center font-bold">{t.PHOTO_GALLERY}</p>
                  </div>
                </div>
              </a>
              <a href='https://photos.app.goo.gl/E4t4xGGczJHV7sKY6' target="_blank">
                <div className="bg-20220220-trial w-full bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:opacity-90 transition duration-300 ease-in-out">
                  <div className="px-4 sm:px-6 lg:px-4 justify-center items-center grid py-16">
                    <h2 className="text-center text-white text-3xl font-bold w-full mb-4">2022/2/20<br/>TRIAL</h2>
                    <p className="border w-full p-3 text-white text-center font-bold">{t.PHOTO_GALLERY}</p>
                  </div>
                </div>
              </a>
              <a href='https://photos.app.goo.gl/s2iZcsLeKR6JpsVc8' target="_blank">
                <div className="bg-20220212-basic2 w-full bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:opacity-90 transition duration-300 ease-in-out">
                  <div className="px-4 sm:px-6 lg:px-4 justify-center items-center grid py-16">
                    <h2 className="text-center text-white text-3xl font-bold w-full mb-4">2022/2/12-2/13<br/>BASIC Vol.2</h2>
                    <p className="border w-full p-3 text-white text-center font-bold">{t.PHOTO_GALLERY}</p>
                  </div>
                </div>
              </a>
              <a href='https://photos.app.goo.gl/vmiHVrixxrchLTue6' target="_blank">
                <div className="bg-20220102-basic1 w-full bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:opacity-90 transition duration-300 ease-in-out">
                  <div className="px-4 sm:px-6 lg:px-4 justify-center items-center grid py-16">
                    <h2 className="text-center text-white text-3xl font-bold w-full mb-4">2022/1/2-1/3<br/>BASIC Vol.1</h2>
                    <p className="border w-full p-3 text-white text-center font-bold">{t.PHOTO_GALLERY}</p>
                  </div>
                </div>
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </body>
    </>
  )
}
