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
    //infinite: false,
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
    <div className={`${styles.wrapper} bg-background-primary pb-[124px] pt-20`}>
      <Slider {...settings}>
        {banners
          ? banners.map(banner => (
              <div
                key={banner}
                className='h-[302px] cursor-pointer rounded-lg bg-background-secondary'
              >
                <Image src={banner} alt='banner-image' objectFit='cover' />
              </div>
            ))
          : [1, 2, 3, 4, 5].map(i => (
              <div
                key={i}
                className='h-[302px] cursor-pointer rounded-lg bg-background-secondary'
              >
                {i}
              </div>
            ))}
      </Slider>
    </div>
  );
}

export default BannerCarousel;
