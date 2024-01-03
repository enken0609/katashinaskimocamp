import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <>
      <footer class="bg-gray-900 bottom-0">
        <div class="flex flex-wrap justify-start py-4">
          <div class="my-auto flex flex-wrap">
            <div class="mx-4 my-auto">
              <p class="text-white font-bold">FOLLOW US</p>
            </div>
            <div class="mr-4 my-auto mt-2">
              <Link href="https://www.instagram.com/katashina_skimo_camp/">
                <a target="_blank"><Image src="/images/ig_white.png" width={20} height={20}/></a>
              </Link>
            </div>
            <div class="mr-4 my-auto mt-2">
              <Link href="https://www.facebook.com/KatashinaSkimoCamp">
                <a target="_blank"><Image src="/images/fb_white.png" width={20} height={20}/></a>
              </Link>
            </div>
          </div>
        </div>
        <hr class="mx-4"/>
        <p class="text-white font-bold ml-4 pt-4">RELATED LINKS</p>
        <div class="mx-4 flex flex-wrap justify-start py-4 text-white text-xs">
          <Link href="https://katashina-mountains-series.com/">
            <a class="mr-4 mb-2" target="_blank">KATASHINA MOUNTAINS SERIES</a>
          </Link>
          <Link href="https://hotaka-skyrun.com/">
            <a class="mr-4 mb-2" target="_blank">HOTAKA SKY RUN</a>
          </Link>
          <Link href="https://shirane-ascent.com/">
            <a class="mr-4 mb-2" target="_blank">SHIRENE ASCENT</a>
          </Link>
          <Link href="https://ozeiwakura-skyvalley.com/">
            <a class="mr-4 mb-2" target="_blank">OZEIWAKURA SKYVALLEY</a>
          </Link>
          <Link href="https://oze-nationalpark-marathon.com/">
            <a class="mr-4 mb-2" target="_blank">OZW NATIONALPARK MOUNTAIN MARATHON</a>
          </Link>
          <Link href="https://katashina-snowrunning.com/">
            <a class="mr-4 mb-2" target="_blank">KATASHINA SNOWRUNNING</a>
          </Link>
        </div>
        <p class="p-4 text-white text-center text-xs">© KATASHINA SKIMO CAMP</p>
      </footer>
    </>
  )
}
