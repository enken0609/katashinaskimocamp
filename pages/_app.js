import 'tailwindcss/tailwind.css'
import { DefaultSeo } from 'next-seo';
import NextNProgress from 'nextjs-progressbar';

import React from 'react'
import usePageView from '../hooks/usePageView'
import GoogleAnalytics from '../components/GoogleAnalytics'

function MyApp({ Component, pageProps }) {

  usePageView()

  return (
    <>
      <DefaultSeo
        defaultTitle='KATASHINA SKIMO CAMP'
        titleTemplate = '%s | KATASHINA SKIMO CAMP'
        canonical='https://katashinaskimocamp.com'
        description='群馬県片品村でSKIMO CAMPを開催します。片品村の豊富な積雪、パウダースノーでスキーモを楽しみませんか？スキーモとはスキーマウンテニアリング(Ski Mountaineering=山岳スキー)の略です。スキーモは雪上のトレラン・スカイランです。シールと呼ばれる滑り止めを板の裏に貼り雪山を登り、シールを剥がして降ります。初めての方でもぜひチャレンジしてみてください。'
        openGraph={{
          type: 'website',
          title: 'KATASHINA SKIMO CAMP',
          description: '群馬県片品村でSKIMO CAMPを開催します。片品村の豊富な積雪、パウダースノーでスキーモを楽しみませんか？スキーモとはスキーマウンテニアリング(Ski Mountaineering=山岳スキー)の略です。スキーモは雪上のトレラン・スカイランです。シールと呼ばれる滑り止めを板の裏に貼り雪山を登り、シールを剥がして降ります。初めての方でもぜひチャレンジしてみてください。',
          site_name: 'KATASHINA SKIMO CAMP',
          url: 'https://katashinaskimocamp.com',
          images: [
              {
                url: 'https://katashinaskimocamp.com/_next/image?url=%2Fimages%2Flogo.png&w=3840&q=75',
                width: 700,
                height: 400,
                alt: 'katashina skimo camp',
              }
          ],
        }}
        />
      <GoogleAnalytics />
      <NextNProgress
        color="#ee1a41"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
