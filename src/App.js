import React from "react";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
// import Home from "./components/Home";
import Home from "./pages/Home";
import ImageRecognition from "./components/ImageRecognition"
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";
import Bird from "./components/Bird";
import NotFound from "./components/NotFound"
import ComingSoon from "./components/ComingSoon";

// Styles
import "./App.css";
import { GlobalStyle } from "./global/GlobalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (

      <Router>
      
          <Header />
          <Bird />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound/>}/>
              <Route
                path="/image-recognition"
                element={<ImageRecognition />}
              />
              <Route
                path="/image-recognition/:imageTitle"
                element={<ImageRecognition />}
              />
              <Route
                path="/video-recognition"
                element={<ComingSoon />}
              />
              <Route
                path="/text-recognition"
                element={<ComingSoon />}
              />
            </Routes>
          <Footer />
          <GlobalStyle />
      </Router>

  );
}

export default App;
