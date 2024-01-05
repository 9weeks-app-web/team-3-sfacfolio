import React, { useState } from 'react';
import SignUpStageTwoImage from '@images/SignUpStageTwoImage.svg';
import Image from 'next/image';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '@/utils/firebase';
import {
  Timestamp,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form';
import InputWithLabel from '@/components/Input/InputWithLabel';
import Input from '@/components/Input/Input';
import { emailRegex, nameRegex, passwordRegex } from '@/constants/regex';

type FormData = {
  email: string;
  name: string;
  password: string;
  confirmedPassword: string;
};

interface StageTwoProps {
  setStage: React.Dispatch<React.SetStateAction<number>>;
}

export default function StageTwo({ setStage }: StageTwoProps) {
  const [checkedDuplicate, setCheckedDuplicate] = useState(false);
  const { register, handleSubmit, reset, getValues } = useForm<FormData>({
    defaultValues: {
      email: '',
      name: '',
      password: '',
      confirmedPassword: '',
    },
  });

  const emailRegister = register('email', {
    required: '이메일을 입력해주세요.',
    pattern: { value: emailRegex, message: '잘못된 이메일 형식입니다.' },
  });

  const nameRegister = register('name', {
    required: '닉네임을 입력해주세요.',
    pattern: {
      value: nameRegex,
      message: '닉네임은 한글 및 영문으로 10자 이내로 입력해주세요.',
    },
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
    validate: (value: string) => {
      const { password } = getValues();
      return value === password || '비밀번호가 일치 하는지 확인해주세요.';
    },
  });

  const onSubmit: SubmitHandler<FormData> = async data => {
    if (!checkedDuplicate) {
      return alert('닉네임 중복 확인을 해주세요.');
    }

    const { email, password, name } = data;
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await updateProfile(result.user, {
        displayName: name,
      });

      await setDoc(doc(db, 'users', result.user.uid), {
        uid: result.user.uid,
        email,
        name,
        photoUrl: result.user.photoURL,
        photoPath: '',
        createdAt: Timestamp.fromDate(new Date()),
      });
      setStage(prev => prev + 1);
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
    if (error.name) {
      return alert(error.name.message);
    }
    if (error.password) {
      return alert(error.password.message);
    }
    if (error.confirmedPassword) {
      return alert(error.confirmedPassword.message);
    }
  };

  const checkDuplicate: SubmitHandler<FormData> = async data => {
    const { name } = data;
    try {
      const q = query(collection(db, 'users'), where('name', '==', name));
      const data = await getDocs(q);
      const newData = data.docs.map(doc => ({
        ...doc.data(),
      }));
      if (newData.length === 0) {
        alert('사용 가능한 닉네임 입니다.');
        setCheckedDuplicate(true);
      } else {
        alert('이미 존재하는 닉네임 입니다.');
        reset();
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const onCheckDuplicateError = (error: FieldErrors<FormData>) => {
    if (error.name) {
      alert(error.name.message);
    } else {
      alert('사용 가능한 닉네임 입니다.');
    }
  };

  return (
    <div className='flex h-full'>
      <div className='relative h-full w-[514px] shrink-0 bg-[#EBF2FF]'>
        <div className='absolute left-[-40px] top-[119px] h-[678px] w-[678px]'>
          <Image src={SignUpStageTwoImage} alt='login-image' fill />
        </div>
      </div>

      <div className='z-10 flex h-full w-full items-center justify-center bg-white'>
        <form onSubmit={handleSubmit(onSubmit, onError)} className='w-[447px]'>
          <div className='mb-[34px]'>
            <h4 className='text-title font-bold'>회원가입</h4>
          </div>

          <InputWithLabel
            label='이메일'
            type='email'
            register={emailRegister}
            placeholder='이메일 형식으로 입력해주세요.'
            className='mb-6'
          />

          <div className='mb-6 flex flex-col gap-3'>
            <label
              htmlFor={'name'}
              className='text-[18px] font-bold text-text-assitive'
            >
              닉네임
            </label>
            <div className='flex h-12'>
              <Input
                type='text'
                register={nameRegister}
                placeholder='한글 및 영문으로 10자 이내로 입력해주세요.'
                className='mb-2 mr-2'
              />
              <button
                type='button'
                onClick={handleSubmit(checkDuplicate, onCheckDuplicateError)}
                className='w-[120px] shrink-0 rounded-[8px] bg-text-normal py-3 font-bold text-white'
              >
                중복 확인
              </button>
            </div>
          </div>

          <InputWithLabel
            label='비밀번호 입력'
            type='password'
            register={passwordRegister}
            placeholder='8~16자의 영문 대/소문자, 숫자, 특수문자를 이용해주세요.'
            className='mb-2'
          />
          <Input
            type='password'
            register={confirmedPasswordRegister}
            placeholder='확인을 위해 비밀번호를 재입력해주세요.'
            className='mb-2'
          />
          <p className='mb-[260px] text-label2 font-medium text-text-alternative'>
            비밀번호: 8~16자로 영문 대/소문자, 숫자, 특수문자를 포함하여
            입력해주세요.
          </p>

          <button
            type='submit'
            className='flex h-12 w-full items-center justify-center rounded-[8px] bg-primary-heavy py-4 text-white disabled:bg-slate-300'
          >
            회원가입하기
          </button>
        </form>
      </div>
    </div>
  );
}
