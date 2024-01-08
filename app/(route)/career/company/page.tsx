'use client';

import React, { useState } from 'react';

import ModalLocations from './(component)/ModalLocations';
import ModalJob from './(component)/ModalJob';
import ModalTech from './(component)/ModalTech';
import ModalYears from './(component)/ModalYears';
import CompanyFilterButton from './(component)/CompanyFilterButton';

export interface LocationType {
  location: string;
  subLocation: string;
}

export interface YearsType {
  start: number;
  end: number;
}

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

  const onClose = () => setCurrentModal(null);

  return (
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
      </div>
      <div>
        <h3 className='py-2 text-subTitle font-bold'>
          내 포트폴리오의 컨셉으로 기업을 선택해 보세요
        </h3>
      </div>
    </div>
  );
}
