import Head from 'next/head'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'

export default function Home() {
  return (
    <div className="bg-bg min-h-screen py-2">
      <Head>
        <title>Página de inicio - Jaraxa</title>
        <link rel="icon" href="/logo/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <Banner />
      </main>

      {/* <footer className="flex items-center justify-center w-full h-24 border-t">

      </footer> */}
    </div>
  )
}
