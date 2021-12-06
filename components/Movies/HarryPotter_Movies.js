//Componente que renderizará las películas de Harry Potter
export default function HarryPotter({ data_HarryPotter }) {
    return (
        <>
            <h2 className='text-white'>Harry Potter</h2>
            <div className='text-white flex flex-wrap justify-between border-2 border-green-500 w-full'>
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

