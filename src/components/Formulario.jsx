import { useState } from "react";

const Formulario = ({ agregarPelicula }) => {
    const [pelicula, setPelicula] = useState({
        nombre: '',
        descripcion: '',
        genero: 'comedia',
      });
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPelicula({
          ...pelicula,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        agregarPelicula(pelicula);
        setPelicula({
          nombre: '',
          descripcion: '',
          genero: 'comedia',
        });
      };
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                Nombre:
                </label>
                <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                value={pelicula.nombre}
                onChange={handleInputChange}
                required
                minLength={1}
                maxLength={204}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">
                Descripción:
                </label>
                <textarea
                className="form-control"
                id="descripcion"
                name="descripcion"
                value={pelicula.descripcion}
                onChange={handleInputChange}
                required
                maxLength={500}
                minLength={5}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="genero" className="form-label">
                Género:
                </label>
                <select
                className="form-select"
                id="genero"
                name="genero"
                value={pelicula.genero}
                onChange={handleInputChange}
                required
                >
                <option value="comedia">Comedia</option>
                <option value="drama">Drama</option>
                <option value="infantil">Infantil</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">
                Enviar
            </button>
        </form>
    );
};

export default Formulario;