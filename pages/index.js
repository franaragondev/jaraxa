import Head from 'next/head'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import StarWars_Movies from '../components/Movies/StarWars_Movies'
import HarryPotter from '../components/Movies/HarryPotter_Movies'
import Avengers from '../components/Movies/Avengers_Movies'
import Christmas from '../components/Movies/Christmas_Movies'

export default function Home({ data_StarWars, data_HarryPotter, data_Avengers, data_Christmas, data_Christmas2, data_Christmas3 }) {
  return (
    <div className="bg-bg min-h-screen py-2">
      <Head>
        <title>Página de inicio - Jaraxa</title>
        <link rel="icon" href="/logo/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col justify-center w-full">
        <Banner />
        <Christmas data_Christmas={data_Christmas} data_Christmas2={data_Christmas2} data_Christmas3={data_Christmas3} />
        <StarWars_Movies data_StarWars={data_StarWars} />
        <HarryPotter data_HarryPotter={data_HarryPotter} />
        <Avengers data_Avengers={data_Avengers} />
      </main>
      <Footer />
    </div>
  )
}

//Consume API para obtener películas
export async function getStaticProps() {
  try {
    const res_StarWars = await fetch(`http://www.omdbapi.com/?s=wars&&type=movie&apikey=86843cb5`)
    const res_HarryPotter = await fetch(`http://www.omdbapi.com/?s=harry+potter&type=movie&apikey=86843cb5`)
    const res_Avengers = await fetch(`http://www.omdbapi.com/?s=avengers&type=movie&apikey=86843cb5`)
    const res_Christmas = await fetch(`http://www.omdbapi.com/?s=christmas&plot=full&type=movie&apikey=86843cb5`)
    const res_Christmas2 = await fetch(`http://www.omdbapi.com/?s=christmas&plot=full&type=movie&apikey=86843cb5&page=2`)
    const res_Christmas3 = await fetch(`http://www.omdbapi.com/?s=christmas&plot=full&type=movie&apikey=86843cb5&page=3`)
    const data_StarWars = await res_StarWars.json()
    const data_HarryPotter = await res_HarryPotter.json()
    const data_Avengers = await res_Avengers.json()
    const data_Christmas = await res_Christmas.json()
    const data_Christmas2 = await res_Christmas2.json()
    const data_Christmas3 = await res_Christmas3.json()
    return {
      props: {
        data_StarWars,
        data_HarryPotter,
        data_Avengers,
        data_Christmas,
        data_Christmas2,
        data_Christmas3
      }
    }
  } catch (error) {
    console.log(error);
  }
}