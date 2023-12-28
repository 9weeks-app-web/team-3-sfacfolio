import React from 'react';
import Slider from 'react-slick';
import { IconType } from 'react-icons';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

interface ArrowProps {
  customStyle?: string;
  icon?: IconType;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function CarouselTest() {
  const settings = {
    // dots: true,
    // dotsClass: 'dots_custom',

    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <NextArrow
        icon={MdOutlineKeyboardArrowRight}
        customStyle='absolute top-[50%] -translate-y-[50%] right-2 cursor-pointer hover:opacity-50'
      />
    ),
    prevArrow: (
      <PrevArrow
        icon={MdOutlineKeyboardArrowLeft}
        customStyle='absolute top-[50%] -translate-y-[50%] left-2 cursor-pointer hover:opacity-50 z-10'
      />
    ),
  };

  return (
    <Slider {...settings}>
      <div className='h-[300px] bg-red-400'>Slide 1</div>
      <div className='h-[300px] bg-blue-400'>Slide 2</div>
      <div className='h-[300px] bg-green-400'>Slide 3</div>
      <div className='h-[300px] bg-purple-400'>Slide 4</div>
      <div className='h-[300px] bg-pink-400'>Slide 5</div>
      <div className='h-[300px] bg-rose-400'>Slide 6</div>
    </Slider>
  );
}

const NextArrow = ({ customStyle, onClick, icon: Icon }: ArrowProps) => {
  return (
    <div className={customStyle} onClick={onClick}>
      {Icon && <Icon size={30} />}
    </div>
  );
};

const PrevArrow = ({ customStyle, onClick, icon: Icon }: ArrowProps) => {
  return (
    <div className={customStyle} onClick={onClick}>
      {Icon && <Icon size={30} />}
    </div>
  );
};
