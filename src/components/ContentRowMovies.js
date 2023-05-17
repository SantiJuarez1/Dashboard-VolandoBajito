import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Total products --> */

let totalProducts = {
    title: 'Total Products',
    color: 'primary', 
    cuantity: 19,
    icon: 'fas fa-shopping-cart fa-2x text-gray-300'
}

/* <!-- Total Users --> */

let totalRatings = {
    title:' Total Users', 
    color:'warning', 
    cuantity: '3',
    icon:'fas fa-users fa-2x text-gray-300'
}

/* <!-- Total Categories --> */

let totalSales = {
    title:'Total Categories' ,
    color:'secondary',
    cuantity:'3',
    icon:'fas fa-clipboard-list fa-2x text-gray-300'
}

let cartProps = [totalProducts, totalRatings, totalSales];

function ContentRowMovies(){
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;