import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div style={{padding:"10rem 5%",textAlign:"center"}}><h2 style={{fontFamily:"'Syne',serif",fontSize:"3rem",fontWeight:800}}>404</h2><p style={{color:"#7a7a8a",marginBottom:"2rem"}}>Page not found</p><a href="/" style={{background:"#0d0d1a",color:"#fff",padding:"0.75rem 2rem",borderRadius:50,textDecoration:"none",fontWeight:600}}>Go Home</a></div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
