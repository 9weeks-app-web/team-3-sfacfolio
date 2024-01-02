'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Icons } from '@images';
import CategoryButton from './CategoryButton';
import FindProjectTag from './FindProjectCard/FindProjectTag';

interface CategoryButtonWrapProps {
  type: 'button' | 'tag';
  tags?: string[];
  gradient?: string;
  categories?: { title: string }[];
}

function CategoryButtonWrap({
  type,
  tags,
  gradient = ' to-white',
  categories = [],
}: CategoryButtonWrapProps) {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [isOverflow, setIsOverflow] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0]?.title);

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
    <div className='relative mt-6 w-full'>
      {isAtStart ? null : (
        <div className='absolute left-0 top-[50%] z-10 flex h-full translate-y-[-50%] justify-start'>
          <div
            className={`pointer-events-none absolute left-0 top-[50%] translate-y-[-50%] bg-gradient-to-l from-transparent ${gradient} ${
              type === 'button' ? ' h-full w-40' : ' h-12 w-[84px]'
            }`}
          ></div>
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
        className='hide-scrollbar relative w-full overflow-x-auto scroll-smooth'
      >
        <div
          className={`flex w-max ${type === 'button' ? 'gap-2' : 'gap-[9px]'}`}
        >
          {type === 'button'
            ? categories.map(category => (
                <CategoryButton
                  key={category.title}
                  title={category.title}
                  active={category.title === activeCategory}
                  onClick={() => handleCategoryClick(category.title)}
                />
              ))
            : tags?.map(tag => <FindProjectTag tag={tag} key={tag} />)}
        </div>
      </div>

      {isAtEnd ? null : (
        <div className='absolute right-0 top-[50%] z-10 flex h-full translate-y-[-50%] justify-end'>
          <div
            className={`pointer-events-none absolute right-0 top-[50%] translate-y-[-50%] bg-gradient-to-r from-transparent${gradient}${
              type === 'button' ? ' h-full w-40' : ' h-12 w-[84px]'
            }`}
          ></div>
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
