//Componente que renderizará las películas de Los Vengadores
export default function Avengers({ data_Avengers }) {
    return (
        <>
            <h2 className='text-white'>Los Vengadores</h2>
            <div className='text-white flex flex-wrap justify-between border-2 border-green-500 w-full'>
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

