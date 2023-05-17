import React from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        Name: 'Misiones',
        Location: 'Misiones, Argentina',
        Price:'30.000',
    },
    {
        Name: 'Cordoba',
        Location: 'Cordoba, Argentina',
        Price:'20.000',
    },
    {
        Name: 'Mendoza',
        Location: 'Mendoza Argentina',
        Price:'25.000',
    },
    {
        Name: 'Mar del Plata',
        Location: 'Buenos Aires, Argentina',
        Price:'18.000',
    },
    {
        Name: 'Bariloche',
        Location: 'Rio Negro, Argentina',
        Price:'35.000',
    },
    {
        Name: 'Salta',
        Location: 'Salta, Argentina',
        Price:'29.000',
    },
    {
        Name: 'Jousten Hotel',
        Location: 'Buenos Aires, Argentina',
        Price:'12.000',
    },
    {
        Name: 'Hotel Salta',
        Location: 'Salta, Argentina',
        Price:'8.600',
    },
    {
        Name: 'Hotel Mendoza',
        Location: 'Mendoza, Argentina',
        Price:'9.500',
    },
    {
        Name: 'Edelweiss',
        Location: 'Rio Negro, Argentina',
        Price:'8.800',
    },
    {
        Name: 'Exe Hotel Cataratas',
        Location: 'Misiones, Argentina',
        Price:'9.500',
    },
    {
        Name: 'Gran Panamericano',
        Location: 'Buenos Aires, Argentina',
        Price:'12.000',
    },
    {
        Name: 'Caminito',
        Location: 'Buenos Aires, Argentina',
        Price:'1.200',
    },
    {
        Name: 'Jardin Japones',
        Location: 'Buenos Aires, Argentina',
        Price:'1.500',
    },
    {
        Name: 'Aconcagua',
        Location: 'Mendoza, Argentina',
        Price:'3.500',
    },
    {
        Name: 'Parque Nacional Nahuel Huapi',
        Location: 'Rio Negro, Argentina',
        Price:'6.800',
    },
    {
        Name: 'Buenos Aires Centro',
        Location: 'Buenos Aires, Argentina',
        Price:'3.200',
    },
    {
        Name: 'Glaciar Perito Moreno',
        Location: 'Santa Cruz, Argentina',
        Price:'8.200',
    },
    {
        Name: 'Parque Nacional Talampaya',
        Location: 'La Rioja, Argentina',
        Price:'5.600',
    },
    
]


function Chart (){
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <h2 class="tableTitle">Total Products</h2>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;