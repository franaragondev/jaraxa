import Head from 'next/head'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import StarWars_Movies from '../components/Movies/StarWars_Movies'
import HarryPotter from '../components/Movies/HarryPotter_Movies'
import Avengers from '../components/Movies/Avengers_Movies'

export default function Home({ data_StarWars, data_HarryPotter, data_Avengers }) {
  return (
    <div className="bg-bg min-h-screen py-2">
      <Head>
        <title>Página de inicio - Jaraxa</title>
        <link rel="icon" href="/logo/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col w-full">
        <Banner />
        <StarWars_Movies data_StarWars={data_StarWars} />
        <HarryPotter data_HarryPotter={data_HarryPotter} />
        <Avengers data_Avengers={data_Avengers}/>
      </main>

      {/* <footer className="flex items-center justify-center w-full h-24 border-t">

      </footer> */}
    </div>
  )
}

//Consume API para obtener películas
export async function getStaticProps() {
  try {
    const res_StarWars = await fetch(`http://www.omdbapi.com/?s=wars&&type=movie&apikey=86843cb5`)
    const res_HarryPotter = await fetch(`http://www.omdbapi.com/?s=harry potter&type=movie&apikey=86843cb5`)
    const res_Avengers = await fetch(`http://www.omdbapi.com/?s=avengers&type=movie&apikey=86843cb5`)
    const data_StarWars = await res_StarWars.json()
    const data_HarryPotter = await res_HarryPotter.json()
    const data_Avengers = await res_Avengers.json()
    return {
      props: {
        data_StarWars,
        data_HarryPotter,
        data_Avengers
      }
    }
  } catch (error) {
    console.log(error);
  }
}