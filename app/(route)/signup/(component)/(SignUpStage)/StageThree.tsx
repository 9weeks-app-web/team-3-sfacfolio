import Image from 'next/image';
import React from 'react';
import SignUpStageThreeImage from '@images/SignUpStageThreeImage.svg';
import Input from '@/components/Input/Input';
import {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { FormData } from '../SignUpForm';
import { nameRegex } from '@/constants/regex';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/utils/firebase';

interface StageThreeProps {
  setStage: React.Dispatch<React.SetStateAction<number>>;
  register: UseFormRegister<FormData>;
  watch: UseFormWatch<FormData>;
  setValue: UseFormSetValue<FormData>;
  checkedDuplicate: boolean;
  setCheckedDuplicate: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function StageThree({
  setStage,
  register,
  watch,
  setValue,
  checkedDuplicate,
  setCheckedDuplicate,
}: StageThreeProps) {
  const [name, interests, proposal] = watch(['name', 'interests', 'proposal']);

  const nameRegister = register('name', {
    required: '닉네임을 입력해주세요.',
    pattern: {
      value: nameRegex,
      message: '닉네임은 한글 및 영문으로 10자 이내로 입력해주세요.',
    },
  });

  const checkDuplicate = async () => {
    try {
      if (!name) throw new Error('닉네임을 입력해주세요.');
      if (name.length > 10)
        throw new Error('닉네임은 10자 이내로 입력해주세요.');

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
        setValue('name', '');
        setCheckedDuplicate(false);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <div className='flex h-[calc(100vh-170px)]'>
      <div className='relative h-full w-[514px] shrink-0 bg-[#EBF2FF]'>
        <div className='absolute left-[-40px] top-[119px] h-[678px] w-[678px]'>
          <Image src={SignUpStageThreeImage} alt='login-image' fill />
        </div>
      </div>

      <div className='z-10 flex h-[calc(100vh-170px)] w-full items-center justify-center bg-white'>
        <div className='w-[447px]'>
          <div className='mb-[34px]'>
            <h4 className='text-title font-bold'>정보입력</h4>
          </div>

          <div className='mb-[36px] flex flex-col gap-3'>
            <label
              htmlFor={'name'}
              className='text-[18px] font-bold text-text-alternative'
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
                onClick={checkDuplicate}
                className='w-[120px] shrink-0 rounded-[8px] bg-text-normal py-3 font-bold text-white'
              >
                중복 확인
              </button>
            </div>
          </div>

          <div className='mb-9'>
            <label className='mb-0.5 text-[18px] font-bold text-text-alternative'>
              관심 분야
            </label>
            <p className='mb-5 text-text-assitive'>
              관심 분야를 설정하면 맞춤 추천을 받을 수 있어요!
            </p>
            <div className='grid grid-cols-3 gap-x-3 gap-y-4'>
              <label className='flex items-center gap-1.5'>
                <input
                  type='checkbox'
                  className='h-[18px] w-[18px]'
                  onClick={() =>
                    setValue('interests', {
                      ...interests,
                      디지털아트: !interests.디지털아트,
                    })
                  }
                />
                디지털아트
              </label>
              <label className='flex items-center gap-1.5'>
                <input
                  type='checkbox'
                  className='h-[18px] w-[18px]'
                  onClick={() =>
                    setValue('interests', {
                      ...interests,
                      UXUI디자인: !interests.UXUI디자인,
                    })
                  }
                />
                UX/UI 디자인
              </label>
              <label className='flex items-center gap-1.5'>
                <input
                  type='checkbox'
                  className='h-[18px] w-[18px]'
                  onClick={() =>
                    setValue('interests', {
                      ...interests,
                      그래픽디자인: !interests.그래픽디자인,
                    })
                  }
                />
                그래픽 디자인
              </label>
              <label className='flex items-center gap-1.5'>
                <input
                  type='checkbox'
                  className='h-[18px] w-[18px]'
                  onClick={() =>
                    setValue('interests', {
                      ...interests,
                      타이포그래피: !interests.타이포그래피,
                    })
                  }
                />
                타이포그래피
              </label>
              <label className='flex items-center gap-1.5'>
                <input
                  type='checkbox'
                  className='h-[18px] w-[18px]'
                  onClick={() =>
                    setValue('interests', {
                      ...interests,
                      일러스트레이션: !interests.일러스트레이션,
                    })
                  }
                />
                일러스트레이션
              </label>
              <label className='flex items-center gap-1.5'>
                <input
                  type='checkbox'
                  className='h-[18px] w-[18px]'
                  onClick={() =>
                    setValue('interests', {
                      ...interests,
                      편집디자인: !interests.편집디자인,
                    })
                  }
                />
                편집 디자인
              </label>
              <label className='flex items-center gap-1.5'>
                <input
                  type='checkbox'
                  className='h-[18px] w-[18px]'
                  onClick={() =>
                    setValue('interests', {
                      ...interests,
                      캐릭터디자인: !interests.캐릭터디자인,
                    })
                  }
                />
                캐릭터디자인
              </label>
              <label className='flex items-center gap-1.5'>
                <input
                  type='checkbox'
                  className='h-[18px] w-[18px]'
                  onClick={() =>
                    setValue('interests', {
                      ...interests,
                      영상모션그래픽: !interests.영상모션그래픽,
                    })
                  }
                />
                영상/모션그래픽
              </label>
              <label className='flex items-center gap-1.5'>
                <input
                  type='checkbox'
                  className='h-[18px] w-[18px]'
                  onClick={() =>
                    setValue('interests', {
                      ...interests,
                      포토그래피: !interests.포토그래피,
                    })
                  }
                />
                포토그래피
              </label>
            </div>
          </div>

          <div className='mb-[60px]'>
            <label className='mb-0.5 text-[18px] font-bold text-text-alternative'>
              제한 허용
            </label>
            <p className='mb-5 text-text-assitive'>
              원하는 제안만 골라 받을 수 있어요!
            </p>
            <div className='flex flex-col gap-4 text-text-normal'>
              <label className='flex items-center gap-1.5'>
                <input
                  type='checkbox'
                  className='h-[18px] w-[18px]'
                  onClick={() =>
                    setValue('proposal', {
                      ...proposal,
                      proposal1: !interests.proposal1,
                    })
                  }
                />
                스팩폴리오 메세지로 채용 제안받기
              </label>
              <label className='flex items-center gap-1.5'>
                <input
                  type='checkbox'
                  className='h-[18px] w-[18px]'
                  onClick={() =>
                    setValue('proposal', {
                      ...proposal,
                      proposal2: !interests.proposal2,
                    })
                  }
                />
                이메일로 의견 제안받기
              </label>
              <label className='flex items-center gap-1.5'>
                <input
                  type='checkbox'
                  className='h-[18px] w-[18px]'
                  onClick={() =>
                    setValue('proposal', {
                      ...proposal,
                      proposal3: !interests.proposal3,
                    })
                  }
                />
                스팩폴리오 메세지로 프로젝트 제안받기
              </label>
            </div>
          </div>

          <button
            type='submit'
            onClick={() => setStage(prev => prev + 1)}
            disabled={!name || !checkedDuplicate}
            className='mb-4 flex h-12 w-full items-center justify-center rounded-[8px] bg-primary-heavy py-4 text-white disabled:bg-slate-300'
          >
            회원가입 완료!
          </button>
        </div>
      </div>
    </div>
  );
}
