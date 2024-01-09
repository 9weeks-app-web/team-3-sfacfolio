'use client';

import { useForm } from 'react-hook-form';

import Image from 'next/image';
import Search from '@images/Search.svg';

export default function CommunitySearch() {
  const { register, handleSubmit } = useForm();

  console.log(register);

  return (
    <form
      className='my-[60px] flex h-12 w-full items-center gap-4 rounded-lg bg-background-primary px-4 py-2'
      onSubmit={handleSubmit(data => {
        console.log(data);
      })}
    >
      <label htmlFor='search'>
        <Image src={Search} alt='search icon' className='cursor-pointer' />
      </label>
      <input
        id='search'
        type='text'
        {...register('body')}
        className='h-full w-[90%] bg-transparent outline-none'
        placeholder='관심 카테고리를 검색해 보세요.'
      />
    </form>
  );
}
