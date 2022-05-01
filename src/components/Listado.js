
//navi
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Listado(){

    let navigate = useNavigate(); 

   

    if(localStorage.getItem('token')===null){
        return < Navigate to='/' />
    }
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Listado de peliculas</h1>
                </div>
            </div>
            </div>
    )

}

export default Listado;