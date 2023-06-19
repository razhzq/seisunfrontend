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
						<img className="!w-[274px] !h-[74px]" src={arbitrum} alt="" />
						<img className="trending-img !w-[191px] h-[39px]" src={polygon} alt="" />
						<img className="trending-img !w-[204px] h-[56px]" src={zksync} alt="" />
						<img className="trending-img !w-[195px] h-[61px]" src={chainlink} alt="" />
						<img className="trending-img !w-[250px] h-[145px]" src={marker} alt="" />
					</Slider>
        </div>
      </section>
    </div>
  );
}

export default LogoView;