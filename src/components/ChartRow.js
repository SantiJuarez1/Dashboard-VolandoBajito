import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.Location}</td>
                    <td>{props.Average}</td>
                    <td>{props.Ratings}</td>
                </tr>
            )
    }
    
        

export default ChartRow;