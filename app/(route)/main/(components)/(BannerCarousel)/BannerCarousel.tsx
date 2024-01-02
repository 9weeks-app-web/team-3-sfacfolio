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
    pauseOnHover: true,
  };

  return (
    <div className={`${styles.wrapper} bg-background-primary`}>
      <div className='mx-auto max-w-[1440px] pb-[124px] px-20 pt-20'>
        <Slider {...settings}>
          {banners
            ? banners.map(banner => (
                <div
                  key={banner}
                  style={{ width: 604 }}
                  className='h-[300px] cursor-pointer rounded-lg bg-background-secondary'
                >
                  <Image src={banner} alt='banner-image' objectFit='cover' />
                </div>
              ))
            : [1, 2, 3, 4, 5].map(i => (
                <div
                  key={i}
                  style={{ width: 604 }}
                  className='h-[300px] cursor-pointer rounded-lg bg-background-secondary'
                ></div>
              ))}
        </Slider>
      </div>
    </div>
  );
}

export default BannerCarousel;
