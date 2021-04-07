import React from 'react'
import {Link} from 'react-router-dom';
import Navbar from './Navbar';  

const Checkout = () => {
    return (
        <> 
        <Navbar/>
        <div className="container">
           <form style={{marginTop:'70px'}} >
               <div className="form-group">
             <div className="check" >      
           <h1 style={{textAlign:'center'}}> CHECKOUT  </h1>
             </div>
            <label> Contact information  </label>
            <input type="text" id="email" className="form-control" placeholder="Email"/>
            <span id="message1" className="text-danger"> </span>
            <div className="custom-control custom-checkbox mb-3">
            <input type="checkbox" className="custom-control-input" id="customCheck" name="example1"/>
             <label className="custom-control-label" for="customCheck">Keep me up to data on news and executive offer</label>
             </div>
             <br/>
             <br/>

             <h3> Shipping address </h3>
             <input type="text" id="fname" className="form-control" placeholder="first Name" />
             <span id="message2" className="text-danger"> </span>
             <input type="text" id="lname" className="form-control" placeholder="last Name" />
             <span id="message3" className="text-danger"> </span>
             <input type="text" id="address" className="form-control" placeholder="address" />
             <span id="message4" className="text-danger"> </span>
             <input type="text" id="city" className="form-control" placeholder="city" />
             <span id="message5" className="text-danger"> </span>
             <input type="text" id="code" className="form-control" placeholder="postal code" />
             <span id="message6" className="text-danger"> </span>
             <input type="number" id="number" className="form-control" placeholder="phone number"/>
             <span id="message7" className="text-danger"> </span>
             <div className='btnc' style={{textAlign:'center'}}>
                 <Link to="/cart"> <button className="btn btn-primary">  Return to cart </button> </Link>
                 <Link to="/payment">  <button className="btn btn-success"> Continue to the payment method</button> </Link>
              </div>   
                </div>
             </form>
             </div>
        </>
    )
}
export default Checkout
