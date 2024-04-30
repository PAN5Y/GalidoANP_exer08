/*
    Name: Galido, Alyanna Nicole P.
    Section: CMSC 100 - UV1L
    Description: This program contains Menu component.
*/

import React from 'react';
import './App.css';

/*
    The Menu  component of the application. 
    It renders every menu in the menuList array from the Header.js file as an element in the navigation bar.
*/

function Menu(props){
    let menu = props.data;
    
    return (
        <div className='nav-bar'>
    	    <ul className='nav-list'>
            {
                menu.map((menuItem) => {
                    return (
                        <li key={menuItem.id}>
                            <a href={menuItem.url} className='menu-item'>
                                <b>{menuItem.name}</b>
                            </a>
                        </li> 
                    )
                })
            }
    	    </ul>
  	    </div>
    )
}

export default Menu;