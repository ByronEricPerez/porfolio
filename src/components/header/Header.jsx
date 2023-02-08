import prueba2 from './prueba 2.jpeg'

function Header() {
    return (
      <div className="header_container">
        <img src={prueba2} alt="image" className='header_image'/>
        <div className="header_title">
          <h1>Titulo de la pagina</h1>
        </div>
      </div>
    );
  }
  
  export default Header;