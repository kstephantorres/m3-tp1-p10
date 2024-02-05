import { Card } from "react-bootstrap";

const ListaPeliculas = ({ peliculas }) => {
    return (
        <div>
        {peliculas.map((pelicula) => (
          <Card key={pelicula.nombre} className="my-3">
            <Card.Body>
              <Card.Title>{pelicula.nombre}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{pelicula.genero}</Card.Subtitle>
              <Card.Text>{pelicula.descripcion}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
};

export default ListaPeliculas;