import Image from 'next/image';
import React from 'react';

function ProfileUtilButton({ url }: { url: string }) {
  return (
    <button className='flex h-10 w-10 items-center justify-center rounded-full border border-line-normal bg-white p-2'>
      <Image src={url} alt='profile-button' width={24} height={24} />
    </button>
  );
}

export default ProfileUtilButton;
