import React from 'react';
import SignUpStageTwoImage from '@images/SignUpStageTwoImage.svg';
import Image from 'next/image';
import InputWithLabel from '@/components/Input/InputWithLabel';
import Input from '@/components/Input/Input';
import { emailRegex, passwordRegex } from '@/constants/regex';
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { FormData } from '../SignUpForm';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/utils/firebase';

interface StageTwoProps {
  setStage: React.Dispatch<React.SetStateAction<number>>;
  register: UseFormRegister<FormData>;
  watch: UseFormWatch<FormData>;
  errors: FieldErrors<FormData>;
  setValue: UseFormSetValue<FormData>;
}

export default function StageTwo({
  setStage,
  register,
  watch,
  errors,
  setValue,
}: StageTwoProps) {
  const [email, password, confirmedPassword] = watch([
    'email',
    'password',
    'confirmedPassword',
  ]);

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

  const confirmedPasswordRegister = register('confirmedPassword', {
    required: '비밀번호를 다시 입력해주세요.',
    validate: (value: string | undefined) => {
      return value === password || '비밀번호가 일치 하는지 확인해주세요.';
    },
  });

  const onClick = async () => {
    if (errors.email || errors.password || errors.confirmedPassword) return;
    const q = query(collection(db, 'users'), where('email', '==', email));
    const data = await getDocs(q);
    const newData = data.docs.map(doc => ({
      ...doc.data(),
    }));

    if (newData.length !== 0) {
      setValue('email', '');
      return alert('이미 존재하는 닉네임 입니다.');
    }

    setStage(prev => prev + 1);
  };

  return (
    <div className='flex h-[calc(100vh-170px)]'>
      <div className='relative h-full w-[514px] shrink-0 bg-[#EBF2FF]'>
        <div className='absolute left-[-40px] top-[119px] h-[678px] w-[678px]'>
          <Image src={SignUpStageTwoImage} alt='login-image' fill />
        </div>
      </div>

      <div className='z-10 flex h-[calc(100vh-170px)] w-full items-center justify-center bg-white'>
        <div className='w-[447px]'>
          <div className='mb-[34px]'>
            <h4 className='text-title font-bold'>회원가입</h4>
          </div>

          <InputWithLabel
            label='이메일'
            type='email'
            register={emailRegister}
            placeholder='이메일 형식으로 입력해주세요.'
            className={`mb-6`}
            error={errors.email && 'border-red-400'}
          />

          <InputWithLabel
            label='비밀번호 입력'
            type='password'
            register={passwordRegister}
            placeholder='8~16자의 영문 대/소문자, 숫자, 특수문자를 이용해주세요.'
            className='mb-2'
            error={errors.password && 'border-red-400'}
          />
          <Input
            type='password'
            register={confirmedPasswordRegister}
            placeholder='확인을 위해 비밀번호를 재입력해주세요.'
            className='mb-2'
            error={errors.confirmedPassword && 'border-red-400'}
          />
          <p className='mb-[260px] text-label2 font-medium text-text-alternative'>
            비밀번호: 8~16자로 영문 대/소문자, 숫자, 특수문자를 포함하여
            입력해주세요.
          </p>

          <button
            type='button'
            disabled={
              (!email ||
                !password ||
                !confirmedPassword ||
                errors.email ||
                errors.password ||
                errors.confirmedPassword ||
                password !== confirmedPassword) as any
            }
            onClick={onClick}
            className='flex h-12 w-full items-center justify-center rounded-[8px] bg-primary-heavy py-4 text-white disabled:bg-slate-300'
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
