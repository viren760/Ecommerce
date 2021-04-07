import logo from './logo.svg';
import './App.css';
import {BrowserRouter ,Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductContext from './Global/ProductContext';
import Cart from './components/Cart';
import Notfound from './components/Notfound';
import Payment from './components/Payment';
import Checkout from './components/Checkout';
import Deliver from './components/Deliver';


function App() {
  return (
    <>
     <BrowserRouter> 
     <Navbar/> 
       <Switch>
         <Route path="/" exact component={ProductContext}/>
         <Route path="/cart" exact component={Cart}/>
         <Route path="/payment" exact component={Payment}/>
         <Route path="/checkout" exact component={Checkout}/>
         <Route path="/deliver" exact component={Deliver}/>
         <Route component={Notfound}/>
       </Switch>
      </BrowserRouter>
    </> 
  );
}

export default App;
