import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import HeaderNav from "./components/HeaderNav";
import Contact from "./views/ContactView";

import "@fontsource/barlow";
import "@fontsource/barlow/400-italic.css";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/700-italic.css";
import "@fontsource/barlow/700.css";
import "@fontsource/barlow/900-italic.css";
import "@fontsource/barlow/900.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import TermsofServiceScreen from "./components/TermsofServiceScreen";

import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <HeaderNav></HeaderNav>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="docs" element={<Home />} />
          <Route path="contacts" element={<Contact />} />
          <Route path="terms-of-service" element={<TermsofServiceScreen />} />
        </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </div>
  );
}

export default App;
