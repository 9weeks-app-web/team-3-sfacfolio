'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import CategorySelector from './(components)/CategorySelector';
import ToggleSwitch from '@/components/ToggleSwitch';
import IconEdit2 from '@images/IconEdit2.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { auth, db } from '@/utils/firebase';
import TitleInput from './(components)/TitleInput';
import HashTagInput from './(components)/HashTagInput';

const ToastUIEditor = dynamic(() => import('./(components)/ToastUIEditor'), {
  ssr: false,
  loading: () => (
    <div className='flex h-[640px] items-center justify-center border'>
      <div>로딩중임 😘</div>
    </div>
  ),
});

export default function page() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('QnA');
  const [content, setContent] = useState('');
  const [hashTags, setHashTags] = useState<string[]>([]);
  const [anonymous, setAnonymous] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
  };

  const handleToggle = () => {
    setAnonymous(prevStates => !prevStates);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!title) {
        throw new Error('제목을 입력해주세요.');
      }
      if (!content) {
        throw new Error('내용을 입력해주세요.');
      }

      await addDoc(collection(db, 'community'), {
        title,
        category,
        content,
        hashTags,
        publishedAt: Timestamp.fromDate(new Date()),
        anonymous,
        postedBy: auth.currentUser?.uid,
      });

      router.push('/');
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return (
    <div className='h-full w-full bg-white pb-[56px] pt-[60px]'>
      <form onSubmit={onSubmit} className='mx-auto w-[954px] bg-white'>
        <div className='mb-3 flex w-full items-center justify-between p-4'>
          <h4 className='text-title font-bold text-text-normal'>글쓰기</h4>
        </div>
        <CategorySelector
          selectedCategory={category}
          setSelectedCategory={setCategory}
        />
        <TitleInput title={title} onChange={onChange} />
        <ToastUIEditor setContent={setContent} />
        <HashTagInput hashTags={hashTags} setHashTags={setHashTags} />

        <div className='flex justify-between'>
          <div className='flex items-center gap-4'>
            <ToggleSwitch checked={anonymous} onChange={handleToggle} />
            <span className='font-medium'>익명</span>
          </div>
          <div className='flex gap-6'>
            <button
              type='button'
              onClick={() => router.back()}
              className='flex h-[48px] w-[120px] items-center justify-center rounded-[8px] border py-4 font-bold text-text-alternative'
            >
              취소
            </button>
            <button
              type='submit'
              className='flex h-[48px] w-[120px] items-center justify-center rounded-[8px] border bg-primary-heavy py-4 font-bold text-white'
            >
              <Image src={IconEdit2} alt='logo-edit' className='mr-2' />
              <span>게시하기</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
