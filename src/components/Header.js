import React from 'react';
import './App.css';
import Menu from './Menu';

function Header() {
    return(
        <div className='header'>
            <div className='logo'>
                <p className='logo-name'><b><i> Lazado </i></b></p>
            </div>
            <div className='nav-bar'> 
                <Menu data={menuList} /> 
            </div>
        </div>
    )
}

const menuList = [
    { name: "Appliances", url: "#", id: 1 },
    { name: "Groceries", url: "#", id: 2 },
    { name: "Gadgets", url: "#", id: 3 },
    { name: "Clothing", url: "#", id: 4 },
  ];

export default Header;