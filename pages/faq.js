import Link from 'next/link'

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { NextSeo } from 'next-seo'

import FAQ from '../components/Faq';
import useLocale from '../hooks/useLocale';

export default function Contact() {

  const { t } = useLocale();

  return (
    <>
      <NextSeo title='よくある質問' description='よくある質問を紹介します。片品スキーモキャンプのイベント一覧。片品村の豊富な積雪、パウダースノーでスキーモを楽しみませんか？スキーモとはスキーマウンテニアリング(Ski Mountaineering=山岳スキー)の略です。スキーモは雪上のトレラン・スカイランです。シールと呼ばれる滑り止めを板の裏に貼り雪山を登り、シールを剥がして降ります。初めての方でもぜひチャレンジしてみてください。'/>
      <body>
        <Navbar />
        <main className='min-h-screen bg-base-500'>
          <div class="flex flex-wrap px-8 pt-8">
            <Link href="/">
              <a class="mr-2 text-gray-600 hover:opacity-75">TOP</a>
            </Link>
            <span class="mr-2">/</span>
            <p class="text-base-900">{t.FAQ}</p>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-base-900 mx-8 pt-4 md:pt-10">{t.FAQ}</h1>
          <p class="text-base-900 text-sm mx-8">{t.FAQ}</p>
          <section className='events mb-8 p-4 md:p-10'>
              <div className="faq-list">
                  <FAQ  />
              </div>

          </section>
        </main>
        <Footer />
      </body>
    </>
  )
}
