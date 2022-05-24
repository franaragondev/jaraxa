//Componente que renderizará las películas de Star Wars
import React, { useState } from 'react'
import { Modal, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';

//Estilos del modal
const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        width: 400,
        backgroundColor: 'white',
        border: '2px solid #000',
        borderRadius: '15px',
        boxShadow: theme.shadows[5],
        padding: '16px 32px 24px',
        top: '-30%',
        left: '50%',
        transform: 'translate(-50%, 50%)'

    }
}))

export default function StarWars({ data_StarWars }) {
    const styles = useStyles()
    const [modal, setModal] = useState(false)
    const [title, setTitle] = useState('')
    const [type, setType] = useState('')
    const [year, setYear] = useState('')
    const [poster, setPoster] = useState('')

    //Cerrará y abrirá el modal al clicar una película
    const abrirCerrarModal = (title, poster, type, year) => {
        setTitle(title)
        setType(type)
        setYear(year)
        setPoster(poster)
        setModal(!modal)
    }

    //Body del modal
    const body = () => (
        <div className={styles.modal}>
            <div align='center'>
                <Button className='left-44' onClick={() => abrirCerrarModal()}><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></Button>
                <img src={poster} />
                <h2 className='mt-2'><strong><i>{title}</i></strong></h2>
                <h2>{year}</h2>
            </div>
        </div>
    )
    return (
        <>
            <h2 className='text-white mt-4 left-0 ml-4'>Las Películas de <i>Star Wars</i></h2>
            <div className='text-white flex flex-wrap justify-around w-full'>
            <Modal open={modal} onClose={abrirCerrarModal}>{body()}</Modal>
                {
                    data_StarWars.Search.map(
                        movie =>
                            <div onClick={() => abrirCerrarModal(movie.Title, movie.Poster, movie.Type, movie.Year)} className='card-zoom cursor-pointer'>
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

