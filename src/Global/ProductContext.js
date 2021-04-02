import React, {createContext,useState} from 'react';
import Banner  from '../components/Banner';
import Footer from '../components/Footer';


const PAGE_PRODUCT = 'props';
const PAGE_CART = 'cart';


  
function Card(props){
       
        const [cart, setCart] = useState([]);  
        const [page , setPage] = useState('PAGE_PRODUCT')
         

        // function for add product to the cart ...
          const addToCart = (props) =>{
           console.log('we are in cart');
            setCart([...cart, props]);
 
           }

   
       // function for moving to the next page ...
      const navigateTo =(nextPage) =>{
        setPage(nextPage);
          
      }

     // function for removing from the cart ...
     const removeFromCart =(propsToremove) =>{
      
      setCart( cart.filter((props) => props !== propsToremove));

     }


     // function for displaying products in the home page ...
     const renderProducts =() =>(
      <>   
          <h1> Product </h1>
          <div className="cards " style={{display:'inline-block'}}>
            <div className="card">
             <img src={props.imgsrc} alt="pic" className="card_img"/>
             <div style={{textAlign:'center' ,fontWeight:'bold'}}>
                 <div className="card_info">
                 </div>
                   <span className="card_category"> {props.title} </span> 
                  
                  <div>  <h7 className="card_desc">{props.sname} </h7> </div>
                
                <div className="card-footer" onClick={()=>addToCart(props)} style={{textAlign:'center'}} > 
                Buy Now 
                </div>    
              </div>   
             </div>  
      </div>
      </>
      );  
  



     // function for showing the products in the carts ...
    const renderCarts =() =>(
       <>   
          <h1> Cart</h1>
           <div className="cards " style={{display:'inline-block'}}>
            <div className="card">
             <img src={props.imgsrc} alt="pic" className="card_img"/>
             <div style={{textAlign:'center' ,fontWeight:'bold'}}>
                 <div className="card_info">
                 </div>
                   <span className="card_category"> {props.title} </span> 
                  
                  <div>  <h7 className="card_desc">{props.sname} </h7> </div>
                
              
                <div className="card-footer-r" onClick={()=>removeFromCart(props)} style={{textAlign:'center'}} > 
                  Remove
                </div>  
                
                    
                 </div>   
             </div>  
      </div>
       </>

      );
     
      

    
    return(
      
      <>
      <div>
          <button onClick={() => navigateTo(PAGE_CART)}> Go to  Cart ({cart.length}) </button>
       </div> 
       { page === PAGE_PRODUCT && renderProducts() } 
       { page === PAGE_CART && renderCarts() } 
     
      </>
    )

  
  
  }


 export const ProductContext= () =>{

    return(
      <>
      <Banner/>
        <Card
         imgsrc="image/h.jpg"
         title="headphones" 
         sname=" $20.0
       
         "/>
      
        <Card
        imgsrc="image/alarm.jpg"
        title="Alarms" 
        sname="$10.0 
        "/>
        <Card
        imgsrc="image/airpods.jpg"
        title="Airpods" 
        sname="
         $15.0
       "/>
        <Card
        imgsrc="image/jeans.jpg"
        title="jeans" 
        sname=" $5.0"
        />
        <Card
        imgsrc="image/shirt.jpg"
        title="shirt" 
        sname=" $7.0"
        />
        <Card
        imgsrc="image/microphone.jpg"
        title="Microphone" 
        sname="
          $12.0"  />
        <Card
        imgsrc="image/shoes.jpg"
        title=" Shoes" 
        sname="$10.0"
        />
         <Footer/>
      </>  
        
)}


export default ProductContext;
