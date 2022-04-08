import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import Homepage from '../components/Homepage'

export default function Home(props) {
  
  return <>
    <Head>
      <link rel='icon' href='/favicon.ico' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content='ecommerce site created using Next JS, Commerce JS & Stripe' />
      <title>Neco Fashion</title>

    </Head>
      <Homepage {...props} />
  </>
}
