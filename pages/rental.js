import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export default function Rental() {
  return (
    <>
      <Head>
        <title>KATASHINA SKIMO CAMP | レンタル</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <Navbar />
        <main className='min-h-screen'>
        <h1 className="bg-gray-100 p-20 md:p-32 text-center text-2xl md:text-3xl font-bold">レンタル</h1>
          <section className='events mb-8 p-4 md:p-10'>
            <div className='w-full'>
              <div className='grid gap-4 grid-cols-1 sm:grid-cols-2'>
                <div className='text-center'>
                  <Image src='/images/gear.png' width={300} height={300} className='rounded-lg' />
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
            <div className='my-8 w-full'>
              <h3 className='text-xl font-bold leading-7 text-gray-900 text-center sm:text-2xl sm:truncate my-8'>料金表</h3>
              <table className='table-auto mx-auto w-full md:w-4/5'>
                <thead>
                  <tr>
                    <th className='border bg-gray-100 p-4'>内容</th>
                    <th className='border bg-gray-100 p-4'>1日</th>
                    <th className='border bg-gray-100 p-4'>2日</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border p-4'>スキーセット(スキー、ブーツ、ポール、シール)</td>
                    <td className='border text-center p-4'>¥7,150</td>
                    <td className='border text-center p-4'>¥13,500</td>
                  </tr>
                  <tr>
                    <td className='border p-4'>専用ヘルメット</td>
                    <td className='border p-4 text-center' colSpan='2'>¥1,000</td>
                  </tr>
                  <tr>
                    <td className='border p-4'>専用ザック</td>
                    <td className='border p-4 text-center' colSpan='2'>¥1,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
        <Footer />
      </body>
    </>
  )
}
