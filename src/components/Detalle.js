import {Navigate } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import axios from 'axios';
import swalert from '@sweetalert/with-react'

function Detalle() {
    let token = sessionStorage.getItem("token");

    let query = new URLSearchParams(window.location.search);
    let movieId = query.get("movieId");


    useEffect(() => {

      

        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=4634b588d98f301027cf47738296cdb7&language=es-ES`)
            .then(res => {
                const apiData = res.data;
                
            })
        .catch(err => {
            swalert(<h2>Hubo errores, intenta más tarde</h2>)
            });
    }, [movieId]);


    return (
        

        <>
        {!token && <Navigate to="/" />}

        <h2> Detalle de la pelicula </h2>
        <div className="row">
            <div className='col-4'>
                imagen
            </div>
            <div className='col-8'>
                <h5>Título </h5>
                <h5> Fecha de estreno</h5>
                <h5> Reseña</h5>
                <p> lorem    </p>
                <ul>
                    <li>
                        Genero 1
                    </li>
                </ul>
                

                </div>
                </div>
        
        </>
        
    )       
}

export default Detalle;