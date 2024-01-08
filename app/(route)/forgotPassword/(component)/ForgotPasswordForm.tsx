'use client';

import React from 'react';
import InputWithLabel from '@/components/Input/InputWithLabel';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import { useRouter } from 'next/navigation';
import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form';
import { emailRegex } from '@/constants/regex';

type FormData = {
  email: string;
};

export default function ForgotPasswordForm() {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      email: '',
    },
  });

  const emailRegister = register('email', {
    required: '이메일을 입력해주세요.',
    pattern: { value: emailRegex, message: '잘못된 이메일 형식입니다.' },
  });

  const onSubmit: SubmitHandler<FormData> = async data => {
    const { email } = data;
    try {
      await sendPasswordResetEmail(auth, email);
      reset();
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      router.push('/signin');
    }
  };

  const onError = (error: FieldErrors<FormData>) => {
    if (error.email) {
      return alert(error.email.message);
    }
  };

  return (
    <div className='z-10 flex h-[calc(100vh-170px)] w-full items-center justify-center bg-white'>
      <form onSubmit={handleSubmit(onSubmit, onError)} className='w-[447px]'>
        <div className='mb-[34px]'>
          <h4 className='text-title font-bold'>비밀번호 변경하기</h4>
          <p className='font-[18px] text-[#828282]'>
            비밀번호를 재설정하기 위한 이메일을 입력해주세요.
          </p>
        </div>

        <InputWithLabel
          label='이메일'
          type='text'
          placeholder='이메일을 입력해주세요.'
          register={emailRegister}
          className='mb-[300px]'
        />

        <button
          type='submit'
          className='mb-4 flex h-12 w-full items-center justify-center rounded-[8px] bg-primary-heavy py-4 text-white'
        >
          비밀번호 재설정 이메일 보내기
        </button>
      </form>
    </div>
  );
}
