import {Link} from 'react-router-dom';

function Header() {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <img src="https://www.alkemy.org/wp-content/uploads/2018/10/logo-alkemy-white.png" alt="logo" />
       <div className="container-fluid">
    <a className="navbar-brand" href="/">AlkeFlix</a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
        <Link to="/listado" className="nav-link" >Listado</Link>
        <a className="nav-link" to="">Pricing</a>
        <a className="nav-link disabled">Disabled</a>
      </div>
    </div>
    <button type="button" class="btn btn-danger">Cerrar sesion</button>

  </div>
</nav>

        

       
    );
    
}

export default Header;