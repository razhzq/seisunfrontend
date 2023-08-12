import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import AssetsItem from '../components/AssetsItem';
import axios from 'axios';


let cryptoGraphData = [];
let forexGraphData = [];
let cnt = 0;

const AssetsView = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [forexData, setForexData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cryptoResponse, forexResponse, cryptoChangeResponse, forexChangeResponse] = await Promise.all(cnt < 24 ? [
          axios.get(`https://api2.aped.xyz/cryptos`),
          axios.get(`https://api2.aped.xyz/forex`),
          axios.get(`https://api2.aped.xyz/cryptos/dailychange`),
          axios.get(`https://api2.aped.xyz/forex/dailychange`)
        ] : [
          axios.get(`https://api2.aped.xyz/cryptos`),
          axios.get(`https://api2.aped.xyz/forex`)
        ]);

        const cryptoRes = cryptoResponse.data;
        const forexRes = forexResponse.data;

        if(cnt < 24 ) {
          cryptoGraphData.push(cryptoChangeResponse.data.cryptoDailyChange);
          forexGraphData.push(forexChangeResponse.data.forexDailyChange);
          cnt++;
        }

        setCryptoData([cryptoRes[0], cryptoRes[8], cryptoRes[1], cryptoRes[11]]);
        setForexData([forexRes[0], forexRes[1], forexRes[2], forexRes[3]]);
        
      } catch (error) {
        console.error(error);
      }
    };

    const fetchData1 = async () => {
      try {
        if( cnt >= 24 ) {
          const [cryptoChangeResponse, forexChangeResponse] = await Promise.all([
            axios.get(`https://api2.aped.xyz/cryptos/dailychange`),
            axios.get(`https://api2.aped.xyz/forex/dailychange`)
          ]);
  
          cryptoGraphData.push(cryptoChangeResponse.data.cryptoDailyChange);
          forexGraphData.push(forexChangeResponse.data.forexDailyChange);
          cnt++;
        }
        
      } catch (error) {
        console.error(error);
      }
    };

    const interval1 = setInterval(fetchData, 1000);
    const interval2 = setInterval(fetchData1, 1000);
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    }
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
        <p className="text-white font-bold text-[45px] leading-[45px] text-center uppercase hidden md:block">Discover APED Network</p>
        <p className="text-white font-bold text-[45px] leading-[45px] text-center uppercase block md:hidden ">Discover Tradable Assets</p>
        <p className="mt-[5px] text-[#EDEDED] font-[300] text-[16px] leading-[17px] text-center uppercase block md:hidden ">Leverage trade crypto, stocks, and forex.</p>

        <div className="border border-white w-[290px] min-[390px]:w-[327px] border-opacity-50 mx-auto mt-[10px] md:mt-[33px]"></div>

        <section className="center slider mt-[19px] flip-card">
          <Slider {...settings}>
            <AssetsItem name="crypto" data={cryptoData} dailyChange={cryptoGraphData}></AssetsItem>
            <AssetsItem name="forex" data={forexData} dailyChange={forexGraphData}></AssetsItem>
            <AssetsItem name="stocks" data={cryptoData} dailyChange={cryptoGraphData}></AssetsItem>
            <AssetsItem name="defi" data={cryptoData} dailyChange={forexGraphData}></AssetsItem>
          </Slider>
        </section>

        <div className="border border-white w-[290px] min-[390px]:w-[327px] border-opacity-50 mx-auto mt-[19px] block md:hidden"></div>

      </div>
    </div>
  )
};

export default AssetsView;
