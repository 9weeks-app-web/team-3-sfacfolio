import Image from 'next/image';
import React from 'react';
import IconGoogle from '@images/IconGoogle.svg';

interface OAuthLoginProps {
  onGoogleClick: () => Promise<void>;
}

export default function OAuthLogin({ onGoogleClick }: OAuthLoginProps) {
  return (
    <div>
      <div className='mb-6 flex items-center before:flex-1 before:border-t before:border-line-normal after:flex-1 after:border-t after:border-line-normal '>
        <p className='mx-4 text-center text-sm text-text-alternative'>
          간편 로그인
        </p>
      </div>

      <div className='flex justify-center gap-6'>
        <div
          className='flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border'
          onClick={onGoogleClick}
        >
          <Image src={IconGoogle} alt='google-icon' />
        </div>
      </div>
    </div>
  );
}
