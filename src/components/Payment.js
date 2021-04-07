import React from 'react'
import {Link} from 'react-router-dom'
import CVV from '../assests/cvv.png'


const Payment = () => {
    return (
        <div className="container" style={{marginTop:'70px'}}>  
          <div className="container-fluid" style={{textAlign:'center'} }>
              PAYMENT METHOD
           </div>   
            <form>
                <div className="form-group" style={{padding:'5px'}}>
                    <div>
                        <label> Card Type </label>
                        <div>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Select Card Type</option>
                            <option value="1">Mastarcard</option>
                            <option value="2">Visa</option>
                            <option value="3">AmericanExpress</option>
                            <option value="3">Rupee</option>
                        </select>
                        </div>
                    </div>
                    <div>
                        <label> Card Number </label>
                        <input type="text" className="form-control" />
                    </div>
                    <div>
                        <label> Name on Card </label>
                        <input type="text" className="form-control" />
                    </div>   
                    <div>
                        <label>Start date </label>
                        <input type="month" id="start" className="form-control" name="start"
                         min="2018-03" value=""></input>
                    </div>    
                    <div>
                        <label>Expiry date </label>
                        <input type="month" id="start" className="form-control" name="start"
                         min="2018-03" value=""></input>
                    </div>  
                    <div>
                        <label> Security Code / CVV </label>
                        <input type="text" className="form-control" />
                    </div>   
                     <div className="cvv">
                        <img src={CVV}  width="100%" height="100%"/>
                     </div>

                     <div className="payment-b" style={{textAlign:'center'}}>
                     <Link to="/checkout"> <button className="btn btn-primary"> Back to the pervious page </button> </Link>
                        <Link to='/deliver'> <button className="btn btn-success" > Confirm Payment </button> </Link> 
                      </div>    
                          
                </div>
            </form>
        </div>
    )
}

export default Payment
