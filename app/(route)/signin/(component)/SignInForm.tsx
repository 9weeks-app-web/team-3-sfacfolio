'use client';

import InputWithLabel from '@/components/Input/InputWithLabel';
import React, { useState } from 'react';
import { auth, db } from '@/utils/firebase';
import {
  GoogleAuthProvider,
  browserLocalPersistence,
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { Timestamp, doc, getDoc, setDoc } from 'firebase/firestore';
import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form';
import { emailRegex, passwordRegex } from '@/constants/regex';
import OAuthLogin from './OAuthLogin';
import Addons from './Addons';

type FormData = {
  email: string;
  password: string;
};

export default function SignInForm() {
  const router = useRouter();
  const [autoLogin, setAutoLogin] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const emailRegister = register('email', {
    required: '이메일을 입력해주세요.',
    pattern: { value: emailRegex, message: '잘못된 이메일 형식입니다.' },
  });

  const passwordRegister = register('password', {
    required: '비밀번호를 입력해주세요.',
    pattern: {
      value: passwordRegex,
      message:
        '비밀번호는 8~16자로 영문 대/소문자, 숫자, 특수문자를 포함하여 입력해주세요.',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async data => {
    const { email, password } = data;
    try {
      setPersistence(
        auth,
        autoLogin ? browserLocalPersistence : browserSessionPersistence,
      ).then(async () => {
        const result = await signInWithEmailAndPassword(auth, email, password);
        if (result.user) {
          reset();
          router.push('/');
        }
      });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const onError = (error: FieldErrors<FormData>) => {
    if (error.email) {
      return alert(error.email.message);
    }
    if (error.password) {
      return alert(error.password.message);
    }
  };

  const onGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      setPersistence(
        auth,
        autoLogin ? browserLocalPersistence : browserSessionPersistence,
      ).then(async () => {
        const result = await signInWithPopup(auth, provider);
        if (result.user) {
          reset();
          router.push('/');
        }

        const docRef = doc(db, 'users', result.user.uid);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
          await setDoc(docRef, {
            uid: result.user.uid,
            name: result.user.displayName,
            email: result.user.email,
            photoUrl: result.user.photoURL,
            photoPath: '',
            createdAt: Timestamp.fromDate(new Date()),
          });
        }
      });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <div className='z-10 flex h-[calc(100vh-68px)] w-full items-center justify-center bg-white'>
      <form onSubmit={handleSubmit(onSubmit, onError)} className='w-[447px]'>
        <h4 className='mb-20 text-center text-title font-bold'>
          스나이퍼 팩토리에서 교육받고
          <br /> 스팩폴리오로 취업, 이직에 성공해보세요
        </h4>

        <InputWithLabel
          label='이메일'
          type='text'
          placeholder='이메일을 입력해주세요.'
          className='mb-6'
          register={emailRegister}
        />
        <InputWithLabel
          label='비밀번호'
          type='password'
          placeholder='비밀번호를 입력해주세요.'
          className='mb-10'
          register={passwordRegister}
        />

        <button className='mb-4 flex h-12 w-full items-center justify-center rounded-[8px] bg-primary-heavy py-4 text-white'>
          로그인
        </button>

        <Addons setAutoLogin={setAutoLogin} />
        <OAuthLogin onGoogleClick={onGoogleClick} />
      </form>
    </div>
  );
}
