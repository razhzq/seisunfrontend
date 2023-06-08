import React from 'react';
import Slider from 'react-slick';
import AssetsItem from '../components/AssetsItem';

const AssetsView = () => {
  const settings = {
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 4,
    speed: 500,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    swipe: true,
		// autoplay: true,
		// autoplayspeed: 1000,
    responsive: [
      {
        breakpoint: 1440,
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
    <div className="assets px-1 flex flex-col justify-center py-[190px]">
      <p className="text-white font-bold text-[45px] leading-[45px] text-center uppercase ">Discover<br/>Tradable Assets</p>

      <div className="border border-white w-[327px] border-opacity-50 mx-auto mt-[33px]"></div>

      <section className="center slider mt-[19px]">
        <Slider {...settings}>
          <AssetsItem name="crypto"></AssetsItem>
          <AssetsItem name="forex"></AssetsItem>
          <AssetsItem name="stocks"></AssetsItem>
          <AssetsItem name="defi"></AssetsItem>
        </Slider>
      </section>
    </div>
  );
}

export default AssetsView;