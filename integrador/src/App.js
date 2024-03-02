import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import NavBar from './components/NavBar';
import NavBarDown from './components/NavBarDown';
import Homepage from './components/Homepage';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Physical from './components/pages/Physical';
import Digital from './components/pages/Digital';
import Search from './components/pages/Search';
import Cart from './components/pages/Cart';
import Checkout from './components/pages/Checkout';
import { CartProvider } from 'react-use-cart';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  // const [category, setCategory] = useState("Products"); 
  // console.log(category);

  // let render;

  // switch(category){
  //   case "Products":
  //     render = <Products />
  //     break;
  //   case "General": 
  //     render = <General />
  //     break;
  //   case "Product":
  //     render = <Product />
  //     break;
  //   case "FAQ":
  //     render = <FAQ />
  //     break;
  //   case "BuyForms":
  //     render = <BuyForms />
  //     break;
  //   default:
  //     break;
  // }

  return (
    <>
    <CartProvider>
      <header>
        {/* <NavBar setCategory = {setCategory} /> */}
        <NavBar />
        <NavBarDown />
      </header>
      {/* {render} */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Physical" element={<Physical />} />
          <Route path="/Digital" element={<Digital />} /> 
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Cart/Checkout" element={<Checkout />} />
          <Route path="/Search/:filter" element={<Search />} />
        </Routes>
      </BrowserRouter> 
 
       {/* <CarouselOffers />

      <Products />

      <FAQ />

      <TopProductAndForm />  */}
      {/* <Products />
      <General />
      <Product />
      
      <BuyForms />
       */}

      <Footer />

      </CartProvider>
    </>
  );
}

export default App;
