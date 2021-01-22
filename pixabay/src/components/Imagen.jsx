import React from 'react'

const Imagen = ({ imagen }) => {

    //Extraer las variables
    const { largeImageURL, likes, previewURL, tags, views } = imagen;


    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top"/>

                <div className="card-body">
                    <p className="card-text column text-center"><i className="bi bi-heart-fill text-center"></i> {likes}</p>
                    <p className="card-text text-center"><i className="bi bi-binoculars-fill text-center"></i> {views}</p>
                </div>

                <div className="card-footer">
                    <a 
                        href={largeImageURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary column text-center"
                    
                    >Ver Imagen <i className="bi bi-box-arrow-up-right text-center"></i></a>
                </div>

            </div>
        </div>
     );
}
 
export default Imagen;