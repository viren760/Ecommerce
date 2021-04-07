import React from 'react'
import Order from '../assests/order.gif'
import {Link} from 'react-router-dom'

const Deliver = () => {
    return (
        <>
        <div className="container">
        <div className="deliver" style={{textAlign:'center'}}>
            <img src= {Order} width="50%" height="50%"/>
        </div>
        <div style={{textAlign:'center'}}>
            <h2 className="hhh" style={{fontWeight:'bold'}}> Your order is delivered </h2>
          </div>  
          <div  style={{textAlign:'center'} }>
            <Link to='/'> <button className='btn btn-primary'> CONTINUE SHOPPING </button> </Link>
           </div>   
        </div>
       </> 
    )
}

export default Deliver
