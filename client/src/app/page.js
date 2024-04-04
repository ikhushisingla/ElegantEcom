'use client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Shop from "@/pages/Shop";
import ShopCategory from '@/pages/ShopCategory';
import Product from '@/pages/Product';
import Cart from '@/pages/Cart';
import LoginSignup from '@/pages/LoginSignup';


export default function Home() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category="men" />} />
          <Route path='/womens' element={<ShopCategory category="women" />} />
          <Route path='/kids' element={<ShopCategory category="kid" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={ <Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
