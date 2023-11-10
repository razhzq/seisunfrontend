import React, { useEffect } from "react";
import { isMobile } from "react-device-detect";
import TradeView from "./views/TradeView";

console.log("HELLO");

const Home = () => {
  useEffect(() => {
    if (isMobile) {
      const mybody = document.body;
      mybody.style.overflowY = "hidden";
      setTimeout(() => {
        mybody.style.overflowY = "";
      }, 1500);
    }
  });

  return (
    <div>
      <section>
        <TradeView></TradeView>
      </section>
      {/* <section className="overlay">
        <AssetsView></AssetsView>
      </section>
      <section className="">
        <DetailView />
      </section>
      <section className="overlay">
        <BotView></BotView>
        <BenefitView />
      </section> */}
      {/* <div className="w-full h-[175px] bg-[#0e041f]" /> */}
    </div>
  );
};

export default Home;
