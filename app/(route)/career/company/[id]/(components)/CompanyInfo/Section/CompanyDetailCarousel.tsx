'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import ArrowLeftIcon from '@/components/ArrowLeftIcon';
import ArrowRightIcon from '@/components/ArrowRightIcon';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CompanyDetailCarouselPropsType {
  images: string[];
}

function CompanyDetailCarousel({ images }: CompanyDetailCarouselPropsType) {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex: number, newIndex: number) =>
      setCurrentSlide(newIndex + 1),
  };

  return (
    <div className='relative h-[544px] bg-white rounded-lg overflow-hidden'>
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index} className='relative h-[544px] cursor-pointer'>
            <Image src={image} alt='banner' fill />
          </div>
        ))}
      </Slider>
      {/* 인디케이터 */}
      <div className='absolute bottom-6 right-6 flex items-center gap-4'>
        <div
          onClick={() => sliderRef.current?.slickPrev()}
          className='cursor-pointer'
        >
          <ArrowLeftIcon width={24} height={24} fill={'#ffffff'} />
        </div>
        <span className='flex items-center text-xl font-medium text-white'>
          {currentSlide} / {images.length}
        </span>
        <div
          onClick={() => sliderRef.current?.slickNext()}
          className='cursor-pointer'
        >
          <ArrowRightIcon width={24} height={24} fill={'#ffffff'} />
        </div>
      </div>
    </div>
  );
}

export default CompanyDetailCarousel;
