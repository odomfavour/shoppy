import React from "react";
import { Route, Routes } from "react-router";
import Cart from "./screens/Cart/Cart";
import Home from "./screens/Index";
import Login from "./screens/Login/LogIn";
import Product from "./screens/Product/Product";
import SignUp from "./screens/SignUp/SignUp";
function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/sign-up" element={<SignUp/>}/>
    <Route path="/product/:id" element={<Product/>}/>
    <Route path="/cart" element={<Cart/>}/>
  </Routes>
  );
}

export default App;
