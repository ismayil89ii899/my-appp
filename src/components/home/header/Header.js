import React from "react";
import './App.css'

const Header = () => {
 
  return (
    <>
      <header className="header">
        <div className="container flex">
          <div className="logo">
            <img className="img1"
              src="https://t3.ftcdn.net/jpg/00/85/73/28/360_F_85732813_H42V97IazS9xQNfMPYrbk1fgQcg9l8rs.jpg"
              alt=""
            />
          </div>
          <div className="nav">
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Shop</li>
              <li className="icon">
              
              </li>
            </ul>
          </div>
         
        </div>
      </header>
    </>
  );
};

export default Header;
