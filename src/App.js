import HeaderNav from './components/HeaderNav';
import Home from './Home';
import Contact from './Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import "@fontsource/barlow";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/400-italic.css";
import "@fontsource/barlow/700.css";
import "@fontsource/barlow/700-italic.css";
import "@fontsource/barlow/900.css";
import "@fontsource/barlow/900-italic.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StickyContainer, Sticky } from 'react-sticky';
import FooterView from './views/FooterView';

function App() {

  return (
      <div className="App">
        <HeaderNav></HeaderNav>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="docs" element={<Home />} />
            <Route path="contacts" element={<Contact />} />
          </Routes>
        </BrowserRouter>

        <FooterView></FooterView>
      </div>
  );
}

export default App;
