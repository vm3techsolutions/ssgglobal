import Banner from './Banner';
import About_Us from './About_Us';
import Puja from './Puja';
// import Testimonials from './Testimonials';
import './Home_Main.css';
// import Img4 from './Img4';
import HomeGetTouch from './HomeGetTouch';
import BlogSlider from './BlogSlider';
import DevoteesSlider from './DevoteesSlider';
import LaunchingTemple from './LaunchingTemple';
// import Animated4img from './Animated4img';
import SwamijiEvents from './SwamijiEvents';
import Form1 from './Form1';

const Home_Main = () => {
    return (
        <>
            <Banner/>
            <About_Us/>
            {/* <Animated4img/> */}
            <LaunchingTemple/>
            <Puja/>
            <DevoteesSlider/>
            <SwamijiEvents/>
            <BlogSlider/>
            <Form1/>
            {/* <Img4/> */}
            <HomeGetTouch/>
        </>
    )
}

export default Home_Main;