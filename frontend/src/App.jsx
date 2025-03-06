import './App.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/Header';
import { Routes, Route} from 'react-router-dom';
import Home_Main from './home/Home_Main';
import About_Us from './aboutUs/About_Us';
import About_Puja from './aboutPuja/About_Puja';
import Blog from './blog/Blog';
import Contact from './contact/Contact';
import Footer from './home/Footer';
import VolunteerHeader from './header/VolunteerHeader';
import BlogDetails from './blog/BlogDetails';
import Gallery from './gallery/Gallery';
import Donate from './donate/Donate';
import About_Swamiji from './aboutSwamiji/About_Swamiji';


function App() {
 

  return (
    <>
    <VolunteerHeader/>
    <Header/>   

    <Routes>

    <Route path="/" element={<Home_Main/>} />
    <Route path="/about-swamiji" element={<About_Swamiji />} />
        <Route path="/about" element={<About_Us />} />
        <Route path="/about-puja" element={<About_Puja />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />

      </Routes> 

      <Footer/>
    </>
  )
}

export default App
