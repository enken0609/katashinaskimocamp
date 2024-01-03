import Link from 'next/link'

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { NextSeo } from 'next-seo'

import useLocale from '../hooks/useLocale';

export default function Contact() {

  const { t } = useLocale();

  return (
    <>
      <NextSeo title='お問い合わせ' description='お問い合わせ(Ski Mountaineering=山岳スキー)の略です。スキーモは雪上のトレラン・スカイランです。シールと呼ばれる滑り止めを板の裏に貼り雪山を登り、シールを剥がして降ります。初めての方でもぜひチャレンジしてみてください。'/>
      <body>
        <Navbar />
        <main className='min-h-screen bg-base-500'>
        <div class="flex flex-wrap px-8 pt-8">
            <Link href="/">
              <a class="mr-2 text-gray-600 hover:opacity-75">TOP</a>
            </Link>
            <span class="mr-2">/</span>
            <p class="text-base-900">{t.CONTACT}</p>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-base-900 mx-8 pt-4 md:pt-10">{t.CONTACT}</h1>
          <p class="text-base-900 text-sm mx-8">{t.CONTACT}</p>
          <section className='events p-4 md:p-10'>
            <div className='my-8 w-full mx-auto shadow-md p-8 bg-white rounded-md'>
              <p class="mb-2">{t.CONTACT_DESCRIPTION_1}</p>
              <p class="mb-4">{t.CONTACT_DESCRIPTION_2}</p>
              <a href='mailto:katashina.skimo@gmail.com' class="text-base-900 font-bold text-xl md:text-3xl break-words">katashina.skimo@gmail.com</a>
            </div>
          </section>
        </main>
        <Footer />
      </body>
    </>
  )
}
