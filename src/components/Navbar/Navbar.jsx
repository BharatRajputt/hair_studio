import React, { useEffect } from 'react';
import './Navbar.css'
import menu from '../../assets/menu.png';

const Navbar = () => {
  useEffect(() => {
    const sideNav = document.getElementById("sideNav");
    const menuBtn = document.getElementById("menuBtn");
    const menuImg = document.getElementById("menu");

    sideNav.style.right = "-250px";

    menuBtn.onclick = function () {
      if (sideNav.style.right === "-250px") {
        sideNav.style.right = "0";
        menuImg.src = menu; // Assuming menu.png is in the same directory as the component
      } else {
        sideNav.style.right = "-250px";
        menuImg.src = menu;
      }
    };
  }, []); // Empty dependency array means this effect will run once after the first render

  return (
    <div>
      <div id="sideNav">
        <nav>
          <ul>
            <li><a href="#banner">HOME</a></li>
            <li><a href="#feature">FEATURE</a></li>
            <li><a href="#service">SERVICES</a></li>
            <li><a href="#testimonial">TESTIMONIAL</a></li>
            <li><a href="#packages">PACKAGES</a></li>
            <li><a href="#appointment">APPOINTMENT</a></li>
            <li><a href="#footer">MEET US</a></li>
          </ul>
        </nav>
      </div>
      <div id="menuBtn">
        <img src={menu} id="menu" alt="Menu" />
      </div>
    </div>
  );
};

export default Navbar;
