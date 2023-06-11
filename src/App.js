import HeaderNav from './components/HeaderNav';
import Home from './views/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import "@fontsource/barlow";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/400-italic.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StickyContainer, Sticky } from 'react-sticky';

function App() {

  return (
      <div className="App">
        <HeaderNav></HeaderNav>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Home />} />
              <Route path="docs" element={<Home />} />
              <Route path="contacts" element={<Home />} />
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
