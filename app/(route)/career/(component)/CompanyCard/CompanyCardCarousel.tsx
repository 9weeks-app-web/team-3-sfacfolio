'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '@/style/findProjectCarousle.module.css';
import JobOfferCard from '@/(route)/main/(components)/Card/JobOfferCard/JobOfferCard';
import { JobOfferDummy } from '@/dummy';

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 3,
  variableWidth: true,
  arrows: false,
};

function CompanyCardCarousel() {
  return (
    <div
      className={`${styles.sliderWrapper} w-full px-[calc((100%-1280px)/2)]`}
    >
      <Slider {...settings}>
        {JobOfferDummy.map(jobOffer => (
          <JobOfferCard key={jobOffer.id} {...jobOffer} />
        ))}
      </Slider>
    </div>
  );
}

export default CompanyCardCarousel;
