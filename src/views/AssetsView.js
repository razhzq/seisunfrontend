import React from 'react';
import Slider from 'react-slick';
import AssetsItem from '../assets/AssetsItem';

const AssetsView = () => {
  const settings = {
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 4,
    speed: 500,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
		// autoplay: true,
		// autoplayspeed: 1000,
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
						<AssetsItem></AssetsItem>
						<AssetsItem></AssetsItem>
						<AssetsItem></AssetsItem>
						<AssetsItem></AssetsItem>
					</Slider>
        </div>
      </section>
    </div>
  );
}

export default AssetsView;