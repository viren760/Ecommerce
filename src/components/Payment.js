import React from 'react'

const Payment = () => {
    return (
        <>  
          <div className="container-fluid" style={{textAlign:'center'}}>
              PAYMENT METHOD
           </div>   
            <form>
                <div className="form-group">
                    <div>
                        <label>We accept </label>
                    </div>
                    <div>
                        <label> Card Type </label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Select Card Type</option>
                            <option value="1">Mastarcard</option>
                            <option value="2">Visa</option>
                            <option value="3">AmericanExpress</option>
                            <option value="3">Rupee</option>
                        </select>
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
                        <label> Security Code </label>
                        <input type="text" className="form-control" />
                    </div>   
                     <div>
                         <img src="./cvv.jpg" className="cvv" />
                     </div>
                          
                </div>
            </form>
        </>
    )
}

export default Payment
