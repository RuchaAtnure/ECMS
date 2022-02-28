import { NavLink } from "react-router-dom";
import './ProductGroupNavigation.css'


const ProductGroupNavbar=()=>{
return(
<div>
    <nav>
    
       <ul>
           <li><NavLink to="/aboutus">Overview</NavLink></li>
           <li><NavLink to="/aboutus">Key Skills & Capabilities</NavLink></li>
           <li><NavLink to="/aboutus">Key Projects</NavLink></li>
           <li><NavLink to="/aboutus">Infrastructure</NavLink></li>
           <li><NavLink to="/aboutus">Subject Matter Experts</NavLink></li>
       </ul>
    </nav>
    </div>

)
}

export default ProductGroupNavbar;