import React from 'react';
import MoreButton from './(components)/MoreButton/MoreButton';
import BannerCarousel from './(components)/(BannerCarousel)/BannerCarousel';
import SectionHeader from './(components)/SectionHeader';
import SectionWrapper from './(components)/SectionWrapper';
import Header from '@/components/Header';
import CategoryButtonWrap from './(components)/CategoryButtonWrap';
import PortfolioCard from './(components)/Card/PortfoiloCard/PortfolioCard';
import JobOfferCard from './(components)/Card/JobOfferCard/JobOfferCard';
import FindProjectCard from './(components)/FindProjectCard/FindProjectCard';
import RealTimeContainer from './(components)/(RealTime)/RealTimeContainer';
import RealTimeCommunity from './(components)/(RealTime)/RealTimeCommunity';
import RealTimeKeyword from './(components)/(RealTime)/RealTimeKeyword';
import CardContainer from './(components)/Card/CardContainer';
import ABTest from './(components)/ABTest';

function MainPage() {
  return (
    <>
      <Header />
      <BannerCarousel />
      <SectionWrapper>
        <SectionHeader title='스팩폴리오 PICK!' />
        <CategoryButtonWrap type='button' />
        <CardContainer>
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </CardContainer>
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeader title='인기급상승 포트폴리오' />
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
      <SectionWrapper className='bg-background-primary'>
        <SectionHeader title='FIND 프로젝트' className='mb-[50px]' more='/' />
        <CategoryButtonWrap type='button' gradient=' to-background-primary' />
        <CardContainer>
          <FindProjectCard />
        </CardContainer>
        <SectionHeader
          title='바로 시작할 수 있는 프로젝트'
          className='mt-[50px] mb-[25px]'
        />
        <CardContainer>
          <FindProjectCard mode='apply' />
        </CardContainer>
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeader title='디자인 저격수 되기! 맞춰봐 AB' more='/' />
        <ABTest />
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeader title='실시간 인기 커뮤니티' more='/' />
        <CategoryButtonWrap type='button' />
        <RealTimeContainer>
          <RealTimeCommunity title='핫한 게시글' />
          <RealTimeKeyword />
        </RealTimeContainer>
      </SectionWrapper>
      <SectionWrapper className='bg-background-primary'>
        <SectionHeader title='새로 올라온 채용 공고' />
        <CategoryButtonWrap type='button' gradient=' to-background-primary' />
        <CardContainer>
          <JobOfferCard dDay={20} />
          <JobOfferCard dDay={20} />
          <JobOfferCard dDay={20} />
          <JobOfferCard dDay={20} />
        </CardContainer>
        <MoreButton label='채용 정보 더보기' />
      </SectionWrapper>
    </>
  );
}

export default MainPage;
