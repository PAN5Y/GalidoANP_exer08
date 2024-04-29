import React from 'react';
import './App.css';

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