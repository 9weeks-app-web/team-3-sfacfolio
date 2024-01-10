'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '@/style/findProjectCarousle.module.css';
import PortfolioCard from '../Card/PortfoiloCard/PortfolioCard';
import { PortfolioDummy } from '@/dummy';

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 3,
  variableWidth: true,
  arrows: false,
};

function PortfolioCardCarousel() {
  return (
    <div>
      <div className='absolute z-10 h-[350px] w-[calc((100%-168px)/2)] bg-background-primary'>
        <div className='ml-auto flex h-full w-[554px] flex-col justify-between bg-background-primary py-8'>
          <div>
            <p className='text-[18px] font-medium'>
              너도 <span className='text-primary-heavy'>PICK</span> 될 수 있어!
            </p>
            <p className='text-title font-bold text-text-normal'>
              스팩폴리오 Pick Top10
            </p>
          </div>
          <button className='h-[58px] w-[300px] rounded-[8px] bg-[#171717] text-[18px] font-bold text-white'>
            스팩폴리오에 자랑하기
          </button>
        </div>
      </div>
      <div
        className={`${styles.sliderWrapper} w-full px-[calc((100%-120px)/2)]`}
      >
        <Slider {...settings}>
          {PortfolioDummy.map(portfolio => (
            <PortfolioCard key={portfolio.id} {...portfolio} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default PortfolioCardCarousel;
