import React from 'react';
import LoginImage from '@images/LoginImage.svg';
import Image from 'next/image';
import SignInForm from './(component)/SignInForm';

function SigninPage() {
  return (
    <div className='flex h-full'>
      <div className='relative h-full w-[514px] shrink-0 bg-[#EBF2FF]'>
        <div className='absolute left-5 top-[85px] h-[700px] w-[700px]'>
          <Image src={LoginImage} alt='login-image' fill />
        </div>
      </div>
      <SignInForm />
    </div>
  );
}

export default SigninPage;
