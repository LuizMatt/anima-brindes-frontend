import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Products from "./pages/Products/Products.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Product from "./pages/productPage/Product.jsx";
import LoginPage from "./pages/loginPage/LoginPage.jsx";
import SignUp from "./pages/signUpPage/SignUp.jsx";

const Rotas = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
    </Routes>
)

export default Rotas