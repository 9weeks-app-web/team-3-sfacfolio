import React from 'react';
import ForgotPasswordForm from './(component)/ForgotPasswordForm';
import ForgotPasswordImage from '@images/ForgotPasswordImage.svg';
import Image from 'next/image';

export default function page() {
  return (
    <div className='flex h-full'>
      <div className='relative h-full w-[514px] shrink-0 bg-[#EBF2FF]'>
        <div className='absolute left-5 top-[85px] h-[700px] w-[700px]'>
          <Image src={ForgotPasswordImage} alt='login-image' fill />
        </div>
      </div>
      <ForgotPasswordForm />
    </div>
  );
}
