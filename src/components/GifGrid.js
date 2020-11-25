import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

//RENOMBRAMOS LA VARIABLE DATA CON LOS : POR IMAGES
    const { data:images , loading } = useFetchGifs( category );

    // console.log( loading)

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category }</h3>

            {loading && <p className="animate__animated animate__flash">Loading</p>}

            <div className='card-grid'>
                {
                    //ACA LLAMAMOS AL USE STATE PARA TRAER LO REALIZADO EN GETGIFS
                    images.map( img => (
                    <GifGridItem 
                        key= { img.id }
                        { ...img }
                    />                   
                    ))
                }    
            </div>
        </>
    )
}
