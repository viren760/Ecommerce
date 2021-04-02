import React from 'react'
import { Link } from 'react-router-dom'
import ProductContext from '../Global/ProductContext';


const Navbar = () => {
    return (
        <div>
           <nav>
               <ul className="left">
                    <li> <Link to="/">V-mart</Link> </li>
                </ul> 
                <ul className="right">
                <li> <Link to="cart">
                    <span className="shoppingCart"> <i class="fas fa-cart-plus"></i> </span>               
                    <span className="cartCount"> 0 </span>
                </Link> </li>
                 </ul>     
            </nav>       
        </div>
       )
}

export default Navbar
