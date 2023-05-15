import React from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        Location: 'Parque Nacional Nahuel Huapi - Rio Negro',
        Description: 'lorem ipsum',
        Price:'1200',
    },
    {
        Location: 'Caminito - La Boca',
        Description: 'lorem ipsum',
        Price:'1200',
    },
    {
        Location: 'Jardin Japones - Buenos Aires',
        Description: "lorem ipsum",
        Price:'1200',
    },
    {
        Location: 'Jardin Japones - Buenos Aires',
        Description: "lorem ipsum",
        Price:'1200',
    },
    {
        Location: 'Jardin Japones - Buenos Aires',
        Description: "lorem ipsum",
        Price:'1200',
    },
    {
        Location: 'Jardin Japones - Buenos Aires',
        Description: "lorem ipsum",
        Price:'1200',
    },
    {
        Location: 'Jardin Japones - Buenos Aires',
        Description: "lorem ipsum",
        Price:'1200',
    },
    {
        Location: 'Jardin Japones - Buenos Aires',
        Description: "lorem ipsum",
        Price:'1200',
    },
    {
        Location: 'Jardin Japones - Buenos Aires',
        Description: "lorem ipsum",
        Price:'1200',
    },
    {
        Location: 'Jardin Japones - Buenos Aires',
        Description: "lorem ipsum",
        Price:'1200',
    },
    {
        Location: 'Jardin Japones - Buenos Aires',
        Description: "lorem ipsum",
        Price:'1200',
    },
    {
        Location: 'Jardin Japones - Buenos Aires',
        Description: "lorem ipsum",
        Price:'1200',
    },
    {
        Location: 'Jardin Japones - Buenos Aires',
        Description: "lorem ipsum",
        Price:'1200',
    },
    {
        Location: 'Jardin Japones - Buenos Aires',
        Description: "lorem ipsum",
        Price:'1200',
    },
    {
        Location: 'Jardin Japones - Buenos Aires',
        Description: "lorem ipsum",
        Price:'1200',
    },
    {
        Location: 'Jardin Japones - Buenos Aires',
        Description: "lorem ipsum",
        Price:'1200',
    },
    {
        Location: 'Jardin Japones - Buenos Aires',
        Description: "lorem ipsum",
        Price:'1200',
    },
    {
        Location: 'Jardin Japones - Buenos Aires',
        Description: "lorem ipsum",
        Price:'1200',
    },
    {
        Location: 'Jardin Japones - Buenos Aires',
        Description: "lorem ipsum",
        Price:'1200',
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
                                <th>Location</th>
                                <th>Description</th>
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