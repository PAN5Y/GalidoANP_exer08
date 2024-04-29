import React from 'react';
import './App.css';
import './ProductCards.js'
import ProductCards from './ProductCards.js';

function Body() {
    return(
        <div className='main-body'>
            <ProductCards card={productList} />
        </div>
    )
}

const productList = [
    {
        name: "phone 1", 
        img: "https://buy.gazelle.com/cdn/shop/products/500x500-iPhones11-black_93602b9f-1b45-4449-971f-e98b18200c88_480x480.jpg?v=1578524874",
        price: 499,
        id: 1
    },
    {
        name: "phone 2", 
        img: "https://buy.gazelle.com/cdn/shop/products/500x500-iPhones11-black_93602b9f-1b45-4449-971f-e98b18200c88_480x480.jpg?v=1578524874",
        price: 499,
        id: 2
    },
    {
        name: "phone 3", 
        img: "https://buy.gazelle.com/cdn/shop/products/500x500-iPhones11-black_93602b9f-1b45-4449-971f-e98b18200c88_480x480.jpg?v=1578524874",
        price: 499,
        id: 3
    },
    {
        name: "phone 4", 
        img: "https://buy.gazelle.com/cdn/shop/products/500x500-iPhones11-black_93602b9f-1b45-4449-971f-e98b18200c88_480x480.jpg?v=1578524874",
        price: 499,
        id: 4
    },
    {
        name: "phone 5", 
        img: "https://buy.gazelle.com/cdn/shop/products/500x500-iPhones11-black_93602b9f-1b45-4449-971f-e98b18200c88_480x480.jpg?v=1578524874",
        price: 499,
        id: 5
    },
    {
        name: "phone 6", 
        img: "https://buy.gazelle.com/cdn/shop/products/500x500-iPhones11-black_93602b9f-1b45-4449-971f-e98b18200c88_480x480.jpg?v=1578524874",
        price: 499,
        id: 6
    },
    {
        name: "phone 7", 
        img: "https://buy.gazelle.com/cdn/shop/products/500x500-iPhones11-black_93602b9f-1b45-4449-971f-e98b18200c88_480x480.jpg?v=1578524874",
        price: 499,
        id: 7
    },
    {
        name: "phone 8", 
        img: "https://buy.gazelle.com/cdn/shop/products/500x500-iPhones11-black_93602b9f-1b45-4449-971f-e98b18200c88_480x480.jpg?v=1578524874",
        price: 499,
        id: 8
    }
];

export default Body;