import React, { useEffect, useState } from 'react'
import cookies from 'js-cookie'

import { BrowserRouter,Route, Switch} from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs'
import Services from './components/Services/Services'
import ContactUs from './components/ContactUs/ContactUs'
import AllClients from './components/AllClients/AllClients'
import AllPortfolio from './components/AllPortfolio/AllPortfolio'
import AllclientDetails from './components/AllClients/AllclientDetails'
import ClientsRecognition from './components/AllClients/ClientsRecognition'
import AnimatedCursor from "react-animated-cursor";
import AllProfileDetails from './components/AllPortfolio/AllProfileDetails'
import PromotionalGefts from './components/PromotionalGefts/PromotionalGefts'
import KicMision from './components/KicMision/KicMision'
import History from './components/History/History'
export default function App() {


  const IsArabic=cookies.get('i18next') ==='ar'

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
     <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="237, 63, 107"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
   < div className={!IsArabic?'monsterratFont':"arabic-font-2" }>
             {showButton && (
        
        <button onClick={scrollToTop} id="topButton"
        class="fixed z-10 hover:bg-purple-800 hover:text-red-700 duration-500  md:p-3 p-2 bg-white rounded-full shadow-md bottom-10 right-10 animate-bounce">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18">
            </path>
        </svg>
        <div class="absolute top-0 -left-4 w-10 h-10 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
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
            <Route  path='/allclientsdetails/:clientId'>
                <AllclientDetails></AllclientDetails>
            </Route>
            <Route  path='/allportfoliodetails/:portfoliotId'>
                <AllProfileDetails></AllProfileDetails>
            </Route>
           
            <Route  path='/allclientsrecognition'>
                <ClientsRecognition></ClientsRecognition>
            </Route>
            <Route  path='/promotionalgefts'>
                <PromotionalGefts></PromotionalGefts>
            </Route>
            <Route  path='/visions'>
                <KicMision></KicMision>
            </Route>
            <Route  path='/history'>
                <History></History>
            </Route>
            <Route exact path='/'>
                <Home></Home>    
            </Route>
            <Route exact path='*'>
                <Home></Home>    
            </Route>
            </Switch>
            </BrowserRouter>
    

    </div>
    </>
  )
}
