import React from 'react';
import MoreButton from './(components)/MoreButton/MoreButton';
import BannerCarousel from './(components)/(BannerCarousel)/BannerCarousel';
import SectionHeader from './(components)/SectionHeader';

function MainPage() {
  return (
    <div>
      <MoreButton label='더보기' />
      <BannerCarousel />
      <SectionHeader title='섹션헤더' />
    </div>
  );
}

export default MainPage;
