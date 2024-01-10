import React from 'react';

interface TitleInputProps {
  title: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TitleInput({ title, onChange }: TitleInputProps) {
  return (
    <input
      type='text'
      value={title}
      name='title'
      autoComplete='off'
      onChange={onChange}
      placeholder='제목을 입력하세요'
      className='mb-4 h-[80px] w-full rounded-[8px] border-2 border-line-normal p-7 text-subTitle font-bold text-text-normal outline-none placeholder:text-text-assitive'
    />
  );
}
