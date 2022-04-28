
import axios from 'axios';

import swalert from '@sweetalert/with-react'

function Login(){

    swalert({
        title: 'Login',
        text: 'Login',
        icon: 'info',
        buttons: true,
        dangerMode: true,
    })

    const submithandler = e => {
        e.preventDefault();
        let regexEmail  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        if(email === '' || password === '') {
           swalert({   
                title: 'Error',
                text: 'Please fill all the fields',
                icon: 'error',
                buttons: true,
                dangerMode: true,
            })

            
            return
        } 
    
        if(!regexEmail.test(email)) {
            alert('Por favor ingrese un email valido');
            return
        
        } 
    
        if(email !== 'challenge@alkemy.org' || password !== 'react') {
            alert('Por favor ingrese un usuario y contraseña validos');
            return
        } 
        
        console.log("estamos listos para enviar la información");
        axios
            .post('http://challenge-react.alkemy.org',{email, password})
            .then(res => { 
                console.log(res.data);
               
            })
    
        }
    
    return (
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
    );
}

export default Login;