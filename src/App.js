import React from 'react'
import {Routes, Route} from 'react-router-dom'
import IndexView from './views';
import CategoriesView from './views/categories';
import ProductsView from './views/products';
import SearchView from './views/search';
import CartView from './views/cart';
import LogInView from './views/login';
import SignUpView from './views/signup';
import DashboardHome from './views/dashbord'
import './App.css'
import SingleProductPage from './components/products/SingleProduct';
function App() {
  return (
    <>
      <Routes>
        <Route  path="/" element={<IndexView />}></Route>
        <Route  path="/categories" element={<CategoriesView />}></Route>
        <Route  path="/products" element={<ProductsView />}></Route>
        <Route  path="/search" element={<SearchView />}></Route>
        <Route  path="/cart" element={<CartView />}></Route>
        <Route  path="/login" element={<LogInView />}></Route>
        <Route  path="/signup" element={<SignUpView />}></Route>
        <Route  path="/dashboard" element={<DashboardHome />}></Route>
        <Route path="/products/:productId" element={<SingleProductPage />} />
      </Routes>
  </>
  );
}

export default App;
