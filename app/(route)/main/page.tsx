import React from 'react';
import MoreButton from './(components)/MoreButton';
import BannerCarousel from './(components)/(BannerCarousel)/BannerCarousel';
import SectionHeader from './(components)/SectionHeader';
import SectionWrapper from './(components)/SectionWrapper';
import SectionSliderWrapper from './(components)/SectionSliderWrapper';
import CategoryButtonWrap from './(components)/CategoryButtonWrap';
import PortfolioCard from './(components)/Card/PortfoiloCard/PortfolioCard';
import JobOfferCard from './(components)/Card/JobOfferCard/JobOfferCard';
import RealTimeContainer from '../../components/RealTime/RealTimeContainer';
import RealTimeCommunity from '../../components/RealTime/RealTimeCommunity';
import RealTimeKeyword from '../../components/RealTime/RealTimeKeyword';
import CardContainer from './(components)/Card/CardContainer';
import ABTest from './(components)/ABTest';
import FindProjectCarousel from './(components)/FindProjectCard/FindProjectCarousel';
import ProjectMatchingBanner from './(components)/FindProjectCard/ProjectMatchingBanner';

import {
  portfolioCategories,
  projectCategories,
  communityCategories,
} from '@/constants';

import { JobOfferDummy } from '@/dummy';
import { PopularKeywordsDummy_MAIN } from '@/dummy';

function MainPage() {
  return (
    <>
      <BannerCarousel />

      {/* 포트폴리오 */}
      <SectionWrapper>
        <SectionHeader title='스팩폴리오 PICK!' />
        <CategoryButtonWrap type='button' categories={portfolioCategories} />
        <CardContainer>
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </CardContainer>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader title='인기급상승 포트폴리오' />
        <CategoryButtonWrap type='button' categories={portfolioCategories} />
        <CardContainer>
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </CardContainer>
        <MoreButton label='포트폴리오 더보기' />
      </SectionWrapper>

      {/* 프로젝트 */}
      <SectionSliderWrapper
        className='overflow-hidden bg-background-primary pt-20'
        slider={<FindProjectCarousel />}
      >
        <SectionHeader title='FIND 프로젝트' className='mb-[46px]' more='/' />
        <CategoryButtonWrap
          type='button'
          gradient=' to-background-primary'
          categories={projectCategories}
          className='mb-4'
        />
      </SectionSliderWrapper>
      <SectionSliderWrapper
        className='overflow-hidden bg-background-primary pb-20'
        slider={<FindProjectCarousel mode='apply' />}
        banner={<ProjectMatchingBanner />}
      >
        <SectionHeader
          title='Speed Match Up'
          className='mb-[20px] mt-[50px]'
          more='/'
        />
      </SectionSliderWrapper>

      {/* 커뮤니티 */}
      <SectionWrapper>
        <SectionHeader title='디자인 저격수 되기! 맞춰봐 AB' more='/' />
        <ABTest />
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader title='실시간 인기 커뮤니티' more='/' />
        <CategoryButtonWrap type='button' categories={communityCategories} />
        <RealTimeContainer>
          <RealTimeCommunity title='핫한 게시글' />
          <RealTimeKeyword keywords={PopularKeywordsDummy_MAIN} />
        </RealTimeContainer>
      </SectionWrapper>

      {/* 채용 공고 */}
      <SectionWrapper className='bg-background-primary'>
        <SectionHeader title='새로 올라온 채용 공고' />
        <CategoryButtonWrap
          type='button'
          gradient=' to-background-primary'
          categories={portfolioCategories}
        />
        <CardContainer>
          {JobOfferDummy.map(jobOffer => (
            <JobOfferCard key={jobOffer.id} {...jobOffer} />
          ))}
        </CardContainer>
        <MoreButton label='채용 정보 더보기' />
      </SectionWrapper>
    </>
  );
}

export default MainPage;
