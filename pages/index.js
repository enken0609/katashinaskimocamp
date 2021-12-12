import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { client } from '../libs/client'

export default function Home({ events }) {
  return (
    <>
      <Head>
        <title>KATASHINA SKIMO CAMP</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <Navbar />
        <main className='min-h-screen'>
          <section className='p-8'>
            <Image src="/../public/images/ksc_mv.jpg" width={1920} height={1080} className='rounded-xl' />
            <div className='text-center md:w-2/3 pt-8 mx-auto'>
              <h1 class="text-2xl md:text-5xl font-bold mb-2">KATASHINA SKIMO CAMP</h1>
              <p class="text-md md:text-3xl text-gray-500 mb-4">片品村で<span class="text-black font-bold">SKIMO</span>デビューしませんか？</p>
              <p className='mb-2 leading-relaxed'>
                SKIMO(スキーモ)とはスキーマウンテニアリング(Ski Mountaineering=山岳スキー)の略です。<br />
                SKIMOは雪上のトレラン・スカイランです。<br />シールと呼ばれる滑り止めを板の裏に貼り雪山を登り、シールを剥がして降ります。<br />
                初めての方でもぜひチャレンジしてみてください。<br />
                ヨーロッパ・アルプスはSKIMO人口が増加しており、今や20万人ともいわれています。<br />
                競技として、各アクティビティへの移動手段として、フィットネスとしてなど多様な楽しみ方があります。<br />
                雪山をまるごと楽しめる新しいウインタースポーツで、もちろん大会も開かれています。<br />
                日本のトップアスリートたちがガイドするキャンプでSKIMOデビューしませんか?<br />
                安全快適なフィールドと最新最適なギアを用意してお待ちしています。
              </p>
            </div>
          </section>
          <section className='events mb-8 p-10 bg-gray-100'>
            <div className='w-full mb-6'>
              <h2 className='text-2xl font-bold leading-7 text-gray-900 text-center sm:text-3xl sm:truncate'>イベント一覧</h2>
            </div>

            {events.length > 0 ? (
              <>
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
                <div className='mt-8 text-center'>
                  <Link href="/events">
                    <a class="inline-block py-2 text-white bg-gray-900 px-7 hover:bg-gray-800 rounded-lg">イベント一覧へ</a>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="w-full p-20 text-center text-2xl font-bold rounded-md">Coming Soon</div>
                <div className='mt-8 text-center'>
                  <a href="https://moshicom.com/search/?s=3&keyword=&event_start_date=&event_end_date=2021-12-01&entry_status=no&except_eventup=no&scale=0&day_entry=no&measurement=no&user_id=255516&search_type=1&recommend_event=true&recommend_course=true&recommend_facility=true&mode=1&l=20&o=0&m=1" target="_blank" class="inline-block py-2 text-white bg-gray-900 px-7 hover:bg-gray-800 rounded-lg">過去のイベントを見る</a>
                </div>
              </>
            )}
          </section>
          <section className='mb-8 p-10'>
            <div className="w-full mb-6">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 text-center sm:text-3xl sm:truncate">レンタル</h2>
            </div>
            <div className='w-full'>
              <div className='grid gap-4 grid-cols-1 sm:grid-cols-2'>
                <div className='text-center'>
                  <Image src='/../public/images/gear.png' width={300} height={300} className='rounded-lg' />
                </div>
                <div className='p-8'>
                  <p className='mb-6'>最新のギア！国内最軽量！をご用意しています。</p>
                  <p>■スキーセット（スキー、ブーツ、ポール、シール）</p>
                  <p>¥13,500（税込、2日間）</p>
                  <p className='mb-6'>¥7,150（税込、1日間）</p>
                  <p className='mb-6'>■専用ヘルメット ¥1,000（税込）</p>
                  <p>■専用ザック ¥1,000（税込）</p>
                </div>
              </div>
            </div>
            <div className='mt-8 text-center'>
              <Link href="/rental">
                <a class="inline-block py-2 text-white bg-gray-900 px-7 hover:bg-gray-800 rounded-lg">詳しく見る</a>
              </Link>
            </div>
          </section>
          <section className='mb-8 p-10 bg-gray-100'>
            <div class="w-full mb-6">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 text-center sm:text-3xl sm:truncate">コーチ</h2>
            </div>
            <div class="w-full">
              <div class="max-w-6xl mx-auto">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div class="bg-white w-full shadow-lg rounded-lg p-12 flex flex-col justify-center items-center">
                    <div class="mb-8">
                      <Image src='/../public/images/kazuakihoshino.jpeg' width={300} height={300} className='object-center object-cover rounded-full h-36 w-36' />
                    </div>
                    <div class="text-center">
                      <p class="text-xl text-gray-900 font-bold mb-2">星野 和昭</p>
                      <p class="text-xs text-gray-900 font-normal">片品村出身のスカイランナーであり、トップスキーヤー！</p>
                      <p class="text-xs text-gray-900 font-normal">「ウインターシーズンを楽しみましょう」</p>
                      <p class="text-xs text-gray-900 font-normal">2016年スカイランニング世界選手権日本代表</p>
                      <p class="text-xs text-gray-900 font-normal">2019年スキーモ世界選手権日本代表</p>
                      <div className='pt-4 flex justify-center space-x-2'>
                        <a href="https://www.instagram.com/hoshinodash/" class="text-gray-500 hover:text-gray-600">
                          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                              <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                          </svg>
                        </a>
                        <a href="https://www.facebook.com/kazuaki.hoshino.94" class="text-gray-500 hover:text-gray-600">
                          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white w-full shadow-lg rounded-lg p-12 flex flex-col justify-center items-center">
                    <div class="mb-8">
                      <Image src='/../public/images/ayaka_ueda.jpeg' width={300} height={300} className='object-center object-cover rounded-full h-36 w-36' />
                    </div>
                    <div class="text-center">
                      <p class="text-xl text-gray-900 font-bold mb-2">上田 絢香</p>
                      <p class="text-xs text-gray-900 font-normal">スカイランニング界トップアスリート</p>
                      <p class="text-xs text-gray-900 font-normal">「私はスキーモで苦手な登りを克服しました！！」</p>
                      <p class="text-xs text-gray-900 font-normal">2021年スカイランニング世界選手権日本代表</p>
                      <div className='pt-4 flex justify-center space-x-2'>
                        <a href="https://www.instagram.com/ayacan182/" class="text-gray-500 hover:text-gray-600">
                          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                              <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                          </svg>
                        </a>
                        <a href="https://www.facebook.com/search/top?q=ayaka%20ueda" class="text-gray-500 hover:text-gray-600">
                          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                              <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white w-full shadow-lg rounded-lg p-12 flex flex-col justify-center items-center">
                    <div class="mb-8">
                      <Image src='/../public/images/kenta_endo.jpeg' width={300} height={300} className='object-center object-cover rounded-full h-36 w-36' />
                    </div>
                    <div class="text-center">
                      <p class="text-xl text-gray-900 font-bold mb-2">遠藤 健太</p>
                      <p class="text-xs text-gray-900 font-normal">親切丁寧がモットーのトップアスリート</p>
                      <p class="text-xs text-gray-900 font-normal">「スキーモの魅力をお伝えします。」</p>
                      <p class="text-xs text-gray-900 font-normal">2019年スキーモ世界選手権日本代表</p>
                      <div className='pt-4 flex justify-center space-x-2'>
                        <a href="https://www.instagram.com/enken0609/" class="text-gray-500 hover:text-gray-600">
                          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                              <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                          </svg>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100005796331083" class="text-gray-500 hover:text-gray-600">
                          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                              <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="gallery mb-8 p-10">
            <div class="w-full mb-6">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 text-center sm:text-3xl sm:truncate">ギャラリー</h2>
            </div>
            <div class="w-full">
              <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <Image src='/../public/images/gallery_6.jpg' width={300} height={300} className='rounded-lg' />
                <Image src='/../public/images/gallery_1.jpg' width={300} height={300} className='rounded-lg' />
                <Image src='/../public/images/gallery_9.jpg' width={300} height={300} className='rounded-lg' />
                <Image src='/../public/images/gallery_7.jpg' width={300} height={300} className='rounded-lg' />
                <Image src='/../public/images/gallery_4.jpg' width={300} height={300} className='rounded-lg' />
                <Image src='/../public/images/gallery_3.jpg' width={300} height={300} className='rounded-lg' />
                <Image src='/../public/images/gallery_5.jpg' width={300} height={300} className='rounded-lg' />
                <Image src='/../public/images/gallery_8.jpg' width={300} height={300} className='rounded-lg' />
                <Image src='/../public/images/gallery_2.jpg' width={300} height={300} className='rounded-lg' />
              </div>
            </div>
          </section>
          {/* <section class="gallery mb-8 p-10">
            <div class="w-full mb-6">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 text-center sm:text-3xl sm:truncate">スポンサー</h2>
            </div>
            <div class="w-full">
              <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

              </div>
            </div>
          </section> */}
          <section class="gallery mb-8 p-10">
            <div class="w-full mb-6">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 text-center sm:text-3xl sm:truncate">SNS</h2>
            </div>
            <div class="w-full">
              <div class="grid gap-4 grid-cols-2">
                <a href="https://www.instagram.com/katashina_skimo_camp/" class="w-full sm:w-2/3 mx-auto rounded-md bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:opacity-90 transition">
                  <svg class="text-white w-20 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://www.facebook.com/KatashinaSkimoCamp" class="w-full sm:w-2/3 mx-auto rounded-md bg-gradient-to-r from-blue-400 to-blue-500 hover:opacity-90 transition">
                  <svg class="text-white w-20 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
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
