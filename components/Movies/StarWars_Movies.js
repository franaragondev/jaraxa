//Componente que renderizará las películas de Star Wars
export default function StarWars({ data_StarWars }) {
    return (
        <>
            <h2 className='text-white'>Star Wars</h2>
            <div className='text-white flex flex-wrap justify-between border-2 border-green-500 w-full'>
                {
                    data_StarWars.Search.map(
                        movie =>
                            <div className='border-2 border-red-700 w-2/7 h-60 m-2'>
                                <img className='object-cover h-full w-full' src={movie.Poster} />
                            </div>
                    )
                }
            </div>
        </>
    )
}

