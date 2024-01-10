import React from 'react';
import MoreButton from './(components)/MoreButton';
import BannerCarousel from './(components)/(BannerCarousel)/BannerCarousel';
import SectionHeader from './(components)/SectionHeader';
import SectionWrapper from './(components)/SectionWrapper';
import SectionSliderWrapper from './(components)/SectionSliderWrapper';
import CategoryButtonWrap from '../../components/CategoryButtonWrap';
import PortfolioCard from './(components)/Card/PortfoiloCard/PortfolioCard';
import JobOfferCard from './(components)/Card/JobOfferCard/JobOfferCard';
import RealTimeContainer from '../../components/RealTime/RealTimeContainer';
import RealTimeCommunity from '../../components/RealTime/RealTimeCommunity';
import RealTimeKeyword from '../../components/RealTime/RealTimeKeyword';
import CardContainer from './(components)/Card/CardContainer';
import FindProjectCarousel from './(components)/FindProjectCard/FindProjectCarousel';
import ProjectMatchingBanner from './(components)/FindProjectCard/ProjectMatchingBanner';
import { portfolioCategories, projectCategories } from '@/constants';
import { JobOfferDummy, PortfolioDummy } from '@/dummy';
import SpacQuizWrap from './(components)/SpacQuiz/SpacQuizWrap';
import PortfolioCardCarousel from './(components)/PortfolioCard/PortfolioCardCarousel';

function MainPage() {
  return (
    <>
      <BannerCarousel />

      {/* 맞춤 추천 포트폴리오 */}
      <SectionWrapper>
        <SectionHeader title='스팩폴리오 PICK!' />
        <CategoryButtonWrap type='button' categories={portfolioCategories} />
        <CardContainer>
          {PortfolioDummy.map(portfolio => (
            <PortfolioCard key={portfolio.id} {...portfolio} />
          ))}
        </CardContainer>
      </SectionWrapper>

      {/* 스팩폴리오 Pick */}
      <SectionSliderWrapper
        className='relative overflow-hidden bg-background-primary py-[80px]'
        slider={<PortfolioCardCarousel />}
      ></SectionSliderWrapper>

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

      {/* 스팩퀴즈 */}
      <SectionWrapper>
        <SectionHeader title='스팩이들을 위한 디자인 인사이트!' more='/' />
        <SpacQuizWrap />
      </SectionWrapper>

      {/* 커뮤니티 */}
      <SectionWrapper className='bg-background-primary'>
        <SectionHeader title='실시간 인기 커뮤니티' more='/community' />
        <RealTimeContainer>
          <RealTimeCommunity />
          <RealTimeKeyword type='main' />
        </RealTimeContainer>
      </SectionWrapper>

      {/* 채용 공고 */}
      <SectionWrapper>
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
