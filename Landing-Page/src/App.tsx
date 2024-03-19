import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadScreen from './components/LoadScreen/LoadScreen';
import Image from './components/Image';
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Body from "./components/Body/Body";
import Footer from './components/Footer/Footer';
import EventDetails from './components/EventDetails/EventDetails';
import WhoWeAre from './components/AboutUs/WhoWeAre';
import Mission from './components/AboutUs/Mission';
import Partners from './components/Partnerships/Partners';

function App() {
  let items = ["Home", "Contact"];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    },  2000);
  }, []);

  if (isLoading) {
    return (
       <LoadScreen isLoading={isLoading}>
         <div className="imageContainer">
           <Image src="/ImageAssets/JBECPLogoWhite.png" alt="JBECP Logo" className="AnimatedImage" />
         </div>
       </LoadScreen>
    );
   }

  return (
    <div className="App">
      <NavBar />
      <Body />
      <Partners />
      <WhoWeAre />
      <Mission />
      {/* <EventDetails /> */}
      <Footer />
    </div>
  );
}

export default App;