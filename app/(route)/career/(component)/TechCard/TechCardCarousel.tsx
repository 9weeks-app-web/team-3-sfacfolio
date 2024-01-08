'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '@/style/findProjectCarousle.module.css';
import TechCard from './TechCard';

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  variableWidth: true,
  arrows: false,
};

function TechCardCarousel() {
  return (
    <div
      className={`${styles.sliderWrapper} w-full px-[calc((100%-1280px)/2)]`}
    >
      <Slider {...settings}>
        {[1, 2, 3, 4, 5].map(n => (
          <TechCard key={n} />
        ))}
      </Slider>
    </div>
  );
}

export default TechCardCarousel;
