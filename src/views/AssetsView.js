import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import AssetsItem from '../components/AssetsItem';
import axios from 'axios';

const data = [
  {
    "btc": 12.32,
  },
  {
    "btc": 320.32,
  },
  {
    "btc": 80.32,
  },
	{
    "btc": 422.12,
  },
	{
    "btc": 324.84,
  },
	{
    "btc": 122.327,
  },
	{
    "btc": 46.82,
  },
	{
    "btc": 46.0,
  },
	{
    "btc": 68.23,
  },
];

const AssetsView = () => {
  const [ apiKey, setApiKey ] = useState('1ipWpOtJ0MyGTnMppG9sLWdW6mCxdtwe');
  const [ netType, setNetType ] = useState(['BTC', 'SOL', 'ETH', 'DOT']);
  const [ cryptoData, setCryptoData ] = useState([]);
  const [ forex, setForexData ] = useState([]);
  const [ graphData, setGraphData ] = useState(data);

  useEffect(() => {
    const myInterval = setInterval( (t)=> {
      (async () => {
        const rep = await axios.get(`https://api2.aped.xyz/cryptos`);
        setCryptoData(rep.data);

        const rep1 = await axios.get(`https://api2.aped.xyz/forex`);
        setForexData(rep1.data);
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

          <div className="border border-white w-[327px] border-opacity-50 mx-auto mt-[10px] md:mt-[33px]"></div>

          <section className="center slider mt-[19px] flip-card">
            <Slider {...settings}>
              <AssetsItem name="crypto" data={cryptoData} graph={graphData}></AssetsItem>
              <AssetsItem name="forex" data={forex} graph={graphData}></AssetsItem>
              <AssetsItem name="stocks" data={cryptoData} graph={graphData}></AssetsItem>
              <AssetsItem name="defi" data={cryptoData} graph={graphData}></AssetsItem>
            </Slider>
          </section>

          <div className="border border-white w-[327px] border-opacity-50 mx-auto mt-[19px] block md:hidden"></div>

        </div>
      </div>
  );
}

export default AssetsView;