import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 bottom-0">
        <div className="flex flex-wrap justify-start py-4">
          <div className="my-auto flex flex-wrap">
            <div className="mx-4 my-auto">
              <p className="text-white font-bold">FOLLOW US</p>
            </div>
            <div className="mr-4 my-auto mt-2">
              <Link href="https://www.instagram.com/katashina_skimo_camp/">
                <Image src="/images/ig_white.png" width={20} height={20}/>
              </Link>
            </div>
            <div className="mr-4 my-auto mt-2">
              <Link href="https://www.facebook.com/KatashinaSkimoCamp">
                <Image src="/images/fb_white.png" width={20} height={20}/>
              </Link>
            </div>
          </div>
        </div>
        <hr className="mx-4"/>
        <p className="text-white font-bold ml-4 pt-4">RELATED LINKS</p>
        <div className="mx-4 flex flex-wrap justify-start py-4 text-white text-xs">
          <Link href="https://katashina-mountains-series.com/" className="mr-2 mb-2">
            KATASHINA MOUNTAINS SERIES
          </Link>
          <Link href="https://hotaka-skyrun.com/" className="mr-2 mb-2">
            HOTAKA SKY RUN
          </Link>
          <Link href="https://shirane-ascent.com/" className="mr-2 mb-2">
            SHIRENE ASCENT
          </Link>
          <Link href="https://ozeiwakura-skyvalley.com/" className="mr-2 mb-2">
            OZEIWAKURA SKYVALLEY
          </Link>
          <Link href="https://oze-nationalpark-marathon.com/" className="mr-2 mb-2">
            OZW NATIONALPARK MOUNTAIN MARATHON
          </Link>
          <Link href="https://katashina-snowrunning.com/" className="mr-2 mb-2">
            KATASHINA SNOWRUNNING
          </Link>
        </div>
        <p className="p-4 text-white text-center text-xs">© KATASHINA SKIMO CAMP</p>
      </footer>
    </>
  )
}
