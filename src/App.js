import React, { useEffect, useState } from 'react'


import { BrowserRouter,Route, Switch} from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs'
import Services from './components/Services/Services'
import ContactUs from './components/ContactUs/ContactUs'
import AllClients from './components/AllClients/AllClients'
import AllPortfolio from './components/AllPortfolio/AllPortfolio'

export default function App() {



  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
   <>
             {showButton && (
        <button onClick={scrollToTop} className="back-to-top md:text-2xl text-xl font-regular  transform  hover:bg-gary-200 bg-black px-4 group py-3 duration-700">
    <i class="fas fa-long-arrow-alt-up duration-500  group-hover:text-red-600 "></i>
        </button>
      )}
            <BrowserRouter>
            <Switch>
          
            <Route  path='/home'>
                <Home></Home>    
            </Route>
            <Route  path='/aboutus'>
                <AboutUs></AboutUs>   
            </Route>
            <Route  path='/services'>
                <Services></Services> 
            </Route>
            <Route  path='/contactus'>
                <ContactUs></ContactUs>
            </Route>
            <Route  path='/allclients'>
                <AllClients></AllClients>
            </Route>
            <Route  path='/allportfolio'>
                <AllPortfolio></AllPortfolio>
            </Route>
            <Route exact path='/'>
                <Home></Home>    
            </Route>
            <Route exact path='*'>
                <Home></Home>    
            </Route>
            </Switch>
            </BrowserRouter>
    

    </>
  )
}
