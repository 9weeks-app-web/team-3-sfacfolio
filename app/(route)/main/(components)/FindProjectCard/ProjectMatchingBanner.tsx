import React from 'react';
import Image from 'next/image';

function ProjectMatchingBanner() {
  return (
    <div className='flex h-40 w-full items-center justify-between bg-background-primary py-6 text-text-normal'>
      <div className='container flex items-center justify-between'>
        <div className='flex items-center gap-2.5'>
          <Image
            src={
              'https://s3-alpha-sig.figma.com/img/5832/3f7c/3649e2df9b26b5f705cdeba70f5013ca?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AZUtEeVUtbuKwya7cx17CxvKDaql~TjWisDUdbiNvsWzWxprrG-ibV0dWK1zw0SMjXzoBCmMjX34l2SNZNgTx~4n7iUjYylARnIeNT~M5wiBIjRO9lLbVvw0Q2c1omGynPoJOKc35u04r3X4V0urrwEAzlY4QwmzoXuwXK8kknCQQ2AheAAykk7BAQGX~MtcePBGcMDPZeNuMya~Ur2n61T7u6hoH4YtG5pOYxSnvVFZ9j5iV4US-OlNjpa5A0ZcKw2sYLRy4dk~lASEBQpScNdhFv~lEuOao~xvWnl2NU2pdOD6AQfMRRkcxhru1hp6QwcV1O-ElIWUm7UEggXp8Q_'
            }
            alt='Rocket'
            width={94}
            height={94}
          />
          <div className='flex flex-col gap-2 leading-6'>
            <div className='text-xl font-bold'>
              원하는 프로젝트가 없으신가요?
            </div>
            <div className='text-lg'>
              직접 프로젝트를 만들고 최고의 팀원과 프로젝트를 진행해 보세요!
            </div>
          </div>
        </div>
        <button className='flex w-[312px] justify-center rounded-lg bg-primary-heavy py-4 font-bold leading-4 text-white'>
          프로젝트 만들러가기
        </button>
      </div>
    </div>
  );
}

export default ProjectMatchingBanner;
