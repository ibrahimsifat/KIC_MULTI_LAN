import React, { lazy, Suspense } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
// import AboutUs from "./components/AboutUs/AboutUs";
// import AllclientDetails from "./components/AllClients/AllclientDetails";
// import AllClients from "./components/AllClients/AllClients";
// import ClientsRecognition from "./components/AllClients/ClientsRecognition";
// import AllPortfolio from "./components/AllPortfolio/AllPortfolio";
// import AllProfileDetails from "./components/AllPortfolio/AllProfileDetails";
// import ContactUs from "./components/ContactUs/ContactUs";
// import History from "./components/History/History";
// import Home from "./components/Home/Home";
// import Philosophy from "./components/Home/Philosophy/Philosophy";
// import KicMision from "./components/KicMision/KicMision";
// import PromotionalGefts from "./components/PromotionalGefts/PromotionalGefts";
// import Services from "./components/Services/Services";
import Footer from "./shared/Footer";
import Navigation from "./shared/Navigation";
import Spinner from "./shared/Spinner";
const AboutUs = lazy(() => import("./components/AboutUs/AboutUs"));
const AllclientDetails = lazy(() =>
  import("./components/AllClients/AllclientDetails")
);
const AllClients = lazy(() => import("./components/AllClients/AllClients"));
const ClientsRecognition = lazy(() =>
  import("./components/AllClients/ClientsRecognition")
);
const AllPortfolio = lazy(() =>
  import("./components/AllPortfolio/AllPortfolio")
);
const AllProfileDetails = lazy(() =>
  import("./components/AllPortfolio/AllProfileDetails")
);
const ContactUs = lazy(() => import("./components/ContactUs/ContactUs"));
const History = lazy(() => import("./components/History/History"));
const Home = lazy(() => import("./components/Home/Home"));
const Philosophy = lazy(() =>
  import("./components/Home/Philosophy/Philosophy")
);
const KicMision = lazy(() => import("./components/KicMision/KicMision"));
const PromotionalGefts = lazy(() =>
  import("./components/PromotionalGefts/PromotionalGefts")
);
const Services = lazy(() => import("./components/Services/Services"));
const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation></Navigation>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/contactus">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/allclients">
              <AllClients></AllClients>
            </Route>
            <Route path="/allportfolio">
              <AllPortfolio></AllPortfolio>
            </Route>
            <Route path="/allclientsdetails/:clientId">
              <AllclientDetails></AllclientDetails>
            </Route>
            <Route path="/allportfoliodetails/:portfoliotId">
              <AllProfileDetails></AllProfileDetails>
            </Route>

            <Route path="/allclientsrecognition">
              <ClientsRecognition></ClientsRecognition>
            </Route>
            <Route path="/promotionalgefts">
              <PromotionalGefts></PromotionalGefts>
            </Route>
            <Route path="/visions">
              <KicMision></KicMision>
            </Route>
            <Route path="/history">
              <History></History>
            </Route>
            <Route path="/philosophy">
              <Philosophy></Philosophy>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="*">
              <Home></Home>
            </Route>
          </Switch>
        </Suspense>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
