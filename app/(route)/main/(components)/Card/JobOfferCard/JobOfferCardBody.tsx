import React from 'react';

interface JobOfferCardBodyProps {
  category: string;
  career: string[];
  title: string;
}

export default function JobOfferCardBody({
  category,
  career,
  title,
}: JobOfferCardBodyProps) {
  return (
    <div>
      <div className='mb-3 flex gap-3 text-[12px] font-normal leading-5 text-white'>
        <div className='rounded-[4px] bg-white/20 px-3 py-1'>
          <span className='mr-2'>모집 분야</span>
          <span className='mr-2'>|</span>
          <span className='font-bold'>{category}</span>
        </div>
        <div className='rounded-[4px] bg-white/20 px-3 py-1'>
          <span className='mr-2'>경력</span>
          <span className='mr-2'>|</span>
          <span className='font-bold'>{career.join(', ')}</span>
        </div>
      </div>
      <div className='h-12 overflow-hidden text-label1 font-bold leading-6 text-white'>
        {title}
      </div>
    </div>
  );
}
