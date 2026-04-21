import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import Pricing from "./components/pricing";
import Testimonials from "./components/Testimonials";

export default function App() {
  return(
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        
        <Route  path="/" element={<Home/>} />
        <Route  path="/about" element={<About/>} />
        <Route  path="/pricing" element={<Pricing/>} />
        <Route  path="/testimonials" element={<Testimonials/>} />
               
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}