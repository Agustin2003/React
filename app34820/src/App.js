import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer';
import ProductsContainer from './components/ProductsContainer/ProductContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {



  return (
    <main className='Main'>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ProductsContainer />}/>
            <Route path='/category/:categoryId' element={<ProductsContainer />}/>
            <Route path='/product/:productId' element={<ProductDetailContainer /> } />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
