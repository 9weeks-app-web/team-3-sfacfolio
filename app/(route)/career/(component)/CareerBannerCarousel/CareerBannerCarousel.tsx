'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import styles from '@/style/careerBannerCarousel.module.css';
import Start from '@images/Start.svg';
import Pause from '@images/Pause.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const dummyBanners = [
  'https://s3-alpha-sig.figma.com/img/2a40/57ec/f5e4f7acc74bb7b545193fc8b885e6b1?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KXFEzFBy5It6KyMdIeqNLr49Meo1TWVZedI5llcJwhzVOYeEbfWHdC8AZgj0-cYqpxbIR9BgUgxDaR6KNoTYPigTM2QFs9jsohQTz-vQTNhLNoYCoRG3s~lPW~6OXxCoDrsNSJmDwgQd~GP1rOrbbfnPzAGSXDmUCTPtXblqAsUp-V3Bs70gv3z1MhRcay2NKYfiQQKb--owOZUVZU8XWn8YdnG1GA-6XIMGQfM8cwceSRHwAfLj-JXLJws~S0BUEeMjgcHyWjkyEzrDegCEz9papPLL4zCFE9MgaKczh4uXvVh7YPirXuuiFsQ5br3bkDLPao5YlF7kwSML1Z1ewg__',
  'https://s3-alpha-sig.figma.com/img/853b/dbe0/1939b7a7d511ebb1e0b2a5117553c1ff?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bn8adFi802lBLgFvbHo5GQd3qoupqCKnhkY1QLINAmBV3YVy2seRTkuIapPs~6b9c5WCq7Tqv-~1yaW8k-7PCLcQul-FFYxuvXpDCA18Qbl6M1bgb5KPBnMXLXDewbZt0MbgCn5rKKmYAXsyZbtjofRB0g3v5srblfUfXhcjJoFs4lxLCf8lB~WyRBrwVChiAx0WoF~SNr0wRXvXWr-87MvEIYwNhXaSnJDb3Isidfa0i9rqU9WviXgR0KszjJl~R3IpGA34d6yDpow06X-N2R-vTc0IV4R2xv9qXTb9cG4ckykvCvSoS6attvfy8n93PITNViKCZ~Qhdp4v~56aOQ__',
  'https://s3-alpha-sig.figma.com/img/6ded/fe7a/1cfeb854809f31cd683a2065f3899f2f?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j-FButxEbKv4yvWuz7rR0DrlmiXhqN8EoxfrOlAovk0Ck5ZPyLzdisMQ3idRVC4gAo4kzPsrhJXemEj6JPeSz1jIH9WVxksdmAlJEWmpRCIXTu3r78wTroSLeYPkRNsdSPteAHAIdCbmkLfJV1-GDf6d8YSdAJDQg6al0vqe2ITNP8NK4eJH8zwO2jVnujm52FhIf7s370Iz6WzXBX5v6ac7TBkvEHi0cuZ1OHy-yGN1kbS5Lrkkn5NuxrIjZ4K2BicB5GL1F0JKVbEc7EbOWVIV-A35FBudDP~x9sRh98p1W1YHyko6geYQsHKeA5vLLqlQ5bUtsqmUyZYSrKKsrQ__',
];

interface BannerCarouselPropsType {
  banners?: string[];
}

function CareerBannerCarousel({
  banners = dummyBanners,
}: BannerCarouselPropsType) {
  const sliderRef = useRef<Slider>(null);
  const [isPlay, setIsPlay] = useState(true);

  const handleButtonClick = () => {
    if (isPlay) {
      sliderRef.current?.slickPause();
    } else {
      sliderRef.current?.slickPlay();
    }
    setIsPlay(pre => !pre);
  };

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    autoplay: true,
    centerMode: true,
    pauseOnHover: false,
    appendDots: (dots: any) => (
      <ul>
        <li className='cursor-pointer pr-2'>
          <Image
            src={isPlay ? Pause : Start}
            alt='start'
            onClick={handleButtonClick}
          />
        </li>
        {dots}
      </ul>
    ),
    dotsClass: 'custom_dots',
  };

  return (
    <div className={`${styles.wrapper}`}>
      <Slider {...settings} ref={sliderRef}>
        {banners.map(banner => (
          <div
            key={banner}
            className='relative h-[449px] cursor-pointer bg-background-secondary outline-none'
          >
            <Image src={banner} alt='banner-image' fill objectFit='fit' />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CareerBannerCarousel;
