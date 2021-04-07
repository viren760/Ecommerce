import React from 'react'
import Monster from '../assests/monster.png'
import {Link} from 'react-router-dom'

const Notfound = () => {
    return (
        <div className="container" style={{textAlign:'center'},{padding:'140px 100px'}}>
          
            <div className="row">
                <div className="col-5">
                    <img src={Monster} width="100%" height="100%" />
                </div>
                <div className="col-5">
                    <h1 style={{ fontWeight: 'bold' }}>OOPS !  PAGE <br />
                       NOT  FOUND .
                   </h1>
                    <br />
                    <h5> You must have picked the wrong door because I 
                          haven't been able to lay my eye on the page 
                          you've been search for.
                     </h5>
                    <div>
                       <Link to='/'> <button className="btn btn-primary" style={{fontWeight:'bold'}}> BACK TO HOME </button> </Link>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Notfound
