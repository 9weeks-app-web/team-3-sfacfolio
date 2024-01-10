import React from 'react';
import SectionHeader from '../main/(components)/SectionHeader';
import SectionWrapper from '../main/(components)/SectionWrapper';
import CardContainer from '../main/(components)/Card/CardContainer';
import JobOfferCard from '../main/(components)/Card/JobOfferCard/JobOfferCard';
import CategoryButtonWrap from '../../components/CategoryButtonWrap';
import { careerCategories, portfolioCategories } from '@/constants';
import SectionSliderWrapper from '@/(route)/main/(components)/SectionSliderWrapper';
import TechCardCarousel from './(component)/TechCard/TechCardCarousel';
import CompanyCardCarousel from './(component)/CompanyCard/CompanyCardCarousel';
import { JobOfferDummy } from '@/dummy';
import CareerBannerCarousel from './(component)/CareerBannerCarousel/CareerBannerCarousel';

export default function page() {
  return (
    <>
      <CareerBannerCarousel />

      <SectionSliderWrapper
        className='overflow-hidden py-[80px]'
        slider={<CompanyCardCarousel />}
      >
        <SectionHeader title='대기업 채용공고' className='mb-6' />
      </SectionSliderWrapper>
      <SectionWrapper className='bg-background-primary'>
        <SectionHeader title='New 채용공고' more={'/career/company'} />
        <CategoryButtonWrap
          type='button'
          gradient=' to-background-primary'
          categories={portfolioCategories}
        />
        <CardContainer>
          {JobOfferDummy.slice(0, 4).map(jobOffer => (
            <JobOfferCard key={jobOffer.id} {...jobOffer} />
          ))}
        </CardContainer>
      </SectionWrapper>
      <SectionWrapper className='bg-white'>
        <SectionHeader title='키워드 채용공고' more={'/career/company'} />
        <CategoryButtonWrap
          type='button'
          gradient=' to-background-primary'
          categories={careerCategories}
        />
        <CardContainer>
          {JobOfferDummy.map(jobOffer => (
            <JobOfferCard key={jobOffer.id} {...jobOffer} />
          ))}
        </CardContainer>
      </SectionWrapper>
      <SectionSliderWrapper
        className='overflow-hidden bg-background-primary py-20'
        slider={<TechCardCarousel />}
      >
        <SectionHeader
          title='요즘 뜨는 테크로 보는 채용공고'
          className='mb-6'
        />
      </SectionSliderWrapper>
    </>
  );
}
