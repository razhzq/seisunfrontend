import React from 'react';
import Slider from 'react-slick';
import arbitrum from '../assets/Trade/arbitrum.svg';
import polygon from '../assets/Trade/polygon.png';
import zksync from '../assets/Trade/zksync.svg';
import chainlink from '../assets/Trade/chainlink.svg';
import marker from '../assets/Trade/marker.svg';

const LogoView = () => {
  const settings = {
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 5,
    speed: 500,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
		autoplay: true,
		autoplayspeed: 1000,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
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
    <div className="logos max-w-[1440px] mx-auto">
      <section className="center slider">
        <div>
          <Slider {...settings}>
						<img className="!w-[251.77px] !h-[51px]" src={arbitrum} alt="" />
						<img className="!w-[186px] h-[39.11px]" src={polygon} alt="" />
						<img className="!w-[196px] h-[38.32px]" src={zksync} alt="" />
						<img className="!w-[191.53px] h-[58.84px]" src={chainlink} alt="" />
						<img className="!w-[199px] h-[35.12px]" src={marker} alt="" />
					</Slider>
        </div>
      </section>
    </div>
  );
}

export default LogoView;