import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Product from "./pages/product/Product";
import Contact from "./pages/contact/Contact";
import SingleProduct from "./pages/singleProducts/SingleProduct";
import Cart from "./pages/cart/Cart";
import Header from "./components/header/Header";
function App() {
  return (
    <Router>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/singleproduct/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </Router>
  )
}

export default App
