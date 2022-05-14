
import axios from 'axios';

import swalert from '@sweetalert/with-react'
import { Navigate  } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';


const swal = swalert();
function Login(){

    let history = useNavigate();
   
    const submithandler = e => {
        e.preventDefault();
        let regexEmail  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        if(email === '' || password === '') {
           swal({   
                title: 'Error',
                text: 'Por favor llene todos los campos',
                icon: 'error',
                buttons: true,
                dangerMode: true,
            })

            
            return
        } 
    
        if(!regexEmail.test(email)) {
            swalert({
                title: 'Error',
                text: 'Por favor ingrese un email valido',
                icon: 'error',
                buttons: true,
                dangerMode: true,
            })
           
            return
        
        } 
    
        if(email !== 'challenge@alkemy.org' || password !== 'react') {
            
            swalert(<h2>correo o contraseña incorrecta </h2>)
            return
        } 
        
        console.log("estamos listos para enviar la información");
        axios
            .post('http://challenge-react.alkemy.org',{email, password})
            .then(res => { 
                swalert(<h2>Perfecto, ingresaste correctamente</h2>)
                sessionStorage.setItem('token', res.data.token);
                // permite redireccionar a la ruta
                

                
                
               
            })
    
        }
    

        let token = sessionStorage.getItem("token");

    return (

        <>
        { token && <Navigate to="/listado"/>}

        <div className="login">
            <div className="login-form">
                <div className="login-form-header">
                    <h1>Login</h1>
                    <h2>Formulario</h2>
                </div>
                <div className="login-form-body">
                    <form onSubmit={submithandler}>
                        <div className="login-form-input">
                            <label htmlFor="username">
                              <span>Username</span>  </label>
                            <input type="email" id="email" name="email" placeholder="Username" />
                        </div>
                        <br />
                        <div className="login-form-input">
                            <label htmlFor="password">
                                <span>password</span> </label>
                            <input type="password" id="password" name="password" placeholder="Password" />
                        </div>
                        <br />
                        <div className="login-form-input">
                            <button type="submit">Ingresar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default Login;