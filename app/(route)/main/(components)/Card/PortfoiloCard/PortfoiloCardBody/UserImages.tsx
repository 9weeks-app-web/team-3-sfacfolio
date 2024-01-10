import Image from 'next/image';
import React from 'react';

interface UserImagesProps {
  workers: {
    id: number;
    name: string;
    userImage: string;
  }[];
}

export default function UserImages({ workers }: UserImagesProps) {
  if (workers.length === 1) {
    return (
      <div className='relative h-[100%] w-[100%]'>
        <Image
          src={workers[0].userImage}
          alt='user-image'
          fill
          objectFit='cover'
        />
      </div>
    );
  } else if (workers.length === 2) {
    return (
      <>
        <div className='relative h-[100%] w-[50%]'>
          <Image
            src={workers[0].userImage}
            alt='user-image'
            fill
            objectFit='cover'
          />
        </div>
        <div className='relative h-[100%] w-[50%]'>
          <Image
            src={workers[1].userImage}
            alt='user-image'
            fill
            objectFit='cover'
          />
        </div>
      </>
    );
  } else if (workers.length === 3) {
    return (
      <>
        <div className='relative h-[50%] w-[50%]'>
          <Image
            src={workers[0].userImage}
            alt='user-image'
            fill
            objectFit='cover'
          />
        </div>
        <div className='relative h-[50%] w-[50%]'>
          <Image
            src={workers[1].userImage}
            alt='user-image'
            fill
            objectFit='cover'
          />
        </div>
        <div className='relative h-[50%] w-[100%]'>
          <Image
            src={workers[2].userImage}
            alt='user-image'
            fill
            objectFit='cover'
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className='relative h-[50%] w-[50%]'>
          <Image
            src={workers[0].userImage}
            alt='user-image'
            fill
            objectFit='cover'
          />
        </div>
        <div className='relative h-[50%] w-[50%]'>
          <Image
            src={workers[1].userImage}
            alt='user-image'
            fill
            objectFit='cover'
          />
        </div>
        <div className='relative h-[50%] w-[50%]'>
          <Image
            src={workers[2].userImage}
            alt='user-image'
            fill
            objectFit='cover'
          />
        </div>
        <div className='relative h-[50%] w-[50%]'>
          <Image
            src={workers[3].userImage}
            alt='user-image'
            fill
            objectFit='cover'
          />
        </div>
      </>
    );
  }
}
