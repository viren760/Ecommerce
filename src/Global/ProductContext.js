import React, {createContext,useState} from 'react';
import Banner  from '../components/Banner';
import Footer from '../components/Footer';
import Card from './components/Shopping';
import './index.css';


 export const ProductContext= () =>{

  const dataArray = [{ imgsrc:"image/h.jpg", title:"headphones", sname:" $20.0"}, { imgsrc:"image/airpods.jpg", title:"Airpods",  sname:" $30.0"}, { imgsrc:"image/alarm.jpg", title:"alaram",  sname:" $10.0"}, { imgsrc:"image/jeans.jpg", title:"jeans",  sname:" $9.0"}, { imgsrc:"image/microphone.jpg", title:"Microphone",  sname:" $25.0"}, { imgsrc:"image/shirt.jpg", title:"Shirt",  sname:" $8.0"}, { imgsrc:"image/shoes.jpg", title:"Shoes",  sname:" $20.0"}]

    return(
      <>
        <Banner/>
          <Card dataArray={dataArray} />
        <Footer/>
      </>  
        
)}


export default ProductContext;
