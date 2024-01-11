import Image from 'next/image';
import React from 'react';
import MemberRecruitTag from './MemberRecruitTag';
import ProjectTypeTag from './ProjectTypeTag';
import IconBookmark from '@images/IconBookmark.svg';

export interface MemberRecruit {
  position: string;
  status: string | number;
}

interface ProjectCardProps {
  period: number;
  title: string;
  imgUrl: string;
  memeberRecruit: MemberRecruit[];
}

function ProjectCard({
  period,
  imgUrl,
  title,
  memeberRecruit,
}: ProjectCardProps) {
  return (
    <div className='flex h-[302px] w-[628px] overflow-hidden rounded-lg border border-line-normal'>
      <div className='relative h-[302px] w-[302px] shrink-0 p-4'>
        <Image src={imgUrl} alt='projectImage' fill objectFit='cover' />
        <div className='absolute top-4 flex w-[270px] items-center justify-between'>
          <ProjectTypeTag type='온라인' />
          <Image src={IconBookmark} alt='bookmark' className='cursor-pointer' />
        </div>
      </div>
      <div className='flex h-[302px] cursor-pointer flex-col justify-between p-[15px]'>
        <div className='flex flex-col gap-[15px]'>
          <div className='leading-4 text-text-alternative'>
            {period}주 프로젝트
          </div>
          <div className='text-lg font-bold leading-6 text-text-normal'>
            {title}
          </div>
        </div>
        <div className='flex flex-wrap gap-2'>
          {memeberRecruit.map(info => (
            <MemberRecruitTag
              position={info.position}
              status={info.status}
              key={info.position}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
