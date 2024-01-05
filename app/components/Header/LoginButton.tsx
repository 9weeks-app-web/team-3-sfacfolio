import Link from 'next/link';
import React from 'react';

function LoginButton() {
  return (
    <Link href={'/signin'}>
      <button className='h-10 w-[120px] rounded-lg border border-primary-heavy text-label1 font-bold text-primary-heavy'>
        로그인
      </button>
    </Link>
  );
}

export default LoginButton;
