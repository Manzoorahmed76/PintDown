import { useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import AOS from 'aos'
import { Toaster } from 'sonner'
import 'aos/dist/aos.css'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  return (
    <>
      <Head>
        <title>PintDown - Pinterest Video & Image Downloader</title>
        <meta name="description" content="Download Pinterest videos and images easily with PintDown. Free online Pinterest downloader tool." />
        <meta name="keywords" content="pinterest downloader, pinterest video downloader, pinterest image downloader, download pinterest media" />
        <meta name="author" content="Riski Yanda" />
        <link rel="icon" href="https://cdn.botzaku.eu.org/u0su7/_81c130d4-a57e-4294-bbca-4e4d06306ba9.jpeg" />
      </Head>
      <Toaster position="top-center" />
      <Component {...pageProps} />
    </>
  )
}
