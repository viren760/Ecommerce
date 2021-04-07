import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
              <div className="center" style={{paddingTop:'4px'}}>
                 <h5> Contact us with </h5>
               </div>   
            <div className="f">
          <span>   <i className="fab fa-instagram-square" style={{fontSize:'26px', paddingLeft:'5px',paddingRight:'5px',paddingBottom:'5px'}} ></i> </span>
           <span> <i className="fab fa-linkedin" style={{fontSize:'26px', paddingLeft:'5px',paddingRight:'5px',paddingBottom:'5px'}}></i>  </span>
            <span> <i className="fab fa-github" style={{fontSize:'26px', paddingLeft:'5px',paddingRight:'5px',paddingBottom:'5px'}}></i>   </span>
            </div>
            <div className="bottom">
                <h5> V-mart 2020, All Right Reserved By V-mart </h5>
             </div>   
         </footer>   
        
    )
}

export default Footer
