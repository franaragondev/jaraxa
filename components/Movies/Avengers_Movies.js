//Componente que renderizará las películas de Los Vengadores
export default function Avengers({ data_Avengers }) {
    return (
        <>
            <h2 className='text-white mt-4 left-0 ml-4'>Las Películas de <i>Los Vengadores</i></h2>
            <div className='text-white flex flex-wrap justify-between w-full'>
                {
                    data_Avengers.Search.map(
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

