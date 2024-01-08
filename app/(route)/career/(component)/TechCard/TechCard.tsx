import React from 'react';
import TechCardLogo1 from '@images/TechCardLogo1.svg';
import TechCardLogo2 from '@images/TechCardLogo2.svg';
import TechCardLogo3 from '@images/TechCardLogo3.svg';
import TechCardLogo4 from '@images/TechCardLogo4.svg';
import Image from 'next/image';

export default function TechCard() {
  return (
    <div className='h-[302px] w-[490px] cursor-pointer overflow-hidden rounded-[8px] bg-white'>
      <div className='relative h-[180px]'>
        <div className='relative h-full w-full overflow-hidden'>
          <Image
            src={
              'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=4170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            alt='card-image'
            width={490}
            height={180}
            objectFit='cover'
          />
        </div>
        <div className='absolute bottom-0 left-0 h-full w-full bg-black/60 px-6 pt-[108px] text-white'>
          <p className='mb-2 font-bold'>펫테크</p>
          <p className='text-label1 text-text-disable'>
            반려동물 1000만시대! 반려인들의 시선을 사로잡아보아요
          </p>
        </div>
      </div>
      <div className='flex h-[122px] w-full items-center gap-3 px-6 py-4'>
        <div className='h-[90px] w-[90px] rounded-[8px] border border-line-normal'>
          <Image src={TechCardLogo1} alt='logo' />
        </div>
        <div className='h-[90px] w-[90px] rounded-[8px] border border-line-normal'>
          <Image src={TechCardLogo2} alt='logo' />
        </div>
        <div className='h-[90px] w-[90px] rounded-[8px] border border-line-normal'>
          <Image src={TechCardLogo3} alt='logo' />
        </div>
        <div className='h-[90px] w-[90px] rounded-[8px] border border-line-normal'>
          <Image src={TechCardLogo4} alt='logo' />
        </div>
        <span className='text-[20px] text-text-alternative'>+12</span>
      </div>
    </div>
  );
}
