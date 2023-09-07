import React from "react";
import clip from "../assets/icons/clip.svg";
import cross from "../assets/icons/cross.svg";
import dollar from "../assets/icons/dollar.svg";
import lock from "../assets/icons/lock.svg";
import arrow from "../assets/icons/pink-arrow.svg";
import synth from "../assets/icons/synth.svg";
import { ApedClouds } from "../components/ApedClouds";
import { ApedHill } from "../components/ApedHill";
import BenefitItem from "../components/BenefitItem";

const benefitData = [
  {
    url: synth,
    title: "Synthetic",
    text: "Trade without directly owning assets. simulated through smart contracts.",
  },
  {
    url: cross,
    title: "HIGH LEVERAGE",
    text: "Crypto up to 150x, Forex up to 1000x, Stocks and Commodities up to 100x",
  },
  {
    url: arrow,
    title: "LOW FEES",
    text: "Low trading and gas fees on Layer 2",
  },
  { url: clip, title: "NO SIGNUP", text: "Trade directly from your wallet" },
  {
    url: dollar,
    title: "DAI, USDC & USDT",
    text: "Trade and  paid in stablecoin of your choice. Initially accepting USDC, USDT & DAI.",
    hideOnMobile: true,
  },
  {
    url: lock,
    title: "PROOF OF RESERVE",
    text: "Onchain vault provides full transparency and guaranteed liquidity.",
    hideOnMobile: true,
  },
];

const BenefitView = () => {
  return (
    <div className="benefit-section pt-48 lg:pt-80 pb-96 2xl:pb-[600px] w-full bg-white relative">
      <div>
        <p className="font-bold text-[40px] leading-[40px] uppercase tracking-wider tracking-[.045em] hidden md:block">
          Trade perpetual futures
        </p>
        <p className="font-bold text-[40px] leading-[40px] uppercase tracking-wider tracking-[.045em] block md:hidden">
          Why APED
        </p>
      </div>

      <div className="visible lg:invisible border w-[290px] min-[390px]:w-[327px] border-opacity-50 mx-auto mt-[33px]"></div>

      <div className="mt-[33px] px-4 gap-x-[110px] gap-y-[33px] justify-center bg-opacity-15 grid grid-cols-[minmax(0,max-content)] md:grid-cols-[repeat(2,minmax(0,max-content))] lg:grid-cols-[repeat(3,minmax(0,max-content))]">
        {/* grid-cols-[repeat()] */}
        {benefitData.map((item, idx) => (
          <BenefitItem data={item} key={idx}></BenefitItem>
        ))}
      </div>

      <div className="absolute top-0 w-full overflow-hidden">
        <ApedClouds />
      </div>
      <div className="absolute bottom-0 w-full overflow-hidden">
        <ApedHill />
      </div>
    </div>
  );
};

export default BenefitView;
