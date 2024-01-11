import Image from 'next/image';
import React from 'react';
import TechBanner from '@images/TechBanner.svg';
import JobOfferCard from '@/(route)/main/(components)/Card/JobOfferCard/JobOfferCard';
import CardContainer from '@/(route)/main/(components)/Card/CardContainer';
import { JobOfferDummy } from '@/dummy';

function TechPage() {
  return (
    <div className='mb-[70px] flex flex-col items-center pb-[68px]'>
      <div className='relative h-[448px] w-full'>
        <Image
          src={TechBanner}
          alt='TechBanner'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='container mt-[60px] px-20'>
        <h2 className='py-2 text-title font-bold'>
          반려동물 1000만시대, 펫테크 기업
        </h2>
        <div className='mb-[76px] mt-6 flex flex-col gap-3 py-2 text-subTitle text-text-alternative'>
          <p>
            반려동물과 보호자의 삶을 위한 서비스를 제공하는 기업을 모아봤어요.
          </p>
          <p>
            나에게 맞는 채용공고에 지원하고, 펫테크 디자이너로 커리어를
            시작해보세요.
          </p>
        </div>
        <CardContainer>
          {JobOfferDummy.map(jobOffer => (
            <JobOfferCard key={jobOffer.id} {...jobOffer} />
          ))}
        </CardContainer>
      </div>
    </div>
  );
}

export default TechPage;
