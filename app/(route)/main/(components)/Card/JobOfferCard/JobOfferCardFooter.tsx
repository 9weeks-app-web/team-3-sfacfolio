import Image from 'next/image';
import React from 'react';

interface JobOfferCardFooterProps {
  company: string;
  logo: string;
}

export default function JobOfferCardFooter({
  company,
  logo,
}: JobOfferCardFooterProps) {
  return (
    <div className='flex items-center'>
      <div className='relative mr-3 h-10 w-10 overflow-hidden rounded-full bg-[#d9d9d9]'>
        <Image src={logo} alt='company-image' fill objectFit='cover' />
      </div>
      <p className='text-label2 font-medium text-text-normal'>{company}</p>
    </div>
  );
}
