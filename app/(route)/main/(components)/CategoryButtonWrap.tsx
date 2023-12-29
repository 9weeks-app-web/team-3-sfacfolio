'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Icons } from '../../../../public/assets/images';
import CategoryButton from './CategoryButton';

const categories = [
  { title: '디자인 전체', active: true },
  { title: 'UX/UI 디자인' },
  { title: '그래픽 디자인' },
  { title: '일러스트레이션 디자인' },
  { title: '디지털아트' },
  { title: '캐릭터 디자인' },
  { title: '제품/패키지 디자인' },
  { title: '포토그래피' },
  { title: '브랜딩/편집' },
  { title: '영상/모션그래픽' },
  { title: '타이포그래피' },
  { title: '파인아트' },
];

function CategoryButtonWrap() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [isOverflow, setIsOverflow] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0].title);

  const updateScrollPosition = () => {
    const { current } = scrollContainer;
    if (current) {
      setIsAtStart(current.scrollLeft === 0);
      setIsAtEnd(
        current.scrollWidth === current.scrollLeft + current.offsetWidth,
      );
    }
  };

  const handleScroll = (direction: string) => {
    if (isScrolling) return;

    const { current } = scrollContainer;
    if (current) {
      setIsScrolling(true);

      if (direction === 'prev') {
        current.scrollLeft -= 400;
      } else {
        current.scrollLeft += 400;
      }

      setTimeout(() => {
        setIsScrolling(false);
        updateScrollPosition();
      }, 400);
    }
  };

  const checkIfOverflow = () => {
    const { current } = scrollContainer;
    if (current) {
      const containerWidth = current.offsetWidth;
      const contentWidth = current.scrollWidth;

      setIsAtStart(current.scrollLeft === 0);
      setIsAtEnd(current.scrollWidth === current.scrollLeft + containerWidth);
      setIsOverflow(contentWidth > containerWidth);
    }
  };

  const handleCategoryClick = (title: string) => {
    setActiveCategory(title);
  };

  useEffect(() => {
    checkIfOverflow();
    window.addEventListener('resize', checkIfOverflow);
    return () => window.removeEventListener('resize', checkIfOverflow);
  }, []);

  useEffect(() => {
    const { current } = scrollContainer;
    if (current) {
      current.addEventListener('scroll', updateScrollPosition);
      return () => current.removeEventListener('scroll', updateScrollPosition);
    }
  }, []);

  return (
    <div className='relative w-full my-2'>
      {isAtStart ? null : (
        <div className='h-full flex justify-start absolute top-[50%] -translate-y-[50%] left-0 z-10'>
          <div className='w-40 h-full bg-gradient-to-l from-transparent to-white pointer-events-none absolute top-[50%] -translate-y-[50%] left-0'></div>
          <Image
            src={Icons.categoryArrowLeft}
            alt='category slide prev button'
            onClick={() => handleScroll('prev')}
            className='z-10 cursor-pointer'
          />
        </div>
      )}

      <div
        ref={scrollContainer}
        className='relative w-full overflow-x-auto hide-scrollbar scroll-smooth'
      >
        <div className='w-max flex gap-2'>
          {categories.map(category => (
            <CategoryButton
              key={category.title}
              title={category.title}
              active={category.title === activeCategory}
              onClick={() => handleCategoryClick(category.title)}
            />
          ))}
        </div>
      </div>

      {isAtEnd ? null : (
        <div className='h-full flex justify-end absolute top-[50%] -translate-y-[50%] right-0 z-10'>
          <div className='w-40 h-full bg-gradient-to-r from-transparent to-white pointer-events-none absolute top-[50%] -translate-y-[50%] right-0'></div>
          <Image
            src={Icons.categoryArrowRight}
            alt='category slide next button'
            onClick={() => handleScroll('next')}
            className='z-10 cursor-pointer'
          />
        </div>
      )}
    </div>
  );
}

export default CategoryButtonWrap;
