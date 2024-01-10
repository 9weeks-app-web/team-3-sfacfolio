import React from 'react';
import Down from '@images/Down.svg';
import Image from 'next/image';

interface ProfileDropDownFilterProps {
  filterCategory: string;
  filterOption: string;
}

function ProfileDropDownFilter({
  filterCategory,
  filterOption,
}: ProfileDropDownFilterProps) {
  return (
    <div className='flex items-center gap-[11px] text-lg'>
      <span className='text-text-alternative'>{filterCategory}</span>
      <button className='flex items-center gap-1'>
        <span>{filterOption}</span>
        <Image src={Down} alt={'down'} width={20} height={20} />
      </button>
    </div>
  );
}

export default ProfileDropDownFilter;
