import React from 'react';
import "./style.css"
import logo from "../../img/Group 6058.svg"
import group from "../../img/Group.svg"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div id="header">
           <div className="container">
               <div className="navbar">
                   <div className="nav">
                       <Link to="/">
                           <img src={logo} alt="logo"/>
                       </Link>
                   </div>
                   <div className="nav-big d-flex">
                      <div className="big-one">
                          <div className="d-flex justify-content-center align-content-center">
                              <div className="circle mt-1 m-3"/>
                              <h6 className="call">Звоните, мы работаем с 8.00-18.00</h6>
                          </div>
                          <div>
                              <img className="images" src={group} alt="group"/>
                              <a className="text" href="tel:+996 (559) 18 00 33 ">+996 (559) 18 00 33</a>
                          </div>
                      </div>
                       <button className="bins ">
                           <a className="text-one" href="tel:+996 (559) 18 00 33 ">Заказать звонок</a>
                       </button>
                   </div>
               </div>
           </div>
            <div className="line"/>
        </div>
    );
};

export default Header;