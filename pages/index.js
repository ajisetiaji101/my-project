import Head from 'next/head'
import Firstmenu from '../components/Firstmenu'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Restaurant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Firstmenu />
    </div>
  )
}
