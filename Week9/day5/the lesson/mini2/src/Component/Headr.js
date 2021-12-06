import {Link,NavLink} from 'react-router-dom';

const Header=()=>{
    return(
        <nav>
        <div class="nav-wrapper">
          <Link to="/" class="brand-logo">Herolo Wheather Task</Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="Favorit">Favorit</NavLink></li>
          </ul>
        </div>
      </nav>
    )
}
export default Header;