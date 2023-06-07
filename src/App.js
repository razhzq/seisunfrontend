import logo from './logo.svg';
import HeaderNav from './components/HeaderNav';
import TradeView from './views/TradeView';
import AssetsView from './views/AssetsView';
import './App.css';
import "@fontsource/barlow";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/400-italic.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <HeaderNav></HeaderNav>

      <TradeView></TradeView>
      <AssetsView></AssetsView>
    </div>
  );
}

export default App;
