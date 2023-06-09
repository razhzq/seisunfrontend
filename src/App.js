import logo from './logo.svg';
import HeaderNav from './components/HeaderNav';
import TradeView from './views/TradeView';
import AssetsView from './views/AssetsView';
import DetailView from './views/DetailView';
import BenefitView from './views/BenefitView';
import ContactView from './views/ContactView';
import './App.css';
import "@fontsource/barlow";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/400-italic.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';

function App() {
  // const [ scrollPosition, setScrollPosition ] = useState(0);
  // const handleScroll = () => {
  //   setScrollPosition(window.scrollY)
  //   const scrollPosition = window.scrollY;
  //   console.log(scrollPosition)
  // };

  // useEffect(() => {
  //   handleScroll();
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [])

  return (
    
    <div className="App">
      <HeaderNav></HeaderNav>
      <TradeView></TradeView>
      <AssetsView ></AssetsView>
      <DetailView></DetailView>
      <BenefitView></BenefitView>
      <ContactView></ContactView>
    </div>
  );
}

export default App;
