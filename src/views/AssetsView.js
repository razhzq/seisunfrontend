import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import AssetsItem from '../components/AssetsItem';
import axios from 'axios';

const AssetsView = () => {
  const [ crypto, setCrypto ] = useState([]);

  useEffect(() => {
    // const myInterval = setInterval(() => {
      try {
        axios.get('https://api2.aped.xyz/cryptos').then(function (res) {
          console.log(res);
        })
      } catch (err) {
        console.log(err)
      }
    // }, 1000);

    // return () => {
    //   clearInterval(myInterval);
    // }
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
          <p className="mt-[5px] text-[#EDEDED] font-[300] text-[16px] leading-[17px] text-center uppercase block md:hidden ">Discover Tradable Assets</p>

          <div className="border border-white w-[327px] border-opacity-50 mx-auto mt-[10px] md:mt-[33px]"></div>

          <section className="center slider mt-[19px] flip-card">
            <Slider {...settings}>
              <AssetsItem name="crypto"></AssetsItem>
              <AssetsItem name="forex"></AssetsItem>
              <AssetsItem name="stocks"></AssetsItem>
              <AssetsItem name="defi"></AssetsItem>
            </Slider>
          </section>

          <div className="border border-white w-[327px] border-opacity-50 mx-auto mt-[19px] block md:hidden"></div>

        </div>
      </div>
  );
}

export default AssetsView;