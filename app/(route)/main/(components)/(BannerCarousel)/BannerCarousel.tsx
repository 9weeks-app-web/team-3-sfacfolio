'use client';
import Image from 'next/image';
import Slider from 'react-slick';
import styles from '@/style/bannerCarousel.module.css';

function BannerCarousel() {
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
    <div
      className={`${styles.wrapper} max-w-[1440px] mx-auto  pl-20 pt-20 pb-[124px] bg-background-primary`}
    >
      <Slider {...settings}>
        {[1, 2, 3, 4, 5].map(i => (
          <div
            key={i}
            style={{ width: 604 }}
            className='h-[300px] bg-background-secondary rounded-lg'
          >
            {/* <Image src={} alt=''/> */}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BannerCarousel;
