import Image from 'next/image'
import Link from 'next/link'

import { Navbar } from '../../components/NavbarRace'
import { Footer } from '../../components/Footer'
import { NextSeo } from 'next-seo'

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Rental() {
  return (
    <>
      <NextSeo
      title='HOTAKA SKIMO SUMMIT CHALLENGE'
      description='山岳スキーが２０２６年ミラノコルティナ冬季オリンピックに追加種目として選ばれました。群馬県内としても山岳スキーの開催は初の試みです。今後の関東エリアでの山岳スキーの発展の大きな一歩となります。都市部から近い関東最大級の山域を誇る片品村を県外、日本にとどまらず、世界に発信できるレースです。片品村の豊富な積雪、パウダースノーでスキーモを楽しみませんか？スキーモとはスキーマウンテニアリング(Ski Mountaineering=山岳スキー)の略です。スキーモは雪上のトレラン・スカイランです。シールと呼ばれる滑り止めを板の裏に貼り雪山を登り、シールを剥がして降ります。初めての方でもぜひチャレンジしてみてください。'
      openGraph={{
            title: 'HOTAKA SKIMO SUMMIT CHALLENGE',
            description: '山岳スキーが２０２６年ミラノコルティナ冬季オリンピックに追加種目として選ばれました。群馬県内としても山岳スキーの開催は初の試みです。今後の関東エリアでの山岳スキーの発展の大きな一歩となります。都市部から近い関東最大級の山域を誇る片品村を県外、日本にとどまらず、世界に発信できるレースです。片品村の豊富な積雪、パウダースノーでスキーモを楽しみませんか？スキーモとはスキーマウンテニアリング(Ski Mountaineering=山岳スキー)の略です。スキーモは雪上のトレラン・スカイランです。シールと呼ばれる滑り止めを板の裏に貼り雪山を登り、シールを剥がして降ります。初めての方でもぜひチャレンジしてみてください。',
            url: 'https://katashinaskimocamp.com/race/hotakaskimosummitchallenge',
            images: [{
              url: 'https://katashinaskimocamp.com/_next/image?url=%2Fimages%2Frace%2Fmv_hotaka.jpg&w=3840&q=75'
            }]
          }}
        />
      <body>
        <Navbar />
        <main className='min-h-screen'>
        <Image src="/images/race/mv_hotaka.jpg" width={1900} height={1080} className='' />
          <section className='events mb-8 p-4 md:p-10'>
            <div className='w-full md:w-4/5 mx-auto mb-4 py-5 px-2 border-t-2 border-b-2 border-dashed border-hotaka-900'>
              <p class="mb-4 leading-relaxed text-sm md:text-base text-center text-hotaka-900">
                夏は「SKYRUNNING」、冬は「SKIMO」で山頂を目指す<br />前武尊山が舞台のSKIMOレース
              </p>
              <h1 className="mb-4 text-center text-2xl md:text-4xl font-bold text-hotaka-900">第2回 HOTAKA SKIMO SUMMIT CHALLENGE</h1>
              <p class="mb-4 leading-relaxed text-2xl md:text-3xl font-bold text-center text-hotaka-900">
                2023 <span class="text-xl">/</span> 4 <span class="text-xl">/</span> 1(土) - 4 <span class="text-xl">/</span> 2(日)
              </p>
            </div>
            <div className='w-full md:w-4/5 mx-auto py-5 px-2'>
              <p class="leading-relaxed text-sm md:text-base text-center">
                山岳スキーが２０２６年ミラノコルティナ冬季オリンピックに追加種目として選ばれました。群馬県内としても山岳スキーの開催は初の試みです。今後の関東エリアでの山岳スキーの発展の大きな一歩となります。都市部から近い関東最大級の山域を誇る片品村を県外、日本にとどまらず、世界に発信できるレースです。
              </p>
            </div>
            {/* <div class="text-center my-8">
              <a href="https://drive.google.com/file/d/1yrvN2S5HwxnBzdUzh7vNhXk6eGE4srFO/view?usp=sharing" class="bg-hotaka-900 text-white px-4 py-2 rounded hover:bg-hotaka-800">スタートリスト</a>
            </div> */}
            <div class='my-8 w-full md:w-4/5 mx-auto'>
              <h2 id="summary" class="border-b-2 border-hotaka-900 pb-1 mb-4 font-bold md:text-xl sm:text-base">大会概要</h2>
              <dl class="border-b border-dashed border-hotaka-900 py-4 my-4 flex flex-wrap">
                <dt class="w-full sm:w-1/5 pb-2 text-hotaka-900 font-semibold">大会名称</dt>
                <dd class="w-full sm:w-4/5 pb-2">第2回 HOTAKA SKIMO SUMMIT CHALLENGE</dd>
              </dl>
              <dl class="border-b border-dashed border-hotaka-900 py-4 my-4 flex flex-wrap">
                <dt class="w-full sm:w-1/5 pb-2 text-hotaka-900 font-semibold">主催</dt>
                <dd class="w-full sm:w-4/5 pb-2">HOTAKA SKIMO SUMMIT CHALLENGE実行委員会</dd>
              </dl>
              <dl class="border-b border-dashed border-hotaka-900 py-4 my-4 flex flex-wrap">
                <dt class="w-full sm:w-1/5 pb-2 text-hotaka-900 font-semibold">後援</dt>
                <dd class="w-full sm:w-4/5 pb-2">片品村、片品村教育委員会、片品村観光協会、オグナほたかスキー場予定</dd>
              </dl>
              <dl class="border-b border-dashed border-hotaka-900 py-4 my-4 flex flex-wrap">
                <dt class="w-full sm:w-1/5 pb-2 text-hotaka-900 font-semibold">主管</dt>
                <dd class="w-full sm:w-4/5 pb-2">KATASHINA SKIMO CAMP</dd>
              </dl>
              <dl class="border-b border-dashed border-hotaka-900 py-4 my-4 flex flex-wrap">
                <dt class="w-full sm:w-1/5 pb-2 text-hotaka-900 font-semibold">協力</dt>
                <dd class="w-full sm:w-4/5 pb-2">日本山岳・スポーツクライミング協会</dd>
              </dl>
              <dl class="border-b border-dashed border-hotaka-900 py-4 my-4 flex flex-wrap">
                <dt class="w-full sm:w-1/5 pb-2 text-hotaka-900 font-semibold">協賛</dt>
                <dd class="w-full sm:w-4/5 pb-2">片品村振興公社他予定</dd>
              </dl>
              <dl class="border-b border-dashed border-hotaka-900 py-4 my-4 flex flex-wrap">
                <dt class="w-full sm:w-1/5 pb-2 text-hotaka-900 font-semibold">期日</dt>
                <dd class="w-full sm:w-4/5 pb-2">2022年4月1日(土) ～ 4月2日(日)</dd>
              </dl>
              <dl class="border-b border-dashed border-hotaka-900 py-4 my-4 flex flex-wrap">
                <dt class="w-full sm:w-1/5 pb-2 text-hotaka-900 font-semibold">会場</dt>
                <dd class="w-full sm:w-4/5 pb-2">群馬県利根郡片品村花咲 オグナほたかスキー場周辺</dd>
              </dl>
              <dl class="border-b border-dashed border-hotaka-900 py-4 my-4 flex flex-wrap">
                <dt class="w-full sm:w-1/5 pb-2 text-hotaka-900 font-semibold">競技規則</dt>
                <dd class="w-full sm:w-4/5 pb-2">ISMF 山岳スキー大会開催規則による(一部異なる場合があります) </dd>
              </dl>
              <dl class="border-b border-dashed border-hotaka-900 py-4 my-4 flex flex-wrap">
                <dt class="w-full sm:w-1/5 pb-2 text-hotaka-900 font-semibold">競技プログラム</dt>
                <dd class="w-full sm:w-4/5 pb-2">
                  <div class="overflow-hidden overflow-x-scroll mb-2">
                  <table class="table-auto mx-auto w-full text-xs md:text-base">
                    <thead>
                      <tr>
                        <th className='border bg-gray-100 p-2'></th>
                        <th className='border bg-gray-100 p-2'>時間</th>
                        <th className='border bg-gray-100 p-2'>内容</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td rowSpan={14} className='border text-sm text-center p-2'>4/1(土)</td>
                        <td class="border text-sm p-2">9:00~10:20</td>
                        <td class="border text-sm p-2">選手受付(スプリント種目参加者) センターハウス</td>
                      </tr>
                      <tr>
                        <td class="border text-sm p-2">10:40</td>
                        <td class="border text-sm p-2">レースブリーフィング Race briefing</td>
                      </tr>
                      <tr>
                        <td class="border text-sm p-2">11:00～11:20</td>
                        <td class="border text-sm p-2">スプリント競技インスペクション Sprint inspection</td>
                      </tr>
                      <tr>
                        <td class="border text-sm p-2">11:30～12:30</td>
                        <td class="border text-sm p-2">スプリント 予選レーススタート(予選)30 名未満の場合は変わる</td>
                      </tr>
                      <tr>
                        <td class="border text-sm p-2">13:00〜</td>
                        <td class="border text-sm p-2">スプリント (準々決勝シニア男子/5 組各組 6 名/各組 2 名+2 名準決勝へ)</td>
                      </tr>
                      <tr>
                        <td class="border text-sm p-2">13:50~</td>
                        <td class="border text-sm p-2">スプリント(準決勝シニア女子/2組各組 6 名/各組 3 名決勝へ)人数による</td>
                      </tr>
                      <tr>
                        <td class="border text-sm p-2">14:10~</td>
                        <td class="border text-sm p-2">スプリント(準決勝ジュニア・ユース男子準決勝/2組各組 6 名/各組 3 名決勝へ)人数による</td>
                      </tr>
                      <tr>
                        <td class="border text-sm p-2">14:30~</td>
                        <td class="border text-sm p-2">スプリント(準決勝ジュニア・ユース女子準決勝/2組各組 6 名/各組 3 名決勝へ)人数による</td>
                      </tr>
                      <tr>
                        <td class="border text-sm p-2">14:50~</td>
                        <td class="border text-sm p-2">スプリント (準々決勝シニア男子/2組各組 6 名/各組 3 名決勝へ)</td>
                      </tr>
                      <tr>
                        <td class="border text-sm p-2">15:00~</td>
                        <td class="border text-sm p-2">スプリント(決勝ジュニア・ユース男子 6 名)人数による</td>
                      </tr>
                      <tr>
                        <td class="border text-sm p-2">15:10~</td>
                        <td class="border text-sm p-2">スプリント(決勝ジュニア・ユース女子 6 名)人数による</td>
                      </tr>
                      <tr>
                        <td class="border text-sm p-2">15:20~</td>
                        <td class="border text-sm p-2">スプリント(決勝シニア女子決勝/6 名)人数による</td>
                      </tr>
                      <tr>
                        <td class="border text-sm p-2">15:30~</td>
                        <td class="border text-sm p-2">スプリント (決勝シニア男子/6 名)</td>
                      </tr>
                      <tr>
                        <td class="border text-sm p-2">16:30〜</td>
                        <td class="border text-sm p-2">開会式・表彰式</td>
                      </tr>
                      <tr>
                        <td rowSpan={5} className='border text-sm text-center p-2'>4/2(日)</td>
                        <td rowSpan={2} className='border text-sm p-2'>8:30〜</td>
                        <td rowSpan={2} className='border text-sm p-2'>選手受付(センターハウス)</td>
                      </tr>
                      <tr>
                      </tr>
                      <tr>
                        <td class="border text-sm p-2">9:30</td>
                        <td class="border text-sm p-2">スタートエリア移動 Move to the start area</td>
                      </tr>
                      <tr>
                        <td class="border text-sm p-2">10:00～14:00</td>
                        <td class="border text-sm p-2">インディヴィジュアル競技スタート Individual race Start</td>
                      </tr>
                      <tr>
                        <td class="border text-sm p-2">14:30～</td>
                        <td class="border text-sm p-2">表彰式、閉会式 Flower ceremony Award ceremony</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </dd>
              </dl>
              <dl class="border-b border-dashed border-hotaka-900 py-4 my-4 flex flex-wrap">
                <dt class="w-full sm:w-1/5 pb-2 text-hotaka-900 font-semibold">競技種目</dt>
                <dd class="w-full sm:w-4/5 pb-2">
                  ■スプリント（Sprint）<br />シールで登り、ブーツ歩行、スキー滑降と短い距離で競う、 標高差80m程度、競技時間4分程度のコースで予選は個人でタイムを計測し上位30名のトーナーメント方式で競い勝抜きで戦う。<br /><br />
                  ■インディヴィジュアル（Individual）<br />山岳エリアに設定された登り下りを含む水平距離10㎞、総標高差1500mのコースを、山スキーを使って登り、滑り、担いで走破する速さを競う種目。女子、ジュニア、ユースは少し短いコースになります。
                </dd>
              </dl>
              <dl class="border-b border-dashed border-hotaka-900 py-4 my-4 flex flex-wrap">
                <dt class="w-full sm:w-1/5 pb-2 text-hotaka-900 font-semibold">カテゴリー</dt>
                <dd class="w-full sm:w-4/5 pb-2">
                  <div class="overflow-hidden overflow-x-scroll mb-2">
                  <table class="table-auto mx-auto w-full text-xs md:text-base">
                    <tr>
                      <td rowspan="4" class="border text-sm text-left p-2">国際規格<br />・Senior<br />・Junior(U20)<br />・Youth(U18)</td>
                      <td class="border text-sm p-2">ISMF国際ルールに沿ったコースでの競技</td>
                    </tr>
                    <tr>
                      <td class="border text-sm p-2">シニア男女 （21歳以上） 2002年以前生</td>
                    </tr>
                    <tr>
                      <td class="border text-sm p-2">ジュニア男女（19～20歳） 2003〜2004年生</td>
                    </tr>
                    <tr>
                      <td class="border text-sm p-2">ユース男女 （17～18歳） 2005〜2006年生</td>
                    </tr>
                    <tr>
                      <td class="border text-sm p-2">ショートコース</td>
                      <td class="border text-sm p-2">国際大会コースを短縮して完走しやすくしたコースでの競技</td>
                    </tr>
                  </table>
                  </div>
                  <span class="text-red-800 text-sm">※年齢基準は2022年12月31日での年齢でカウントします。 </span><br />
                </dd>
              </dl>
              <dl class="border-b border-dashed border-hotaka-900 py-4 my-4 flex flex-wrap">
                <dt class="w-full sm:w-1/5 pb-2 text-hotaka-900 font-semibold">参加費・参加資格</dt>
                <dd class="w-full sm:w-4/5 pb-2">
                  <div class="overflow-hidden overflow-x-scroll mb-2">
                    <table class="table-auto mx-auto w-full text-xs md:text-base">
                    <thead>
                      <tr>
                        <th className='border text-sm bg-gray-100 p-2'>カテゴリー</th>
                        <th className='border text-sm bg-gray-100 p-2 whitespace-nowrap'>4/1<br />スプリント</th>
                        <th className='border text-sm bg-gray-100 p-2 whitespace-nowrap'>4/2<br />インディビジュアル</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="border text-sm p-2 whitespace-nowrap">シニア男女</td>
                        <td class="border text-sm p-2">5,000円</td>
                        <td class="border text-sm p-2">10,000円</td>
                      </tr>
                      <tr>
                        <td class="border text-sm p-2">ジュニア/ユース男女</td>
                        <td class="border text-sm p-2">3,000円</td>
                        <td class="border text-sm p-2">5,000円</td>
                      </tr>
                      <tr>
                        <td class="border text-sm p-2">ショート(一般)男女</td>
                        <td class="border text-sm p-2"></td>
                        <td class="border text-sm p-2">7,000円</td>
                      </tr>
                      <tr>
                        <td class="border text-sm p-2">・ショート(18歳以下)男女</td>
                        <td class="border text-sm p-2"></td>
                        <td class="border text-sm p-2">3,000円</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                  <p class="text-sm leading-relaxed">
                  ※【インディビジュアル】シニアの部は本格山岳地帯に入るため、過去に全日本インディビジュアルシニアコース(完走は問いません)に参加したことがある方のみの参加に限らせていただきます。<br />
                  </p>
                </dd>
              </dl>
              <dl class="border-b border-dashed border-hotaka-900 py-4 my-4 flex flex-wrap">
                <dt class="w-full sm:w-1/5 pb-2 text-hotaka-900 font-semibold">装備規定</dt>
                <dd class="w-full sm:w-4/5 pb-2">
                  <div class="overflow-hidden overflow-x-scroll mb-2">
                  <table class="table-auto mx-auto w-full text-xs md:text-base">
                    <thead>
                      <tr>
                        <th className='border text-sm bg-gray-100 p-2'></th>
                        <th className='border text-sm bg-gray-100 p-2'></th>
                        <th className='border text-sm bg-gray-100 p-2 whitespace-nowrap'>シニア男女</th>
                        <th className='border text-sm text-left bg-gray-100 p-2 whitespace-nowrap'>・ジュニア男女<br />・ユース男女<br />・ショート男女</th>
                        <th className='border text-sm bg-gray-100 p-2 whitespace-nowrap'>スプリント</th>
                      </tr>
                    </thead>
                    <tr>
                      <td class="border text-sm p-2">スキー</td>
                      <td class="border text-sm p-2">
                        <ul>
                          <li>・長さ男子160㎝以上、女子150㎝以上</li>
                        </ul>
                      </td>
                      <td class="border text-sm p-2">◯</td>
                      <td class="border text-sm p-2">◯</td>
                      <td class="border text-sm p-2">◯</td>
                    </tr>
                    <tr>
                      <td class="border text-sm p-2">ビンディング<span class="text-red-600">*</span></td>
                      <td class="border text-sm p-2">
                        <ul>
                          <li>・2022/2023シーズンはスキーブレーキの使用を推奨します</li>
                          <li>・国際大会では必須となります。</li>
                          <li>・スキーとビンディングの 小重量 男子750g、女子700g</li>
                          <li>・ミックスビンディングの使用禁止(フロント、リアは同一メーカーであること)</li>
                        </ul>
                      </td>
                      <td class="border text-sm p-2">◯</td>
                      <td class="border text-sm p-2">◯</td>
                      <td class="border text-sm p-2">◯</td>
                    </tr>
                    <tr>
                      <td class="border text-sm p-2">ブーツ</td>
                      <td class="border text-sm p-2">
                        <ul>
                          <li>・クロスカントリースキーブーツおよびビンディングの使用はできません。</li>
                          <li>・18歳以下の選手はフルカーボン構造のブーツの使用はできません</li>
                          <li>・ブーツの 小重量 男子500g、女子とU18男子450g</li>
                        </ul>
                      </td>
                      <td class="border text-sm p-2">◯</td>
                      <td class="border text-sm p-2">◯</td>
                      <td class="border text-sm p-2">◯</td>
                    </tr>
                    <tr>
                      <td class="border text-sm p-2 whitespace-nowrap">スキーストック</td>
                      <td class="border text-sm p-2">
                        <ul>
                          <li>・大直径25mm、非金属バスケット付</li>
                        </ul>
                      </td>
                      <td class="border text-sm p-2">◯</td>
                      <td class="border text-sm p-2">◯</td>
                      <td class="border text-sm p-2">◯</td>
                    </tr>
                    <tr>
                      <td class="border text-sm p-2">スキン</td>
                      <td class="border text-sm p-2">
                        <ul>
                          <li>・野生動物由来のものは使用禁止。スキーの雪面接地長40%以上長さが必要です。</li>
                        </ul>
                      </td>
                      <td class="border text-sm p-2">◯</td>
                      <td class="border text-sm p-2">◯</td>
                      <td class="border text-sm p-2">◯</td>
                    </tr>
                    <tr>
                      <td class="border text-sm p-2">服装 上半身３レイヤー </td>
                      <td class="border text-sm p-2">
                      <ul>
                          <li>・長袖又は半袖1枚 ・長袖レーススーツ１枚</li>
                          <li>・体に合ったウインドブレーカージャケット１枚</li>
                        </ul>
                      </td>
                      <td class="border text-sm p-2">◯</td>
                      <td class="border text-sm p-2">◯</td>
                      <td class="border text-sm p-2">-</td>
                    </tr>
                    <tr>
                      <td class="border text-sm p-2">パンツ 下半身２レイヤー </td>
                      <td class="border text-sm p-2">
                        <ul>
                          <li>・長パンツ又はスキーレーススーツ １枚</li>
                          <li>・ウインドプレーカーパンツ １枚</li>
                        </ul>
                      </td>
                      <td class="border text-sm p-2">◯</td>
                      <td class="border text-sm p-2">◯</td>
                      <td class="border text-sm p-2">-</td>
                    </tr>
                    <tr>
                      <td class="border text-sm p-2">ビーコン<span class="text-red-600">*</span></td>
                      <td class="border text-sm p-2">
                        <ul>
                          <li>・457kHz周波数に準拠し、トリプル受信アンテナが装備 </li>
                        </ul>
                      </td>
                      <td class="border text-sm p-2">◯</td>
                      <td class="border text-sm p-2">-</td>
                      <td class="border text-sm p-2">-</td>
                    </tr>
                    <tr>
                      <td class="border text-sm p-2">ヘルメット<span class="text-red-600">*</span></td>
                      <td class="border text-sm p-2">
                        <ul>
                          <li>・UIAA106およびEN1077規格に準拠、EN12492およびEN1077規格に準拠 </li>
                        </ul>
                      </td>
                      <td class="border text-sm p-2">◯</td>
                      <td class="border text-sm p-2">◯</td>
                      <td class="border text-sm p-2">◯</td>
                    </tr>
                    <tr>
                      <td class="border text-sm p-2">スノーショベル<span class="text-red-600">*</span></td>
                      <td class="border text-sm p-2">
                        <ul>
                          <li>・ショベル 小面積20cm×20cm 小全長50cm </li>
                        </ul>
                      </td>
                      <td class="border text-sm p-2">◯</td>
                      <td class="border text-sm p-2">-</td>
                      <td class="border text-sm p-2">-</td>
                    </tr>
                    <tr>
                      <td class="border text-sm p-2">スノープローブ</td>
                      <td class="border text-sm p-2">
                        <ul>
                          <li>・ 小外径10mm、 小全長240cm</li>
                        </ul>
                      </td>
                      <td class="border text-sm p-2">◯</td>
                      <td class="border text-sm p-2">-</td>
                      <td class="border text-sm p-2">-</td>
                    </tr>
                    <tr>
                      <td class="border text-sm p-2">バックパック</td>
                      <td class="border text-sm p-2">
                        <ul>
                          <li>・必要な装備を収納できる容量でスキーを装着できるもの </li>
                        </ul>
                      </td>
                      <td class="border text-sm p-2">◯</td>
                      <td class="border text-sm p-2">◯</td>
                      <td class="border text-sm p-2">◯</td>
                    </tr>
                    <tr>
                      <td class="border text-sm p-2">サバイバルブランケット<span class="text-red-600">*</span></td>
                      <td class="border text-sm p-2">
                        <ul>
                          <li>・小面積1.8m2 Survival blanket </li>
                        </ul>
                      </td>
                      <td class="border text-sm p-2">◯</td>
                      <td class="border text-sm p-2">◯</td>
                      <td class="border text-sm p-2">-</td>
                    </tr>
                    <tr>
                      <td class="border text-sm p-2">グローブ</td>
                      <td class="border text-sm p-2 whitespace-nowrap">
                        <ul>
                          <li>・手首を覆う長さ</li>
                        </ul>
                      </td>
                      <td class="border text-sm p-2">◯</td>
                      <td class="border text-sm p-2">◯</td>
                      <td class="border text-sm p-2">◯</td>
                    </tr>
                    <tr>
                      <td class="border text-sm p-2">眼鏡保護具</td>
                      <td class="border text-sm p-2">
                        <ul>
                          <li>・ゴーグルGoggles、サングラス</li>
                        </ul>
                      </td>
                      <td class="border text-sm p-2">◯</td>
                      <td class="border text-sm p-2">◯</td>
                      <td class="border text-sm p-2">-</td>
                    </tr>
                  </table>
                  </div>
                  <ul>
                    <li class="text-sm">・スプリントSprintは、ヘルメット、バックパック、グローブのみ必須とします)</li>
                    <li class="text-sm">・ショートカテゴリーについては適用外</li>
                    <li class="text-sm text-red-600">*当大会では規定以外品でも使用可とします</li>
                  </ul>
                  </dd>
              </dl>
              <h2 id="course" class="border-b-2 border-hotaka-900 pt-4 pb-1 mb-4 font-bold md:text-xl sm:text-base">コース</h2>
              <div class="mb-4">
                <p class="font-semibold">■スプリント</p>
                <Image src="/images/race/course_spr.png" width={1900} height={1080} className='' />
              </div>
              <hr />
              <div class="mb-4 pt-2">
                <p class="font-semibold">■インディビジュアル</p>
                <p>Course1 シニア男子</p>
                <p>Distance 14km、 Total Vertical Elevation＋1650m </p>
                <Image src="/images/race/course_ind_sm.png" width={1900} height={1080} className='' />
                <div class="overflow-hidden overflow-x-scroll mb-2">
                <table class="table-auto mx-auto w-full text-xs md:text-base">
                  <tr>
                    <td class="border text-sm p-2 whitespace-nowrap">シニア男子</td>
                    <td class="border text-sm p-2"><span class="text-red-600">START</span>ー①―②―③―⑦―①―②―⑦―③―④―⑤―⑥ー③―⑦―①―②―③―④―③―⑦－①<span class="text-red-600">FINISH</span></td>
                  </tr>
                </table>
                </div>
              </div>
              <div class="mb-4 pt-2">
                <p>Course2 シニア女子Senior Women、ジュニア男女</p>
                <p>Distance 11.5km、 Total Vertical Elevation +1360</p>
                <Image src="/images/race/course_ind_sw.png" width={1900} height={1080} className='' />
                <div class="overflow-hidden overflow-x-scroll mb-2">
                <table class="table-auto mx-auto w-full text-xs md:text-base">
                  <tr>
                    <td class="border text-sm p-2 whitespace-nowrap">シニア女子<br />ジュニア男子</td>
                    <td class="border text-sm p-2"><span class="text-red-600">START</span>ー①―②―③―⑦―①―②―⑦―③―④―⑤―⑥―③―⑦－①－②―③―⑦―①ー<span class="text-red-600">FINISH</span></td>
                  </tr>
                </table>
                </div>
              </div>
              <div class="mb-4 pt-2">
                <p>Course3 ユース男⼦/⼥⼦</p>
                <p>Distance 8.4km、 Total Vertical Elevation +850m</p>
                <Image src="/images/race/course_ind_jmw_ymw.png" width={1900} height={1080} className='' />
                <div class="overflow-hidden overflow-x-scroll mb-2">
                <table class="table-auto mx-auto w-full text-xs md:text-base">
                  <tr>
                    <td class="border text-sm p-2 whitespace-nowrap">ジュニア女子<br />ユース男<br />ユース女</td>
                    <td class="border text-sm p-2"><span class="text-red-600">START</span>ー①―②―③―⑦―①―②―<br />⑦―③―④―③―⑦―①―②―③―⑦―①-<span class="text-red-600">FINISH</span></td>
                  </tr>
                </table>
                </div>
              </div>
              <div class="mb-4 pt-2">
                <p>Course 4 ショート男子/女子</p>
                <p>Distance６km、 Total Vertical Elevation+550m</p>
                <Image src="/images/race/course_ind_shmw.png" width={1900} height={1080} className='' />
                <div class="overflow-hidden overflow-x-scroll mb-2">
                <table class="table-auto mx-auto w-full text-xs md:text-base">
                  <tr>
                    <td class="border text-sm p-2 whitespace-nowrap">ショート男女</td>
                    <td class="border text-sm p-2"><span class="text-red-600">START</span>ー①ー②―③―⑦―①―②―⑦―①―②―③―⑦―①-<span class="text-red-600">FINISH</span></td>
                  </tr>
                </table>
                </div>
              </div>
              <h2 id="entry" class="border-b-2 border-hotaka-900 pt-4 pb-1 mb-4 font-bold md:text-xl sm:text-base">エントリー</h2>
              <dl class="border-b border-dashed border-hotaka-900 py-4 my-4 flex flex-wrap">
                <dt class="w-full sm:w-1/5 pb-2 text-hotaka-900 font-semibold">申し込み方法</dt>
                <dd class="w-full sm:w-4/5 pb-2"><span class="mb-2">モシコムよりお申し込みください。</span><br />
                  <div class="mt-4">
                    <a href="https://moshicom.com/81189/" target="_blank" class="bg-white border border-hotaka-900 hover:bg-hotaka-900 hover:text-white text-hotaka-900 font-bold py-2 px-4 rounded-sm">
                      エントリー
                    </a>
                  </div>
                </dd>
              </dl>
              <dl class="border-b border-dashed border-hotaka-900 py-4 my-4 flex flex-wrap">
                <dt class="w-full sm:w-1/5 pb-2 text-hotaka-900 font-semibold">申込受付期間</dt>
                <dd class="w-full sm:w-4/5 pb-2">2月12日(日)-3月19日(日)</dd>
              </dl>
              <h2 id="rental" class="border-b-2 border-hotaka-900 pt-4 pb-1 mb-4 font-bold md:text-xl sm:text-base">装備品レンタル</h2>
              <dl class="border-b border-dashed border-hotaka-900 py-4 my-4 flex flex-wrap">
                <dt class="w-full sm:w-1/5 pb-2 text-hotaka-900 font-semibold">レンタル</dt>
                <dd class="w-full sm:w-4/5 pb-2">
                  <ul>
                    <li>KATASHINA SKIMO CAMP<br /> 担当：星野　https://katashinaskimocamp.com/ <br /> Mail katashina.skimo@gmail.com</li>
                  </ul>
                </dd>
              </dl>
              <h2 id="access" class="border-b-2 border-hotaka-900 pt-4 pb-1 mb-4 font-bold md:text-xl sm:text-base">宿泊・アクセス</h2>
              <dl class="border-b border-dashed border-hotaka-900 py-4 my-4 flex flex-wrap">
                <dt class="w-full sm:w-1/5 pb-2 text-hotaka-900 font-semibold">宿泊</dt>
                <dd class="w-full sm:w-4/5 pb-2">
                  準備中
                </dd>
              </dl>
              <dl class="border-b border-dashed border-hotaka-900 py-4 my-4 flex flex-wrap">
                <dt class="w-full sm:w-1/5 pb-2 text-hotaka-900 font-semibold">アクセス</dt>
                <dd class="w-full sm:w-4/5 pb-2">
                  群馬県利根郡片品村花咲　オグナほたかスキー場
                </dd>
              </dl>
              <h2 id="info" class="border-b-2 border-hotaka-900 pt-4 pb-1 mb-4 font-bold md:text-xl sm:text-base">その他注意事項 </h2>
              <dl class="border-b border-dashed border-hotaka-900 py-4 my-4 flex flex-wrap">
                <dt class="w-full sm:w-1/5 pb-2 text-hotaka-900 font-semibold">肖像権</dt>
                <dd class="w-full sm:w-4/5 pb-2">
                  本大会出場選手の大会期間中の肖像に関わる権利は大会主催者の管理下にあるものとします。
                </dd>
              </dl>
              <dl class="border-b border-dashed border-hotaka-900 py-4 my-4 flex flex-wrap">
                <dt class="w-full sm:w-1/5 pb-2 text-hotaka-900 font-semibold">返金</dt>
                <dd class="w-full sm:w-4/5 pb-2">
                  お支払いいただいた費用は事情に寄らず返金できない場合がありますのでご了承ください。
                </dd>
              </dl>
              <dl class="border-b border-dashed border-hotaka-900 py-4 my-4 flex flex-wrap">
                <dt class="w-full sm:w-1/5 pb-2 text-hotaka-900 font-semibold">保険</dt>
                <dd class="w-full sm:w-4/5 pb-2">
                  出場者の傷害保険は主催者側で付保しますが、競技中の事故に起因する傷害以外の疾病に対しては責任を負いませんのでご了承ください。
                </dd>
              </dl>
            </div>
            <div class='my-8 w-full md:w-4/5 mx-auto bg-hotaka-50 p-10 rounded-lg'>
              <h2 class="p-6 font-bold md:text-3xl sm:text-base text-center text-hotaka-900">2022年大会</h2>
              <h3 class="py-4 font-bold md:text-xl sm:text-base text-center text-hotaka-900">リザルト</h3>
              <div class="text-center my-8">
              <a href="https://drive.google.com/file/d/1__WIv7jXd7SF8fEMDOY1NsIWrh1NxVPv/view?usp=sharing" class="bg-hotaka-900 text-white px-4 py-2 rounded hover:bg-hotaka-800">Sprint</a>
            </div>
            <div class="text-center my-8">
              <a href="https://drive.google.com/file/d/1exvm9eDYe2cGXn07K094GbNVOIzuoGJ0/view?usp=sharing" class="bg-hotaka-900 text-white px-4 py-2 rounded hover:bg-hotaka-800">Individual</a>
            </div>
              <h3 class="p-6 mb-4 font-bold md:text-xl sm:text-base text-center text-hotaka-900">大会公式フォト</h3>
              <div class='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5'>
                <a href='https://photos.app.goo.gl/2843Pz3ktVpVqJqb7' target="_blank">
                  <div class="bg-20220402-spr-kurahashi w-full bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:opacity-90 transition duration-300 ease-in-out p-4">
                    <div class="px-4 sm:px-6 lg:px-4 flex justify-center items-center grid py-16">
                      <h2 class="text-center text-white text-xl font-bold w-full mb-4">Sprint<br/>倉橋 俊行</h2>
                      <p class="border w-full p-3 text-white text-center font-bold">フォトギャラリー</p>
                    </div>
                  </div>
                </a>
                <a href='https://photos.app.goo.gl/bpHjnQ1t1cQQGC1V8' target="_blank">
                  <div class="bg-20220402-spr-sekiguchi w-full bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:opacity-90 transition duration-300 ease-in-out p-4">
                    <div class="px-4 sm:px-6 lg:px-4 flex justify-center items-center grid py-16">
                      <h2 class="text-center text-white text-xl font-bold w-full mb-4">Sprint<br/>関口 祐司</h2>
                      <p class="border w-full p-3 text-white text-center font-bold">フォトギャラリー</p>
                    </div>
                  </div>
                </a>
                <a href='https://photos.app.goo.gl/cioLLzak5UWEQMPS7' target="_blank">
                  <div class="bg-20220403-ind-kurahashi w-full bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:opacity-90 transition duration-300 ease-in-out p-4">
                    <div class="px-4 sm:px-6 lg:px-4 flex justify-center items-center grid py-16">
                      <h2 class="text-center text-white text-xl font-bold w-full mb-4">Individual<br/>倉橋 俊行</h2>
                      <p class="border w-full p-3 text-white text-center font-bold">フォトギャラリー</p>
                    </div>
                  </div>
                </a>
                <a href='https://photos.app.goo.gl/5gRPL9xFKqtRdY9VA' target="_blank">
                  <div class="bg-20220403-ind-sekiguchi w-full bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:opacity-90 transition duration-300 ease-in-out p-4">
                    <div class="px-4 sm:px-6 lg:px-4 flex justify-center items-center grid py-16">
                      <h2 class="text-center text-white text-xl font-bold w-full mb-4">Individual<br/>関口 祐司</h2>
                      <p class="border w-full p-3 text-white text-center font-bold">フォトギャラリー</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className='mt-8 text-center'>
              <Link href="/">
              <a target="_blank" class="inline-block py-2 text-white bg-gray-900 px-7 hover:bg-gray-800 rounded-lg">SKIMO CAMPホームへ</a>
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </body>
    </>
  )
}

// export const getStaticProps = async () => {
//   const data = await client.get({ endpoint: "test"});
//   console.log(data.contents[0].id)

//   return {
//     props: {
//       test: data.contents[0],
//     }
//   }
// }
