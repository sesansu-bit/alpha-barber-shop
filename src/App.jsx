import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from './navbar';
import Hero from './hero';
import About from './about';
import Service from './service';
import Gallery from './gallery';
import Testimonial from './testimonial';
import Form from './form';
import Footer from './footer';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace("/", "") || "home";
    const element = document.getElementById(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="services"><Service /></div>
      <div id="gallery"><Gallery /></div>
      <div id="testimonials"><Testimonial /></div>
      <div id="contact"><Form /></div>
      <Footer />
    </>
  );
}
