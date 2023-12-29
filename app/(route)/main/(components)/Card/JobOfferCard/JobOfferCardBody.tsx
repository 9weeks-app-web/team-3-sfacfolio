import React from 'react';

export default function JobOfferCardBody() {
  return (
    <div>
      <div className='mb-3 flex gap-3 text-[12px] font-normal leading-5 text-white'>
        <div className='rounded-[4px] bg-white/20 px-3 py-1'>
          <span className='mr-2'>모집 분야</span>
          <span className='mr-2'>|</span>
          <span className='font-bold'>UX</span>
        </div>
        <div className='rounded-[4px] bg-white/20 px-3 py-1'>
          <span className='mr-2'>경력</span>
          <span className='mr-2'>|</span>
          <span className='font-bold'>신입, 1~3년차</span>
        </div>
      </div>
      <div className='h-12 overflow-hidden text-label1 font-bold leading-6 text-white'>
        타이틀타이틀타이틀타이틀타이틀타이틀타이틀
      </div>
    </div>
  );
}
