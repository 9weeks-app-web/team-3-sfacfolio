import Image from 'next/image';
import React, { ReactElement } from 'react';

interface CardProps {
  imageUrl: string;
  imageHover: boolean;
  badge: string;
  badgeColor: string;
  body: ReactElement;
  footer: ReactElement;
}

export default function Card({
  imageUrl,
  imageHover,
  badge,
  badgeColor,
  body,
  footer,
}: CardProps) {
  return (
    <div className='h-[350px] w-[302px] cursor-pointer'>
      <div className='group relative mb-2'>
        <div className='relative h-[302px] w-full overflow-hidden rounded-[8px]'>
          <Image src={imageUrl} alt='company-image' fill objectFit='cover' />
        </div>
        <div
          className={`before:absolute before:inset-0 before:rounded-[8px]  ${
            imageHover
              ? 'before:bg-black/0 before:transition before:duration-300 group-hover:before:bg-black/60'
              : 'before:bg-black/60'
          } `}
        ></div>

        <div className='absolute inset-0 flex h-full flex-col justify-end p-4'>
          <div
            className={`absolute left-4 top-4 inline-block rounded-[4px] p-3 text-label2 font-bold leading-[14px] text-white ${badgeColor}`}
          >
            {badge}
          </div>
          <div className={`${imageHover && 'hidden group-hover:block'}`}>
            {body}
          </div>
        </div>
      </div>
      {footer}
    </div>
  );
}
