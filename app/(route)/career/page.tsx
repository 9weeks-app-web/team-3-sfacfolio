import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import careerBanner from '@images/career-banner.png';
import SectionHeader from '../main/(components)/SectionHeader';
import SectionWrapper from '../main/(components)/SectionWrapper';
import CardContainer from '../main/(components)/Card/CardContainer';
import JobOfferCard from '../main/(components)/Card/JobOfferCard/JobOfferCard';
import CategoryButtonWrap from '../main/(components)/CategoryButtonWrap';
import { careerCategories, portfolioCategories } from '@/constants';
import SectionSliderWrapper from '@/(route)/main/(components)/SectionSliderWrapper';
import MoreButton from '../main/(components)/MoreButton';
import TechCardCarousel from './(component)/TechCard/TechCardCarousel';
import CompanyCardCarousel from './(component)/CompanyCard/CompanyCardCarousel';
import { JobOfferDummy } from '@/dummy';

export default function page() {
  return (
    <>
      <div className='flex justify-center'>
        <Image
          src={careerBanner}
          alt='banner'
          width={1440}
          height={449}
          placeholder='blur'
        ></Image>
      </div>
      <SectionWrapper>
        <SectionHeader title='대기업을 노리는 스팩이들을 위해' />
        <SectionSliderWrapper
          className='mt-6'
          slider={<CompanyCardCarousel />}
        />
      </SectionWrapper>
      <SectionWrapper className='bg-background-primary'>
        <SectionHeader title='오직 스팩이들을 위한! 신상 New 채용공고' />
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
        <Link href={`/career/company`}>
          <MoreButton label='채용 정보 더보기' />
        </Link>
      </SectionWrapper>
      <SectionWrapper className='bg-white'>
        <SectionHeader title='맞춤 키워드로 보는 채용공고' />
        <CategoryButtonWrap
          type='button'
          gradient=' to-background-primary'
          categories={careerCategories}
          className='text-text-normal'
        />
        <CardContainer>
          {JobOfferDummy.map(jobOffer => (
            <JobOfferCard key={jobOffer.id} {...jobOffer} />
          ))}
        </CardContainer>
        <Link href={`/career/company`}>
          <MoreButton label='채용 정보 더보기' />
        </Link>
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
