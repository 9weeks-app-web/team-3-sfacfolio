import Image from 'next/image';
import React from 'react';
import IconPlus from '../../../../../public/assets/images/IconPlus.svg';

interface MoreButtonProps {
  label: string;
}

export default function MoreButton({ label }: MoreButtonProps) {
  return (
    <button className='flex items-center rounded-[6px] border border-line-normal px-6 py-4'>
      <span className='mr-1 text-[18px] font-medium leading-6 text-text-alternative'>
        {label}
      </span>
      <span>
        <Image src={IconPlus} alt='plus-icon' />
      </span>
    </button>
  );
}
