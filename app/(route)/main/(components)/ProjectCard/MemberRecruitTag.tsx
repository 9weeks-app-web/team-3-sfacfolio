import React from 'react';
import { MemberRecruit } from './ProjectCard';

function MemberRecruitTag({ position, status }: MemberRecruit) {
  return (
    <div
      className={`flex w-fit gap-1.5 rounded-md border border-line-normal px-3 py-2 text-sm leading-[18px] ${
        typeof status === 'string' && 'text-text-assitive'
      }`}
    >
      <span
        className={`${typeof status === 'number' && 'text-text-alternative'}`}
      >
        {position}
      </span>
      <span className={`${typeof status === 'number' && 'text-primary-weak'}`}>
        {status}
      </span>
    </div>
  );
}

export default MemberRecruitTag;
