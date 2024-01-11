import Image from 'next/image';
import React from 'react';
import HeartIcon from '@images/HeartIcon.svg';
import Bookmark from '@images/Bookmark.svg';

function CommunityDetailLikeAndSaveButton({ mode }: { mode: 'like' | 'save' }) {
  return (
    <button className='flex gap-2.5 rounded-lg border border-line-normal bg-background-primary px-3 py-2 text-lg leading-6 text-text-alternative'>
      {mode === 'like' ? (
        <>
          <Image src={HeartIcon} width={24} height={24} alt='like' />
          <span>좋아요</span>
        </>
      ) : (
        <>
          <Image src={Bookmark} width={24} height={24} alt='save' />
          <span>저장</span>
        </>
      )}
    </button>
  );
}

export default CommunityDetailLikeAndSaveButton;
