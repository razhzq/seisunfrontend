import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import AssetsItem from '../components/AssetsItem';
import axios from 'axios';

let cryptoChg = [];
let forexChg = [];
let forexData = [];

const AssetsView = () => {
  const [ netType, setNetType ] = useState(['BTC', 'SOL', 'ETH', 'DOT']);
  const [ cryptoData, setCryptoData ] = useState([]);

  useEffect(() => {
    const myInterval = setInterval( (t)=> {
      (async () => {
      
        const rep2 = await axios.get(`https://api2.aped.xyz/forex`);
        forexData = rep2.data
        // setForexData(rep2.data);

        const ch1 = await axios.get(`https://api2.aped.xyz/cryptos/dailychange`);
        cryptoChg.push(ch1.data.cryptoDailyChange);
        cryptoChg = cryptoChg.slice(-20);
        const ch2 = await axios.get(`https://api2.aped.xyz/forex/dailychange`);
        forexChg.push(ch1.data.cryptoDailyChange);
        forexChg = forexChg.slice(-20);

        const rep1 = await axios.get(`https://api2.aped.xyz/cryptos`);
        setCryptoData(rep1.data);
      })();
    }, 1000)

  }, []);

  const settings = {
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 4,
    speed: 500,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    swipe: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1430,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
      <div className="assets flex mx-auto bg-black h-screen items-center justify-center overflow-hidden">
        <div className="w-full">
          <p className="text-white font-bold text-[45px] leading-[45px] text-center uppercase hidden md:block">Discover price feeds</p>
          <p className="text-white font-bold text-[45px] leading-[45px] text-center uppercase block md:hidden ">Discover Tradable Assets</p>
          <p className="mt-[5px] text-[#EDEDED] font-[300] text-[16px] leading-[17px] text-center uppercase block md:hidden ">Leverage trade crypto, stocks, and forex.</p>

          <div className="border border-white w-[290px] min-[390px]:w-[327px] border-opacity-50 mx-auto mt-[10px] md:mt-[33px]"></div>

          <section className="center slider mt-[19px] flip-card">
            <Slider {...settings}>
              <AssetsItem name="crypto" data={cryptoData} dailyChange={cryptoChg}></AssetsItem>
              <AssetsItem name="forex" data={forexData} dailyChange={forexChg}></AssetsItem>
              <AssetsItem name="stocks" data={cryptoData} dailyChange={cryptoChg}></AssetsItem>
              <AssetsItem name="defi" data={cryptoData} dailyChange={forexChg}></AssetsItem>
            </Slider>
          </section>

          <div className="border border-white w-[290px] min-[390px]:w-[327px] border-opacity-50 mx-auto mt-[19px] block md:hidden"></div>

        </div>
      </div>
  );
}

export default AssetsView;