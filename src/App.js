import React, { Suspense, useEffect, useState } from "react";

import "./App.css";
import Routes from "./routes";
import ScrollTop from "./shared/ScrollTop";

import Spinner from "./shared/Spinner";

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
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      <div>
        {showButton && <ScrollTop scrollToTop={scrollToTop} />}
        <Suspense fallback={<Spinner />}>
          <Routes />
        </Suspense>
      </div>
    </>
  );
}
