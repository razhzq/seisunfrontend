import React from 'react';
import Slider from 'react-slick';
import arbitrum from '../assets/arbitrum.png';
import polygon from '../assets/polygon.png';
import optimism from '../assets/optimism.png';
import chainlink from '../assets/chainlink.png';
import marker from '../assets/marker.png';

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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
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
    <div className="Logos px-4">
      <section className="center slider">
        <div className="py-[24px] md:py-[70px]">
          <Slider {...settings}>
						<img className="" src={arbitrum} alt="" />
						<img className="trending-img" src={polygon} alt="" />
						<img className="trending-img" src={optimism} alt="" />
						<img className="trending-img" src={chainlink} alt="" />
						<img className="trending-img" src={marker} alt="" />
					</Slider>
        </div>
      </section>
    </div>
  );
}

export default LogoView;