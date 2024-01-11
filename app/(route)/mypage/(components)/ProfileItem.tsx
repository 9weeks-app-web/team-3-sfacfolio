import React from 'react';

interface ProfileItemProps {
  category: string;
  count: number;
}

function ProfileItem({ category, count }: ProfileItemProps) {
  return (
    <div className='flex flex-col items-center gap-[2px]'>
      <span className='text-subTitle font-bold leading-6 text-white'>
        {count}
      </span>
      <span className='text-text-assitive'>{category}</span>
    </div>
  );
}

export default ProfileItem;
