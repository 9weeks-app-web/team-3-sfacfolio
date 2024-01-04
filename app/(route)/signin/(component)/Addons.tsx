import Link from 'next/link';
import React from 'react';

interface AddonsProps {
  setAutoLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Addons({ setAutoLogin }: AddonsProps) {
  return (
    <div className='mb-[60px] flex items-center justify-between'>
      <div className='inline-flex h-[18px] w-[133px] items-center justify-start gap-1.5'>
        <input
          type='checkbox'
          onChange={() => setAutoLogin(prev => !prev)}
          className='h-[18px] w-[18px] outline-[#dcdcdc]'
        />
        <div className='text-text-normal'>자동로그인</div>
      </div>
      <div className='flex items-center gap-5 text-text-alternative'>
        <Link href={'/signup'}>회원가입</Link>
        <div className='h-4 w-[1px] bg-line-normal'></div>
        <Link href={'/signup'}>이메일 찾기</Link>
        <div className='h-4 w-[1px] bg-line-normal'></div>
        <Link href={'/forgotPassword'}>비밀번호 찾기</Link>
      </div>
    </div>
  );
}
