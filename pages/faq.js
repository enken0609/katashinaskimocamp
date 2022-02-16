import Link from 'next/link'

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { NextSeo } from 'next-seo'

export default function Contact() {
  return (
    <>
      <NextSeo title='よくある質問' description='よくある質問を紹介します。片品スキーモキャンプのイベント一覧。片品村の豊富な積雪、パウダースノーでスキーモを楽しみませんか？スキーモとはスキーマウンテニアリング(Ski Mountaineering=山岳スキー)の略です。スキーモは雪上のトレラン・スカイランです。シールと呼ばれる滑り止めを板の裏に貼り雪山を登り、シールを剥がして降ります。初めての方でもぜひチャレンジしてみてください。'/>
      <body>
        <Navbar />
        <main className='min-h-screen'>
        <h1 className="bg-gray-100 py-20 md:p-32 text-center text-2xl md:text-3xl font-bold">よくある質問</h1>
          <section className='events mb-8 p-4 md:p-10'>
            <div className='w-full mx-auto'>
              <div class="w-full md:w-4/5 shadow-lg p-4 md:p-10 mx-auto">
                <h2 class="text-xl mb-2  border-b"><span class="font-bold text-2xl">Q</span> スキーの経験がなくてもできますか？</h2>
                <p class="text-gray-700 mb-6">スキーが初めての方でも歓迎いたします！<Link href="/rental"><a class="underline text-blue-400">レンタル</a></Link>もご用意しております。</p>
                <h2 class="text-xl mb-2  border-b"><span class="font-bold text-2xl">Q</span> SKIMOの道具は持っていますが参加しても良いですか？</h2>
                <p class="text-gray-700 mb-6">もちろん参加可能です。</p>
                <h2 class="text-xl mb-2 border-b"><span class="font-bold text-2xl">Q</span> アクセスについて</h2>
                <p class="text-gray-700">車の方は直接指定の集合場所までお越しください。</p>
                <p class="text-gray-700 mb-6">片品スノ―エクスプレス号ご利用の方は、道の駅尾瀬かたしなに送迎いたします。※事前にご連絡ください。</p>
                <h2 class="text-xl mb-2  border-b"><span class="font-bold text-2xl">Q</span> どんなウェアで参加すればいいですか？</h2>
                <p class="text-gray-700 mb-6">低音時や降雪時にはダウンジャケットや上下防寒ウェアは必要となりますが、活動時は暑くなりますので着脱が簡単なウェアをお勧めいたします。</p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </body>
    </>
  )
}
