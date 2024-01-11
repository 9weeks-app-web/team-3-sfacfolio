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
import ProjectMatchingBanner from './(components)/FindProjectCard/ProjectMatchingBanner';
import { portfolioCategories } from '@/constants';
import { JobOfferDummy, PortfolioDummy } from '@/dummy';
import SpacQuizWrap from './(components)/SpacQuiz/SpacQuizWrap';
import PortfolioCardCarousel from './(components)/PortfolioCard/PortfolioCardCarousel';
import ProjectCard from './(components)/ProjectCard/ProjectCard';
import { projectDummy } from '@/dummy/project';

function MainPage() {
  return (
    <>
      <BannerCarousel />

      {/* 맞춤 추천 포트폴리오 */}
      <SectionWrapper>
        <SectionHeader
          title='김스팩 님이 좋아할 만한 작품을 감상해 보세요!'
          subTitle='맞춤 추천 포트폴리오'
          more='/'
        />
        <CategoryButtonWrap type='button' categories={portfolioCategories} />
        <CardContainer>
          {PortfolioDummy.slice(0, 8).map(portfolio => (
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
      <SectionWrapper>
        <SectionHeader
          title='김스팩 님이 원하던 바로 그 프로젝트!'
          subTitle='프로젝트 어디서 찾지'
          className='mb-6'
          more='/project'
        />
        <div className='grid grid-cols-2 gap-6'>
          {projectDummy.slice(0, 4).map((item, i) => (
            <ProjectCard
              key={i}
              title={item.title}
              imgUrl={item.imgUrl}
              period={item.period}
              memberRecruit={item.memberRecruit}
              workingMethod={item.workingMethod}
            />
          ))}
        </div>
      </SectionWrapper>
      <ProjectMatchingBanner />

      {/* 스팩퀴즈 */}
      <SectionWrapper>
        <SectionHeader
          title='스팩이들을 위한 디자인 인사이트!'
          subTitle='이번 주 스팩퀴즈'
          more='/quiz'
        />
        <SpacQuizWrap />
      </SectionWrapper>

      {/* 커뮤니티 */}
      <SectionWrapper className='bg-background-primary'>
        <SectionHeader
          title='커뮤니티에서 스팩이들과 이야기 나눠보세요!'
          subTitle='스팩이들이 관심갖는 토픽'
          more='/community'
        />
        <RealTimeContainer>
          <RealTimeCommunity />
          <RealTimeKeyword type='main' />
        </RealTimeContainer>
      </SectionWrapper>

      {/* 채용 공고 */}
      <SectionWrapper>
        <SectionHeader
          subTitle='스나이퍼팩토리가 취뽀를 기원합니다!'
          title='따끈 따끈 디자인 채용공고'
          more='/career'
        />
        <CategoryButtonWrap type='button' categories={portfolioCategories} />
        <CardContainer>
          {JobOfferDummy.slice(4).map(jobOffer => (
            <JobOfferCard key={jobOffer.id} {...jobOffer} />
          ))}
        </CardContainer>
      </SectionWrapper>
    </>
  );
}

export default MainPage;
