'use client';

import Image from 'next/image';
import DOMPurify from 'dompurify';

import IconLink from '@images/IconLink.svg';
import ProjectSectionTitle from './ProjectSectionTitle';

interface ProjectDescription {
  description: string;
}

function ProjectDescription({ description }: ProjectDescription) {
  const currentUrl = window.document.location.href;

  return (
    <div>
      <ProjectSectionTitle title='프로젝트 소개' />
      <div
        className='text-[18px]'
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(String(description)),
        }}
      />

      <div className='mt-24 flex justify-between'>
        <button className='flex h-[50px] w-[50px] items-center justify-center rounded-full bg-line-alternative'>
          <Image src={IconLink} alt='link copy button' />
        </button>
        <input
          className='h-[50px] w-[calc(100%-50px-22px)] rounded-lg border border-line-normal px-6 text-[18px] text-text-alternative'
          value={currentUrl}
          readOnly
        />
      </div>
    </div>
  );
}

export default ProjectDescription;
