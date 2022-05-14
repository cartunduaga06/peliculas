//navi
import { Navigate } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { Redirect, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import swalert from '@sweetalert/with-react'

function Listado() {
  let token = sessionStorage.getItem("token");

    const [peliculas, setPeliculas] = useState([]);
  useEffect(() => {
    const endPoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=4634b588d98f301027cf47738296cdb7&language=es-ES&page=1";
    axios.get(endPoint).then((res) => {
      const apiData = res.data;
      setPeliculas(apiData.results);
    })
    .catch(err => {
        swalert(<h2>Hubo errores, intenta más tarde</h2>)
        });
  }, [setPeliculas]);

  

  return (
    <>
      {!token && <Navigate to="/" />}

      <div className="row">
        {/*estructur basica*/}

        {
            peliculas.map((movie, idx) => {
                return (
                    <div className="col-3" key={idx}>
                    <div className="card"  >
                      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">
                          {movie.overview.substring(0, 100)}
                        </p>
                        <Link to={`/detalle?movieId=${movie.id}`} className="btn btn-primary">
                          Ver detalle
                        </Link>
                      </div>
                    </div>
                  </div>
                )})
        }
        
      </div>
    </>
  );
}

export default Listado;
