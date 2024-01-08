'use client';
import React from 'react';
import Slider from 'react-slick';
import FindProjectCard, { FindProjectCardProps } from './FindProjectCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '@/style/findProjectCarousle.module.css';

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: false,
};

function FindProjectCarousel({ mode = 'view' }: FindProjectCardProps) {
  return (
    <div
      className={`${styles.sliderWrapper} w-full px-[calc((100%-1280px)/2)]`}
    >
      <Slider {...settings}>
        {[1, 2, 3, 4, 5].map(n => (
          <FindProjectCard key={n} mode={mode} />
        ))}
      </Slider>
    </div>
  );
}

export default FindProjectCarousel;
