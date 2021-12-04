import React from "react";
import { Link,NavLink } from "react-router-dom";


const Navbar = (props) =>{
    return (
        
      <nav>
            <div class="nav-wrapper">
              <Link to='/' class="brand-logo">My Blog</Link>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><NavLink exact to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>

              </ul>
            </div>
          </nav>    
       
    )
}
export default Navbar;