import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';

function App() {

  // State de la App
  const [ busqueda, guardarBusqueda ] = useState('');
  const [ imagenes, guardarImagenes ] = useState([]);
  const [ paginaactual, guardarPaginaActual ] = useState(1);
  const [ totalpaginas, guardarTotalPaginas ] = useState(1);

  useEffect(() => {    
    const consultarAPI = async () => {
      if (busqueda === '') return;

      const imagenesPorPagina = 30;
      const key = '1332365-69b84816140672790be2f698a';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaactual}`;

      const respuesta = await fetch(url); 
      const resultado = await respuesta.json();

      guardarImagenes(resultado.hits);
      
      // Calcular el total de paginas
      const calcularTotalPaginas = Math.ceil( resultado.totalHits / imagenesPorPagina )

      guardarTotalPaginas(calcularTotalPaginas);

      //Mover la pagina hasta arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: 'smooth'})
    }
    consultarAPI();

  }, [busqueda, paginaactual])


  //Definir pagina anterior
  const paginaAnterior = () => {
    const pagina = paginaactual - 1;

    if (pagina === 0) return;

    guardarPaginaActual(pagina);
  }


  //Definir pagina Siguiente
  const paginaSiguiente = () => {

    const pagina = paginaactual + 1;

    if ( pagina > totalpaginas ) return;

    guardarPaginaActual(pagina);

  }



  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imágenes</p>

        <Formulario 
          guardarBusqueda={guardarBusqueda}
        />
        
      </div>
      <div className="row justify-content-center mb-5">

        <ListadoImagenes 
            imagenes={imagenes}
        />

        { (paginaactual === 1) ? null : (
          <button 
            className="btn btn-lg btn-info mr-1"
            onClick={paginaAnterior}
          >&laquo; Anterior</button>
        )}

        { ( paginaactual === totalpaginas ) ? null : (
          <button 
            className="btn btn-lg btn-info ml-1"
            onClick={paginaSiguiente}
          >Siguiente &raquo;</button>
        )}
        

      </div>      
    </div>
  )
}

export default App
