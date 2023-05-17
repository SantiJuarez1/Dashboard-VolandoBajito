import React from 'react';
import imagenFondo from '../assets/images/elmonje.jpg';

function LastDestinyInDb(){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                <h5 class="m-0 font-weight-bold text-gray-800">Last Product in Data Base</h5>                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Amsterdam "/>
                    </div>
                    <h2>Parque Nacional Talampaya - La Rioja</h2>
                    <p>En la región centro-oeste de la provincia de La Rioja, el área conserva importantes riquezas geológicas y paleontológicas pero también una muestra representativa de la ecorregión del Monte de Sierras y Bolsones con sus plantas y animales.</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View product detail</a>
                </div>
            </div>
        </div>
    )
}

export default LastDestinyInDb;
