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
import AllProfileDetails from './components/AllPortfolio/AllProfileDetails'
import PromotionalGefts from './components/PromotionalGefts/PromotionalGefts'
import KicMision from './components/KicMision/KicMision'
import History from './components/History/History'
import Footer from './shared/Footer'
import Philosophy from './components/Home/Philosophy/Philosophy'
import Navigation from './shared/Navigation'
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

   < div className={!IsArabic?'monsterratFont':"arabic-font-2" }>
             {showButton && (
        
        <button onClick={scrollToTop} id="topButton"
        className="fixed z-10 hover:bg-purple-800 hover:text-red-700 duration-300  md:p-3 sm:p-2 px-1 py-2 bg-white bg-opacity-75 rounded shadow-md bottom-10 right-4 ">
        <svg className="md:w-8 md:h-8 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18">
            </path>
        </svg>
     
        </button>
      )}
            <BrowserRouter>
            <Navigation></Navigation>
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
            <Route  path='/philosophy'>
                <Philosophy></Philosophy>
            </Route>
            <Route exact path='/'>
                <Home></Home>    
            </Route>
            <Route exact path='*'>
                <Home></Home>    
            </Route>
            </Switch>
            <Footer></Footer>
            </BrowserRouter>
    

    </div>
    </>
  )
}
