import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({ guardarBusqueda }) => {

    const [ termino, guardarTermino ] = useState('');
    const [ error, guardarError ] = useState(false);

    const buscarImagenes = e => {
        e.preventDefault();

        //Validar
        if(termino.trim() == 0) {
            guardarError(true);
            return;
        }
        guardarError(false);

        //Enviar el termino de busqueda
        guardarBusqueda(termino);
    }


    return ( 
        <form 
            onSubmit={buscarImagenes}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Buscar ej: cafe, persona, etc"
                        onChange={ e => guardarTermino( e.target.value ) }
                    />
                </div>
                <div className="form-group col-md-2">
                    {/* <input 
                        type="submit"
                        className="btn btn-primary btn-block"
                        value="Buscar"
                    /> */}
                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        >Buscar
                    </button>
                </div>
            </div>

            { error ? <Error mensaje="Debe ingresar un texto" /> : null }
        </form>
     );
}

Formulario.propTypes = {
    guardarBusqueda: PropTypes.func.isRequired
}
 
export default Formulario;