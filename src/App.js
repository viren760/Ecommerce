import logo from './logo.svg';
import './App.css';
import {BrowserRouter ,Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductContext from './Global/ProductContext';
import Cart from './components/Cart';
import Notfound from './components/Notfound';



function App() {
  return (
    <>
     <BrowserRouter> 
     <Navbar/> 
       <Switch>
         <Route path="/" exact component={ProductContext}/>
         <Route path="/cart" exact component={Cart}/>
         <Route component={Notfound}/>
       </Switch>
      </BrowserRouter>
    </> 
  );
}

export default App;
