import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Checkout from "./components/Checkout";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Regulations from "./components/Regulations";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/regulations" element={<Regulations />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
