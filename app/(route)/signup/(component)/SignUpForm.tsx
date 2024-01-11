'use client';

import React, { useState } from 'react';
import StageOne from './(SignUpStage)/StageOne';
import StageTwo from './(SignUpStage)/StageTwo';
import StageThree from './(SignUpStage)/StageThree';
import StageFour from './(SignUpStage)/StageFour';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Timestamp, doc, setDoc } from 'firebase/firestore';
import { auth, db } from '@/utils/firebase';

export type FormData = {
  terms: {
    [key: string]: boolean;
  };
  email: string;
  name: string;
  password?: string;
  confirmedPassword?: string;
  interests: {
    [key: string]: boolean;
  };
  proposal: {
    [key: string]: boolean;
  };
};

export default function SignUpForm() {
  const [stage, setStage] = useState(0);
  const [checkedDuplicate, setCheckedDuplicate] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      terms: {
        terms1: false,
        terms2: false,
        terms3: false,
        terms4: false,
      },
      email: '',
      password: '',
      confirmedPassword: '',
      name: '',
      interests: {
        디지털아트: false,
        UXUI디자인: false,
        그래픽디자인: false,
        타이포그래피: false,
        일러스트레이션: false,
        편집디자인: false,
        캐릭터디자인: false,
        영상모션그래픽: false,
        포토그래피: false,
      },
      proposal: {
        proposal1: false,
        proposal2: false,
        proposal3: false,
      },
    },
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormData> = async data => {
    const { email, password, name } = data;
    if (!email || !password || !name || !checkedDuplicate) return;

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const newData = { ...data };
      delete newData.password;
      delete newData.confirmedPassword;

      await updateProfile(result.user, {
        displayName: name,
      });

      await setDoc(doc(db, 'users', result.user.uid), {
        uid: result.user.uid,
        ...newData,
        photoUrl: result.user.photoURL,
        photoPath: '',
        createdAt: Timestamp.fromDate(new Date()),
      });

      await auth.signOut();
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const array = [
    {
      id: 1,
      elem: <StageOne setStage={setStage} setValue={setValue} />,
    },
    {
      id: 2,
      elem: (
        <StageTwo
          setStage={setStage}
          register={register}
          watch={watch}
          errors={errors}
          setValue={setValue}
        />
      ),
    },
    {
      id: 3,
      elem: (
        <StageThree
          setStage={setStage}
          register={register}
          watch={watch}
          setValue={setValue}
          checkedDuplicate={checkedDuplicate}
          setCheckedDuplicate={setCheckedDuplicate}
        />
      ),
    },
    {
      id: 4,
      elem: <StageFour />,
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
      {array[stage].elem}
    </form>
  );
}
