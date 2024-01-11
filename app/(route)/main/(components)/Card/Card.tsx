import Image from 'next/image';
import React, { ReactElement } from 'react';
import IconBookmark from '@images/IconBookmark.svg';

interface CardProps {
  imageUrl: string;
  imageHover: boolean;
  badge: string;
  share?: boolean;
  body: ReactElement;
  footer?: ReactElement;
}

// imageHover 네이밍 변경 필요
export default function Card({
  imageUrl,
  imageHover,
  badge,
  share,
  body,
  footer,
}: CardProps) {
  return (
    <div className='w-[302px] cursor-pointer'>
      <div className='group relative mb-2 overflow-hidden rounded-[8px]'>
        <div
          className={`relative h-[302px] w-full overflow-hidden ${
            imageHover || 'duration-300 group-hover:scale-105'
          }`}
        >
          <Image
            src={imageUrl}
            alt='company-image'
            fill
            objectFit='cover'
            className=''
          />
        </div>
        <div
          className={`before:absolute before:inset-0 before:rounded-[8px] ${
            imageHover
              ? 'before:bg-black/0 before:transition before:duration-300 group-hover:before:bg-black/60'
              : 'from-black/0 to-black/60 before:bg-gradient-to-b'
          } `}
        ></div>

        <div className='absolute inset-0 flex h-full flex-col justify-end p-4'>
          <div
            className={`absolute left-4 top-4 inline-block rounded-[4px] bg-white/20 p-3 text-label2 font-bold leading-[14px] text-white shadow-lg ${
              imageHover && 'opacity-0 duration-300 group-hover:opacity-100'
            }`}
          >
            {badge}
          </div>
          {share && (
            <div className={`absolute right-4 top-4 h-6 w-6`}>
              <Image src={IconBookmark} alt='bookmark' />
            </div>
          )}
          <div
            className={`${
              imageHover && 'opacity-0 duration-300 group-hover:opacity-100'
            }`}
          >
            {body}
          </div>
        </div>
      </div>
      {footer && footer}
    </div>
  );
}
