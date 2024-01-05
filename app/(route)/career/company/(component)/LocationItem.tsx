import Image from 'next/image';

import IconCategoryDelete from '@images/IconCategoryDelete.svg';

interface LocationItemProps {
  location: string;
  subLocation: string;
}

export default function LocationItem({
  location,
  subLocation,
}: LocationItemProps) {
  return (
    <div className='flex w-fit items-center justify-center rounded-full border border-line-normal bg-white px-3 py-2'>
      <p className='mr-1 h-full text-label2 font-bold text-primary-heavy'>
        {location}
      </p>
      <p className='h-full text-label2 font-bold text-primary-heavy'>
        {subLocation}
      </p>
      {subLocation !== '전국' && (
        <Image
          src={IconCategoryDelete}
          alt='delete button'
          className='ml-1.5 cursor-pointer'
        />
      )}
    </div>
  );
}
