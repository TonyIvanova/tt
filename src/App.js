
import './App.css';
// router 
import {  BrowserRouter,  Routes,  Route } from "react-router-dom";
//components 
import Header from './components/Header';
import Hero from './components/Hero';
import ProductsList from './components/ProductsList';
import Product from './components/Product';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      
      <Routes>
      {/* <Route path="/shop" element={<ProductsList/> } /> */}
      <Route path="/" element={<Hero />} />
      {/* <Route path="/products/:id" element={<Product />}/>  */}
      </Routes>
 

      </BrowserRouter>

    </div>
  );
}

export default App;
