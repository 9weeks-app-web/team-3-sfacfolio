'use client';
import Image from 'next/image';
import Slider from 'react-slick';
import styles from '@/style/bannerCarousel.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface BannerCarouselPropsType {
  banners?: string[];
}

function BannerCarousel({ banners }: BannerCarouselPropsType) {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    autoplay: true,
    centerMode: true,
  };

  return (
    <div className={`${styles.wrapper} pt-20 pb-[124px] bg-background-primary`}>
      <Slider {...settings}>
        {banners
          ? banners.map(banner => (
              <div
                key={banner}
                className='cursor-pointer h-[302px] bg-background-secondary rounded-lg'
              >
                <Image src={banner} alt='banner-image' objectFit='cover' />
              </div>
            ))
          : [1, 2, 3, 4, 5].map(i => (
              <div
                key={i}
                className='cursor-pointer h-[302px] bg-background-secondary rounded-lg'
              >
                {i}
              </div>
            ))}
      </Slider>
    </div>
  );
}

export default BannerCarousel;
