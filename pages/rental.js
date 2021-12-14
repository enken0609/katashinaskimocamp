import Image from 'next/image'

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { NextSeo } from 'next-seo'

export default function Rental() {
  return (
    <>
      <NextSeo title='レンタル' description='片品スキーモキャンプではスキーモの道具をレンタルしております。手ぶらでの参加OK！片品村の豊富な積雪、パウダースノーでスキーモを楽しみませんか？スキーモとはスキーマウンテニアリング(Ski Mountaineering=山岳スキー)の略です。スキーモは雪上のトレラン・スカイランです。シールと呼ばれる滑り止めを板の裏に貼り雪山を登り、シールを剥がして降ります。初めての方でもぜひチャレンジしてみてください。' />
      <body>
        <Navbar />
        <main className='min-h-screen'>
        <h1 className="bg-gray-100 p-20 md:p-32 text-center text-2xl md:text-3xl font-bold">レンタル</h1>
          <section className='events mb-8 p-4 md:p-10'>
            <div className='w-full md:w-4/5 mx-auto py-5 px-2'>
              <p>最新のギア！国内最軽量！をご用意しています。</p>
              <p>ヘルメットやポールなどご自身で持参できるものはレンタルの必要はございません。</p>
              <p>サイズなどはmoshicomでお申し込みの際にご指定ください。</p>
            </div>
            <div className='my-8 w-full md:w-4/5 mx-auto shadow-md p-8 '>
              <h2 class="border-b pb-1 mb-5 font-bold text-xl">スキーセット（スキー、ビンディング）</h2>
              <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <div class="w-full text-center">
                  <Image src='/images/gear_ski.jpg' width={200} height={200} className='rounded-lg' />
                </div>
                <div>
                  <table class="table-auto mx-auto w-full mb-5 sm:mt-4">
                    <thead>
                      <tr>
                        <th className='border bg-gray-100 p-2'>1日間</th>
                        <th className='border bg-gray-100 p-2'>2日間</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border text-center p-2'>¥4,000</td>
                        <td className='border text-center p-2'>¥7,500</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>ATOMICの軽量レース向けモデルのスキーとビンディングです。重さは片足約800gなのでスイスイ登れれます。</p>
                </div>
              </div>
            </div>
            <div className='my-8 w-full md:w-4/5 mx-auto shadow-md p-8 '>
              <h2 class="border-b pb-1 mb-5 font-bold text-xl">ブーツ</h2>
              <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <div class="w-full text-center">
                  <Image src='/images/gear_boot.jpg' width={200} height={200} className='rounded-lg' />
                </div>
                <div>
                  <table class="table-auto mx-auto w-full mb-5 sm:mt-4">
                    <thead>
                      <tr>
                        <th className='border bg-gray-100 p-2'>1日間</th>
                        <th className='border bg-gray-100 p-2'>2日間</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border text-center p-2'>¥2,000</td>
                        <td className='border text-center p-2'>¥3,500</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>ATOMICの軽量レース向けモデルのブーツです。走れるくらいの軽さです。</p>
                </div>
              </div>
            </div>
            <div className='my-8 w-full md:w-4/5 mx-auto shadow-md p-8 '>
              <h2 class="border-b pb-1 mb-5 font-bold text-xl">シール</h2>
              <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <div class="w-full text-center">
                  <Image src='/images/gear_seal.jpg' width={200} height={200} className='rounded-lg' />
                </div>
                <div>
                  <table class="table-auto mx-auto w-full mb-5 sm:mt-4">
                    <thead>
                      <tr>
                        <th className='border bg-gray-100 p-2'>1日間</th>
                        <th className='border bg-gray-100 p-2'>2日間</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border p-2 text-center' colSpan='2'>¥500</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>シールと呼ばれる滑り止めです。板の裏に貼りると前方には滑り、後方には摩擦がかかり雪山を登れます。滑る際はシールを剥がして降ります。</p>
                </div>
              </div>
            </div>
            <div className='my-8 w-full md:w-4/5 mx-auto shadow-md p-8 '>
              <h2 class="border-b pb-1 mb-5 font-bold text-xl">ポール</h2>
              <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <div class="w-full text-center">
                  <Image src='/images/gear_pole.jpg' width={200} height={200} className='rounded-lg' />
                </div>
                <div>
                  <table class="table-auto mx-auto w-full mb-5 sm:mt-4">
                    <thead>
                      <tr>
                        <th className='border bg-gray-100 p-2'>1日間</th>
                        <th className='border bg-gray-100 p-2'>2日間</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border p-2 text-center' colSpan='2'>¥500</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>シールと呼ばれる滑り止めです。板の裏に貼りると前方には滑り、後方には摩擦がかかり雪山を登れます。滑る際はシールを剥がして降ります。</p>
                </div>
              </div>
            </div>
            <div className='my-8 w-full md:w-4/5 mx-auto shadow-md p-8 '>
              <h2 class="border-b pb-1 mb-5 font-bold text-xl">専用ザック</h2>
              <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <div class="w-full text-center">
                  <Image src='/images/gear_zack.jpg' width={200} height={200} className='rounded-lg' />
                </div>
                <div>
                  <table class="table-auto mx-auto w-full mb-5 sm:mt-4">
                    <thead>
                      <tr>
                        <th className='border bg-gray-100 p-2'>1日間</th>
                        <th className='border bg-gray-100 p-2'>2日間</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border p-2 text-center' colSpan='2'>¥500</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>SKIMO専用のザックです。SKIMOレースではスキーを背負って走る区間があり、専用ザックは走る際に背負える仕様です。</p>
                </div>
              </div>
            </div>
            <div className='my-8 w-full md:w-4/5 mx-auto shadow-md p-8 '>
              <h2 class="border-b pb-1 mb-5 font-bold text-xl">専用ヘルメット</h2>
              <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <div class="w-full text-center">
                  <Image src='/images/gear_helmet.jpg' width={200} height={200} className='rounded-lg' />
                </div>
                <div>
                  <table class="table-auto mx-auto w-full mb-5 sm:mt-4">
                    <thead>
                      <tr>
                        <th className='border bg-gray-100 p-2'>1日間</th>
                        <th className='border bg-gray-100 p-2'>2日間</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border p-2 text-center' colSpan='2'>¥500</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>スキーと登山の規格を満たしたSKIMO専用のヘルメットです。</p>
                </div>
              </div>
            </div>

            {/* <div className='my-8 w-full'>
              <h3 className='text-xl font-bold leading-7 text-gray-900 text-center sm:text-2xl sm:truncate my-8'>料金表</h3>
              <table className='table-auto mx-auto w-full md:w-4/5'>
                <thead>
                  <tr>
                    <th className='border bg-gray-100 p-4'>内容</th>
                    <th className='border bg-gray-100 p-4'>1日間</th>
                    <th className='border bg-gray-100 p-4'>2日間</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border p-4'>スキー</td>
                    <td className='border text-center p-4'>¥4,000</td>
                    <td className='border text-center p-4'>¥7,500</td>
                  </tr>
                  <tr>
                    <td className='border p-4'>ブーツ</td>
                    <td className='border text-center p-4'>¥2,000</td>
                    <td className='border text-center p-4'>¥3,500</td>
                  </tr>
                  <tr>
                    <td className='border p-4'>シール</td>
                    <td className='border p-4 text-center' colSpan='2'>¥500</td>
                  </tr>
                  <tr>
                    <td className='border p-4'>ポール</td>
                    <td className='border p-4 text-center' colSpan='2'>¥500</td>
                  </tr>
                  <tr>
                    <td className='border p-4'>専用ザック</td>
                    <td className='border p-4 text-center' colSpan='2'>¥500</td>
                  </tr>
                  <tr>
                    <td className='border p-4'>専用ヘルメット</td>
                    <td className='border p-4 text-center' colSpan='2'>¥500</td>
                  </tr>
                </tbody>
              </table>
            </div> */}
          </section>
        </main>
        <Footer />
      </body>
    </>
  )
}
