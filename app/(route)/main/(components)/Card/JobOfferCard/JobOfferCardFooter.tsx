import React from 'react';

interface JobOfferCardFooterProps {
  company: string;
}

export default function JobOfferCardFooter({
  company,
}: JobOfferCardFooterProps) {
  return (
    <div className='flex items-center'>
      <div className='mr-3 h-10 w-10 rounded-full bg-[#d9d9d9]'>
        {/* <Image src={} alt='company-image' fill objectFit='cover' /> */}
      </div>
      <p className='text-label2 font-medium text-text-normal'>{company}</p>
    </div>
  );
}
