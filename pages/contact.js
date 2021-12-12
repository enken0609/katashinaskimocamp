import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export default function Contact() {
  return (
    <>
      <Head>
        <title>KATASHINA SKIMO CAMP</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <Navbar />
        <main className='min-h-screen'>
        <h2 className="bg-gray-100 p-20 md:p-32 text-center text-2xl md:text-3xl font-bold">お問い合わせ</h2>
          <section className='events mb-8 p-4 md:p-10'>
            <div className='w-full mx-auto'>
              <div class="w-full md:w-3/5 shadow-lg p-4 md:p-10 mx-auto">

                <form action="" method="POST">
                  <div class="mb-6">
                    <label for="name" class="block mb-2 text-sm text-gray-600">氏名</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="片品 太郎"
                      required
                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-gray-100 focus:border-gray-500"
                    />
                  </div>
                  <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm text-gray-600">メールアドレス</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="abc@example.com"
                      required
                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-gray-100 focus:border-gray-500"
                    />
                  </div>
                  <div class="mb-6">
                    <label for="message" class="block mb-2 text-sm text-gray-600">内容</label>
                    <textarea
                      rows="5"
                      name="message"
                      placeholder="テキスト"
                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-gray-100 focus:border-gray-500"
                      required
                    ></textarea>
                  </div>
                  <div class="mb-6">
                    <button
                      type="submit"
                      class="w-full px-2 py-4 text-white bg-gray-900 rounded-md  focus:bg-gray-600 focus:outline-none">
                      送信
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </body>
    </>
  )
}
