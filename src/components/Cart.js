import React from 'react'
import {Link} from 'react-router-dom'

const Cart = () => {
    return (
        <div className="container2">
            <div className="cart-container">
               <h2 style={{fontWeight:'bold', fontFamily:'sans-serif',  marginTop:'100px'}}> Shopping Cart </h2> 
                   
            </div>

            <div style={{textAlign:'center'}}>
              <Link to="/checkout"> <button className="btn btn-primary"> Checkout </button> </Link>
            </div>
        </div>
    )
}

export default Cart;
