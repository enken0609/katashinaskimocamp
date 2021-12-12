import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { client } from '../libs/client'

export default function Events({ events }) {
  return (
    <>
      <Head>
        <title>KATASHINA SKIMO CAMP</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <Navbar />
        <main className='min-h-screen'>
          <h2 className="bg-gray-100 p-20 md:p-32 text-center text-2xl md:text-3xl font-bold">イベント一覧</h2>
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
                <div className="w-full p-40 text-center text-2xl font-bold rounded-md">Coming Soon</div>
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
