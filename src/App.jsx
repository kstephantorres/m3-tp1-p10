import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';
import Formulario from './components/Formulario';
import ListaPeliculas from './components/ListaPeliculas';
import { useState, useEffect } from 'react';


function App() {
  
  const peliculasGuardadas = JSON.parse(localStorage.getItem('peliculas')) || [];
  const [peliculas, setPeliculas] = useState(peliculasGuardadas);


  useEffect(() => {
    localStorage.setItem('peliculas', JSON.stringify(peliculas));
  }, [peliculas]);

  const agregarPelicula = (nuevaPelicula) => {
    setPeliculas([...peliculas, nuevaPelicula]);
  };

  return (
    <Container className="mt-5">
      <h1 className='mb-4 text-center'>🎬Alta de Películas🎬</h1>
      <Row>
        <Col md={6}>
          <Formulario agregarPelicula={agregarPelicula} />
        </Col>
        <Col md={6}>
          <ListaPeliculas peliculas={peliculas} />
        </Col>
      </Row>
    </Container>
  )
}

export default App
