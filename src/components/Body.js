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
        name: "Laptop", 
        img: "https://i5.walmartimages.com/seo/Lenovo-IdeaPad-3i-14-Laptop-Intel-Core-i5-1235U-8GB-RAM-512GB-SSD-Windows-11-Home-Arctic-Grey-82RJ0007US_2636a308-dc1c-4235-a1f3-cc826ed59556.6790f1aa7755583035b970d4f8ea4526.jpeg",
        price: 999,
        id: 1
    },
    {
        name: "Phone", 
        img: "https://buy.gazelle.com/cdn/shop/products/500x500-iPhones11-black_93602b9f-1b45-4449-971f-e98b18200c88_480x480.jpg?v=1578524874",
        price: 499,
        id: 2
    },
    {
        name: "Headset", 
        img: "https://gameone.ph/media/catalog/product/cache/7a2235b416a1900151232a782f707140/a/4/a4tech_bh300_wireless_headset.jpg",
        price: 79,
        id: 3
    },
    {
        name: "Keyboard", 
        img: "https://www.jbhifi.com.au/cdn/shop/files/572931-Product-0-I-637781958158864369.jpg?v=1713494791",
        price: 150,
        id: 4
    },
    {
        name: "Mouse", 
        img: "https://m.media-amazon.com/images/I/61UxfXTUyvL.jpg",
        price: 499,
        id: 5
    },
    {
        name: "Tablet", 
        img: "https://www.ione.com.kh/wp-content/uploads/2022/10/ROSA_iPad_Pro_Wi-Fi_11_in_4th_Gen_Space_Gray_PDP_Image_Position-1b-scaled.jpg",
        price: 399,
        id: 6
    },
    {
        name: "Camera", 
        img: "https://cinephototools.co.za/wp-content/uploads/2021/07/nikonZFCw16-50mm.jpeg",
        price: 600,
        id: 7
    },
    {
        name: "Monitor", 
        img: "https://images.philips.com/is/image/philipsconsumer/4896362f459949d18489b011011a06f3?$jpglarge$&wid=1250",
        price: 300,
        id: 8
    }
];

export default Body;