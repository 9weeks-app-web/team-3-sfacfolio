'use client';

import React, { useState } from 'react';

import ModalLocations from './(component)/ModalLocations';
import ModalJob from './(component)/ModalJob';
import ModalTech from './(component)/ModalTech';
import ModalYears from './(component)/ModalYears';
import CompanyFilterButton from './(component)/CompanyFilterButton';
import ArrowDown from '@images/ArrowDown.svg';
import Image from 'next/image';
import CardContainer from '@/(route)/main/(components)/Card/CardContainer';
import { JobOfferDummy } from '@/dummy';
import JobOfferCard from '@/(route)/main/(components)/Card/JobOfferCard/JobOfferCard';

export interface LocationType {
  location: string;
  subLocation: string;
}

export interface YearsType {
  start: number;
  end: number;
}

const conceptTagItems = [
  '키워드 전체',
  '도전적',
  '유연한',
  '컨셉추얼',
  '분석적',
  '창의적',
  '혁신적',
  '사용자중심',
  '융합적',
];

export default function CompanyPage() {
  const [currentModal, setCurrentModal] = useState<
    null | '경력' | '지역' | '직무' | '테크'
  >(null);
  const [years, setYears] = useState<YearsType>({
    start: 1,
    end: 9,
  });
  const [locations, setLocations] = useState<LocationType[]>([]);
  const [job, setJob] = useState<string[]>([]);
  const [tech, setTech] = useState<string[]>([]);
  const [conceptTag, setConceptTag] = useState('키워드 전체');

  const onClose = () => setCurrentModal(null);

  return (
    <div className='border-b border-line-normal'>
      <div className='container flex flex-col gap-8'>
        <div className='mt-[60px]'>
          <h2 className='py-2 text-title font-bold'>
            디자인 채용공고는 스팩폴리오에서
          </h2>
          <p className='py-2 text-subTitle'>
            희망 정보를 선택하여 나에게 맞는 기업을 찾아보세요!
          </p>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex gap-6'>
            <div className='relative h-[46px]'>
              <CompanyFilterButton
                text={'지역'}
                onClick={() => setCurrentModal('지역')}
                selectedFilter={locations}
              />
              {currentModal === '지역' && (
                <ModalLocations
                  data={locations}
                  setData={setLocations}
                  onClose={onClose}
                />
              )}
            </div>
            <div className='relative h-[46px]'>
              <CompanyFilterButton
                text={'직무'}
                onClick={() => setCurrentModal('직무')}
                selectedFilter={job}
              />
              {currentModal === '직무' && (
                <ModalJob data={job} setData={setJob} onClose={onClose} />
              )}
            </div>
            <div className='relative h-[46px]'>
              <CompanyFilterButton
                text={'테크'}
                onClick={() => setCurrentModal('테크')}
                selectedFilter={tech}
              />
              {currentModal === '테크' && (
                <ModalTech data={tech} setData={setTech} onClose={onClose} />
              )}
            </div>
            <div className='relative h-[46px]'>
              <CompanyFilterButton
                text={'경력'}
                onClick={() => setCurrentModal('경력')}
                selectedFilter={years}
              />
              {currentModal === '경력' && (
                <ModalYears data={years} setData={setYears} onClose={onClose} />
              )}
            </div>
          </div>
          <div className='flex items-center gap-[11px]'>
            <span className='text-lg text-text-alternative'>정렬방식</span>
            <button className='flex items-center gap-1'>
              <span>최신 순</span>
              <Image src={ArrowDown} width={20} height={20} alt='down' />
            </button>
          </div>
        </div>
        <div className='mb-4 flex flex-col gap-6'>
          <h3 className='text-subTitle font-bold'>
            내 포트폴리오의 컨셉으로 기업을 선택해 보세요
          </h3>
          <div className='flex gap-6'>
            {conceptTagItems.map((tag, idx) => (
              <button
                key={tag}
                className={`rounded-full px-4 py-3 text-label1 font-medium ${
                  tag === conceptTag
                    ? 'bg-primary-heavy text-white'
                    : 'border border-line-normal bg-background-primary text-text-normal'
                }`}
                onClick={() => setConceptTag(tag)}
              >
                {idx > 0 ? `#${tag}` : tag}
              </button>
            ))}
          </div>
        </div>
      </div>
      <section className='bg-background-primary pb-[45px] pt-8'>
        <div className='container'>
          <CardContainer>
            {JobOfferDummy.map(job => (
              <JobOfferCard
                key={job.id}
                category={job.category}
                career={job.career}
                title={job.title}
                imageUrl={job.imageUrl}
                company={job.company}
              />
            ))}
          </CardContainer>
        </div>
      </section>
    </div>
  );
}
