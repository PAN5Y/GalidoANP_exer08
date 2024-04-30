/*
    Name: Galido, Alyanna Nicole P.
    Section: CMSC 100 - UV1L
    Description: This program contains Product Cards component.
*/

import React from 'react';
import './App.css';

/*
    The Product Cards component of the application. 
    It renders each product in the productList array from the Body.js file as a product card.
*/

function ProductCards(props){
    let products = props.card;
    
    return (
        <ul className='product-cards'>
            {
                products.map((product) => {
                    return (
                        <div className='product-card' key={product.id}>
                            <li key={product.id}>
                                <center><img src={product.img} alt={product.name} className="product-image" /></center>
                                <p className='product-name'><b><i>{product.name}</i></b></p>
                                <p className='product-price'>${product.price}</p>
                                <br/>
                                <button onClick={()=> console.log("Added", product.name, "to the cart!")} className="add-to-cart"><b> ADD TO CART </b></button>
                            </li>
                        </div> 
                    )
                })
            }
    	</ul>
    )
}

export default ProductCards;