//Página que renderizará todas las películas de navidad
import Head from 'next/head'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Christmas from '../../components/Movies/Christmas/AllChristmas_Movies'

export default function Home({ data_Christmas, data_Christmas2, data_Christmas3 }) {
  return (
    <div className="bg-bg min-h-screen py-2">
      <Head>
        <title>Página de inicio - Jaraxa</title>
        <link rel="icon" href="/logo/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col justify-center w-full">
        <Christmas data_Christmas={data_Christmas} data_Christmas2={data_Christmas2} data_Christmas3={data_Christmas3} />
      </main>
      <Footer />
    </div>
  )
}

//Consume API para obtener películas
export async function getStaticProps() {
  try {
    const res_Christmas = await fetch(`http://www.omdbapi.com/?s=christmas&plot=full&type=movie&apikey=86843cb5`)
    const res_Christmas2 = await fetch(`http://www.omdbapi.com/?s=christmas&plot=full&type=movie&apikey=86843cb5&page=2`)
    const res_Christmas3 = await fetch(`http://www.omdbapi.com/?s=christmas&plot=full&type=movie&apikey=86843cb5&page=3`)
    const data_Christmas = await res_Christmas.json()
    const data_Christmas2 = await res_Christmas2.json()
    const data_Christmas3 = await res_Christmas3.json()
    return {
      props: {
        data_Christmas,
        data_Christmas2,
        data_Christmas3
      }
    }
  } catch (error) {
    console.log(error);
  }
}