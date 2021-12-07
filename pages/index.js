import Head from 'next/head'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import StarWars_Movies from '../components/Movies/StarWars/StarWars_Movies'
import HarryPotter from '../components/Movies/HarryPotter/HarryPotter_Movies'
import Avengers from '../components/Movies/Avengers/Avengers_Movies'
import Christmas from '../components/Movies/Christmas/Christmas_Movies'
import Swal from 'sweetalert2';

//Popup que avisa al usuario que la funcionalidad no está disponible
function message() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡Funcionalidad No Disponible!'
    })
}

export default function Home({ data_StarWars, data_HarryPotter, data_Avengers, data_Christmas }) {
  return (
    <div className="bg-bg min-h-screen py-2">
      <Head>
        <title>Página de inicio - Jaraxa</title>
        <link rel="icon" href="/logo/favicon.ico" />
      </Head>
      <Header message={message} />
      <main className="flex flex-col justify-center w-full">
        <Banner />
        <Christmas data_Christmas={data_Christmas} />
        <StarWars_Movies data_StarWars={data_StarWars} />
        <HarryPotter data_HarryPotter={data_HarryPotter} />
        <Avengers data_Avengers={data_Avengers} />
      </main>
      <Footer message={message} />
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
    const data_StarWars = await res_StarWars.json()
    const data_HarryPotter = await res_HarryPotter.json()
    const data_Avengers = await res_Avengers.json()
    const data_Christmas = await res_Christmas.json()
    return {
      props: {
        data_StarWars,
        data_HarryPotter,
        data_Avengers,
        data_Christmas
      }
    }
  } catch (error) {
    console.log(error);
  }
}