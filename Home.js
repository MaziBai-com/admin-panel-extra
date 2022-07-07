import React from 'react';
// import AuthContext from '../Context/AuthContext';
// import Navbar from '../components/Home/components/Navbar';
// import Footer from '../components/Home/components/Footer';
// import Usp from '../components/Home/components/Usp';
// import Whatwedo from '../components/Home/components/Whatwedo';
// import Sidebar from '../components/Home/components/Sidebar';
// import Monitor from '../components/Home/components/Monitor';
// import Servicecard from '../components/Home/components/Servicecard';
// import Testimonials from '../components/Home/components/Testimonials';
// import Maidprofile from '../components/Home/components/Maidprofile';
// import Whyus from '../components/Home/components/Whyus';
import "../styles/Home.css"
import { useNavigate } from 'react-router-dom'

// new work 
import Footer from '../Home/components/Footer';
import Reasons from '../Home/components/WhyUs';
import Testimonials from '../Home/components/Testimonials';
import Maids from '../Home/components/Maids';
import Services from '../Home/components/Services';
import WhatWeDo from '../Home/components/WhatWeDo';



function Home() {
  const navigate = useNavigate();
  return (
    <>
    <WhatWeDo/>
    <div>
      <Services/>
     </div>
    <div className=' container' style={{marginRight:'auto',marginLeft:'auto'}}>
      <Maids/>
      <Testimonials/>
    </div>
    <Reasons/>
    <Footer/>
    </>
  )
}
export default Home;
