import React from 'react';

interface FindProjectCardLabelProps {
  type: 'recruit' | 'period';
}

const labelOption = {
  recruit: {
    text: '모집기간',
    bg: 'bg-primary-assitive',
    color: 'text-primary-heavy',
  },
  period: {
    text: '프로젝트 기간',
    bg: 'bg-secondary-assitive',
    color: 'text-secondary-heavy',
  },
};

function FindProjectCardLabel({ type }: FindProjectCardLabelProps) {
  return (
    <div
      className={`flex w-fit items-center gap-1 rounded p-3 text-label1 ${labelOption[type].bg} ${labelOption[type].color}`}
    >
      <span className='font-bold'>{labelOption[type].text}</span>
      <span>|</span>
      <span className='text-label3'>4일 남음</span>
    </div>
  );
}

export default FindProjectCardLabel;
