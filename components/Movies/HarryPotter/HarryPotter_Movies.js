//Componente que renderizará las películas de Harry Potter
export default function HarryPotter({ data_HarryPotter }) {
    return (
        <>
            <h2 className='text-white mt-4 left-0 ml-4'>Las Películas de <i>Harry Potter</i></h2>
            <div className='text-white flex flex-wrap justify-around w-full'>
                {
                    data_HarryPotter.Search.map(
                        movie =>
                            <div className='card-zoom cursor-pointer'>
                                <div className='card-zoom-image' style={{
                                    backgroundImage: `url("${movie.Poster}")`
                                }}>
                                </div>
                            </div>
                    )
                }
            </div>
        </>
    )
}

