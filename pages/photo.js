import Link from 'next/link'

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { NextSeo } from 'next-seo'

export default function Contact() {
  return (
    <>
      <NextSeo title='フォト' description='フォトギャラリー。片品村の豊富な積雪、パウダースノーでスキーモを楽しみませんか？スキーモとはスキーマウンテニアリング(Ski Mountaineering=山岳スキー)の略です。スキーモは雪上のトレラン・スカイランです。シールと呼ばれる滑り止めを板の裏に貼り雪山を登り、シールを剥がして降ります。初めての方でもぜひチャレンジしてみてください。'/>
      <body>
        <Navbar />
        <main className='min-h-screen'>
        <h1 className="bg-gray-100 py-20 md:p-32 text-center text-2xl md:text-3xl font-bold">フォト</h1>
          <section className='events mb-8 p-4 md:p-10'>
            <div class='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
              <a href='https://photos.app.goo.gl/vmiHVrixxrchLTue6' target="_blank">
                <div class="bg-20220102-basic1 w-full bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:opacity-90 transition duration-300 ease-in-out">
                  <div class="px-4 sm:px-6 lg:px-4 flex justify-center items-center grid py-16">
                    <h2 class="text-center text-white text-3xl font-bold w-full mb-4">2022/1/2-1/3<br/>BASIC Vol.1</h2>
                    <p class="border w-full p-3 text-white text-center font-bold">フォトギャラリー</p>
                  </div>
                </div>
              </a>
              <a href='https://photos.app.goo.gl/s2iZcsLeKR6JpsVc8' target="_blank">
                <div class="bg-20220212-basic2 w-full bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:opacity-90 transition duration-300 ease-in-out">
                  <div class="px-4 sm:px-6 lg:px-4 flex justify-center items-center grid py-16">
                    <h2 class="text-center text-white text-3xl font-bold w-full mb-4">2022/2/12-2/13<br/>BASIC Vol.2</h2>
                    <p class="border w-full p-3 text-white text-center font-bold">フォトギャラリー</p>
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
