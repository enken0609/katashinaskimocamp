import Image from 'next/image'

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { client } from '../libs/client'
import { NextSeo } from 'next-seo'

export default function Events({ events }) {
  return (
    <>
      <NextSeo title='イベント一覧' description='片品スキーモキャンプのイベント一覧。片品村の豊富な積雪、パウダースノーでスキーモを楽しみませんか？スキーモとはスキーマウンテニアリング(Ski Mountaineering=山岳スキー)の略です。スキーモは雪上のトレラン・スカイランです。シールと呼ばれる滑り止めを板の裏に貼り雪山を登り、シールを剥がして降ります。初めての方でもぜひチャレンジしてみてください。' />
      <body>
        <Navbar />
        <main className='min-h-screen'>
          <h1 className="bg-gray-100 py-20 md:p-32 text-center text-2xl md:text-3xl font-bold">イベント一覧</h1>
          <section className='events p-4 md:pt-10 md:px-10'>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
              <div className='p-3 border-b md:border-b-0 md:border-r'>
                <h2 className='font-bold text-lg text-center mb-4'><span className='border-b-4 border-red-500 pb-1'>TRIAL</span></h2>
                <p className='text-sm mb-2'>ワンデーでスキーモを試せちゃうお得なプランです。とりあえずスキーモを試したい！って思う人にオススメです。プチツーリングも実施します。みんなでスキーモ楽しみましょう！</p>
              </div>
              <div className='p-3 border-b md:border-b-0 md:border-r'>
                <h2 className='font-bold text-lg text-center mb-4'><span className='border-b-4 border-red-500 pb-1'>BASIC</span></h2>
                <p className='text-sm mb-2'>その名の通りSKIMOの基本を学び、楽しさを体感してもらいます。ウィンタースポーツは体力ももちろん必要なのですが、技術がとても大切です。山にあまり入りにくい1、2月の厳冬期を利用して、麓で技術を高めることを目的したプランです。</p>
              </div>
              <div className='p-3'>
                <h2 className='font-bold text-lg text-center mb-4'><span className='border-b-4 border-red-500 pb-1'>QUEST</span></h2>
                <p className='text-sm mb-2'>BASICで身につけた技術で天上の楽園と呼ばれるアヤメ平目指します！！上級バックカントリーとまでは行きませんが、十分な絶景が見られます。ゲレンデスキーがある程度できる人向けのプランなので、BASICで技術を磨いてこちらのプランに挑戦するのがおすすめです。</p>
              </div>
            </div>
          </section>
          <section className='events mb-8 p-4 md:p-10'>
            {events.length > 0 ? (
              <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
                {events.map((events) => (
                  <a href={events.link} key={events.id} target="_blank">
                    <div className='rounded overflow-hidden shadow-lg'>
                      <Image src={events.mainVisual.url+'?fit=crop&w=740&h=400'} width={700} height={400} />
                      <div className='px-6 py-4'>
                        <div className='font-bold text-xl mb-2'>{events.eventName}</div>
                        <p className='text-gray-700 text-base'>開催日：{events.eventDate}</p>
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
            ) : (
              <>
                <div className="w-full py-28 text-center text-2xl font-bold rounded-md">Coming Soon</div>
                <div className='mt-8 text-center'>
                  <a href="https://moshicom.com/search/?s=3&keyword=&event_start_date=&event_end_date=2021-12-01&entry_status=no&except_eventup=no&scale=0&day_entry=no&measurement=no&user_id=255516&search_type=1&recommend_event=true&recommend_course=true&recommend_facility=true&mode=1&l=20&o=0&m=1" target="_blank" class="inline-block py-2 text-white bg-gray-900 px-7 hover:bg-gray-800 rounded-lg">過去のイベントを見る</a>
                </div>
              </>
            )}
          </section>

        </main>
        <Footer />
      </body>
    </>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "events"});

  return {
    props: {
      events: data.contents,
    }
  }
}
