import React, { createContext, useState } from 'react';


const PAGE_PRODUCT = 'product';
const PAGE_CART = 'cart';



function Card({ dataArray }) {

  console.log('PROPS DATA ==================', dataArray);

  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCT)


  // function for add product to the cart ...
  const addToCart = (item) => {
    console.log('we are in cart', item);
    setCart([...cart, { ...item }]);

  }

  const navigateTo = (nextPage) => {
    setPage(nextPage);

  }

  // function for removing from the cart ...
  const removeFromCart = (itemToremove) => {

    setCart(cart.filter((item) => item !== itemToremove));

  }


  const components = () => {
    if (dataArray === undefined || dataArray === null || dataArray.length === 0) {
      return;
    }

    return dataArray.map((item, index) => {
      const keys = `product-${index}`;
      return (
        <div className="cardComponents" key={keys}>
          <img src={item.imgsrc} alt="pic" className="card_img" />
          <div className="textWrapper">
            <span className="card_category"> {item.title} </span>
            <span className="card_desc">{item.sname} </span>
            <div >
              <span className="card-footer" onClick={() => addToCart(item)} style={{ textAlign: 'center' }} >
                Add To Cart
                   </span>
            </div>
          </div>
        </div>
      )
    })

  }

  // function for displaying products in the home page ...
  const renderProducts = () => (
    <>

    </>
  );




  // function for showing the products in the carts ...
  // const renderCarts =() =>(
  //    <>   
  //       <h1> Cart</h1>
  //        <div className="cards " style={{display:'inline-block'}}>
  //         <div className="card">
  //          <img src={props.imgsrc} alt="pic" className="card_img"/>
  //          <div style={{textAlign:'center' ,fontWeight:'bold'}}>
  //              <div className="card_info">
  //              </div>
  //                <span className="card_category"> {props.title} </span> 
  //                <div>  <h6 className="card_desc">{props.sname} </h6> </div>
  //             <div className="card-footer-r" onClick={()=>removeFromCart(props)} style={{textAlign:'center'}} > 
  //               Remove
  //             </div>  
  //             </div>   
  //         </div>  
  //   </div>
  //    </>

  //   );

  const renderCart = () => {

    return cart.map((item, index) => {
      const keys = `product-${index}`;
      return (
        <div className="cardComponents" key={keys}>
          <img src={item.imgsrc} alt="pic" className="card_img" />
          <div className="textWrapper">
            <span className="card_category"> {item.title} </span>
            <span className="card_desc">{item.sname} </span>
            <div >
              <span className="card-footer" onClick={() => removeFromCart(item)} style={{ textAlign: 'center' }, { backgroundColor: 'red' }} >
                Remove
              </span>
            </div>
            <div>
            </div>
          </div>
        </div>
      )
    })
  }



  return (
    <>
      <div>
        <button onClick={() => navigateTo(PAGE_CART)}> Go to  Cart ({cart.length}) </button>
      </div>
      <div className="cards container">
        {page === PAGE_PRODUCT && components()}
      </div>

      <div className="cards container">
        {page === PAGE_CART && renderCart()}
      </div>

    </>
  )

}

export default Card;
