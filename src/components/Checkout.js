import React from 'react'

const Checkout = () => {
    return (
        <> 
           <form>
               <div className="form-group">
           <h1> CHECKOUT  </h1>
            <hr/>
            <label> Contact information  </label>
            <input type="text" className="form-control" placeholder="Email"/>
            <div class="custom-control custom-checkbox mb-3">
            <input type="checkbox" class="custom-control-input" id="customCheck" name="example1"/>
             <label class="custom-control-label" for="customCheck">Keep me up to data on news and executive offer</label>
             </div>
             <br/>
             <br/>

             <h3> Shipping address </h3>
             <input type="text" className="form-control" placeholder="first Name"/>
             <input type="text" className="form-control" placeholder="last Name"/>
             <input type="text" className="form-control" placeholder="address"/>
             <input type="text" className="form-control" placeholder="city"/>
             <input type="text" className="form-control" placeholder="postal code"/>
             <input type="number" className="form-control" placeholder="phone number"/>
             <span>
                 <Link to="">  Return to cart </Link>
                 <button className="btn btn-primary"> Continue to the payment method</button>
              </span>   
                </div>
             </form>
        </>
    )
}
export default Checkout
