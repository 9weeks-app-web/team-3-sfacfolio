'use client';
import Slider from 'react-slick';
import PortfolioUserCard from './PortfolioUserCard';
import Style from '@/style/PortfolioUserCarousel.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const owners = [
  {
    name: 'Duke Mong',
    position: 'BX 디자이너',
    image:
      'https://images.unsplash.com/photo-1602734846297-9299fc2d4703?q=80&w=3436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    portfolios: [
      '/assets/images/Portfolio/Portfolio_thumb_1.png',
      '/assets/images/Portfolio/Portfolio_thumb_2.png',
      '/assets/images/Portfolio/Portfolio_thumb_3.png',
      '/assets/images/Portfolio/Portfolio_thumb_4.png',
    ],
  },
  {
    name: 'HYEONJEONG Kim',
    position: 'UX 디자이너',
    image:
      'https://images.unsplash.com/photo-1500259783852-0ca9ce8a64dc?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    portfolios: [
      '/assets/images/Portfolio/Portfolio_thumb_1.png',
      '/assets/images/Portfolio/Portfolio_thumb_2.png',
      '/assets/images/Portfolio/Portfolio_thumb_3.png',
      '/assets/images/Portfolio/Portfolio_thumb_4.png',
    ],
  },
  {
    name: 'Jaehoon Lee',
    position: '프로덕트 매니저',
    image:
      'https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    portfolios: [
      '/assets/images/Portfolio/Portfolio_thumb_1.png',
      '/assets/images/Portfolio/Portfolio_thumb_2.png',
      '/assets/images/Portfolio/Portfolio_thumb_3.png',
      '/assets/images/Portfolio/Portfolio_thumb_4.png',
    ],
  },
  {
    name: 'Ynha KIM',
    position: '프론트 개발자',
    image:
      'https://images.unsplash.com/photo-1492681290082-e932832941e6?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    portfolios: [
      '/assets/images/Portfolio/Portfolio_thumb_1.png',
      '/assets/images/Portfolio/Portfolio_thumb_2.png',
      '/assets/images/Portfolio/Portfolio_thumb_3.png',
      '/assets/images/Portfolio/Portfolio_thumb_4.png',
    ],
  },
];

function PortfolioUserSection() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
  };

  return (
    <div className='w-full bg-text-normal py-[44px]'>
      <div className='container pb-6'>
        <span className='text-title font-bold text-white'>
          인기 크리에이터들
        </span>
      </div>
      <div className={`${Style.sliderWrapper} px-[calc((100%-1280px)/2)]`}>
        <Slider {...settings}>
          {owners.map((owner, idx) => (
            <PortfolioUserCard key={idx} owner={owner} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default PortfolioUserSection;
