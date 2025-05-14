import Navbar from './navbar';
import Hero from './hero';
import About from './about';
import Service from './service';
import Gallery from './gallery';
import Testimonial from './testimonial';
import Form from './form';
import Footer from './footer';

export default function App() {
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
