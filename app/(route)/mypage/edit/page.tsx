'use client';

import Input from '@/components/Input/Input';
import InputWithLabel from '@/components/Input/InputWithLabel';
import IconCloseSmall from '@images/IconCloseSmall.svg';
import Image from 'next/image';
import React, { useState } from 'react';

const radioContent = [
  '보훈대상',
  '취업보호 대상',
  '고용지원금 대상',
  '장애',
  '병역',
];

export default function page() {
  const [checkedItem, setCheckedItemd] = useState('보훈대상');

  const [interests, setInterests] = useState<string[]>([]);
  const [programs, setPrograms] = useState<string[]>([]);

  const [text, setText] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  };

  return (
    <div className='h-full w-full border border-line-normal bg-background-tertiary pb-[56px] pt-[13px]'>
      <div className='mx-auto w-[954px] bg-white'>
        {/* 헤더 */}
        <div className='flex w-full items-center justify-between px-6 py-5'>
          <h4 className='text-[20px] font-bold text-text-normal'>
            프로필 편집
          </h4>
          <button className='w-[120px] rounded-[8px] bg-primary-heavy py-3 font-bold text-white'>
            수정하기
          </button>
        </div>

        {/* 기본 정보 */}
        <div className='grid grid-cols-2 gap-6 border-b border-line-normal p-6'>
          <InputWithLabel label='성함' type='text' />
          <InputWithLabel label='이메일' type='email' />
          <InputWithLabel label='주소' type='text' />
          <InputWithLabel label='생년월일' type='text' />
          <div>
            <div className='mb-2 flex flex-col gap-3'>
              <label
                htmlFor={'name'}
                className='text-[18px] font-bold text-text-alternative'
              >
                전화번호
              </label>
              <div className='flex h-12'>
                <Input type='text' className='mb-2 mr-2' />
                <button
                  type='button'
                  className='w-[120px] shrink-0 rounded-[8px] bg-text-normal py-3 font-bold text-white'
                >
                  중복 확인
                </button>
              </div>
            </div>
            <Input type='password' className='mb-2 mr-2' />
          </div>

          <div className='flex flex-col gap-3'>
            <label
              htmlFor={'name'}
              className='text-[18px] font-bold text-text-alternative'
            >
              비밀번호
            </label>
            <div className='flex h-12'>
              <Input type='password' className='mb-2 mr-2' />
              <button
                type='button'
                className='w-[120px] shrink-0 rounded-[8px] bg-text-normal py-3 font-bold text-white'
              >
                비밀번호 변경
              </button>
            </div>
          </div>

          <div className='col-span-2'>
            <h5 className='mb-3 text-[18px] font-bold text-text-assitive'>
              취업 우대 및 병역
            </h5>
            <div className='flex gap-[60px]'>
              {radioContent.map(item => (
                <>
                  <label htmlFor={item} className='flex items-center'>
                    <input
                      type='radio'
                      id={item}
                      value={item}
                      name='group'
                      checked={checkedItem === item && true}
                      onChange={() => setCheckedItemd(item)}
                      className='mr-[6px] h-5 w-5'
                    />
                    {item}
                  </label>
                </>
              ))}
            </div>
          </div>
        </div>

        {/* 기타 정보 */}
        <div className='p-6'>
          <InputWithLabel
            label='닉네임'
            type='text'
            className='mb-6 w-[441px]'
          />

          <div className={`mb-6 flex flex-col gap-3`}>
            <label className='text-[18px] font-bold text-text-alternative'>
              자기소개
            </label>
            <textarea
              className={`h-[188px] w-full resize-none rounded-[8px] border border-line-normal bg-background-primary px-3.5 py-4 placeholder:text-text-assitive`}
            />
          </div>

          <div className='mb-6'>
            <div className={`flex flex-col gap-3`}>
              <label className='text-[18px] font-bold text-text-alternative'>
                관심 분야
              </label>
              <input
                value={text}
                onChange={onChange}
                onKeyDown={e => {
                  if (e.key === 'Enter') setInterests(prev => [...prev, text]);
                }}
                className={`h-12 w-full resize-none rounded-[8px] border border-text-normal bg-white px-3.5 py-4 placeholder:text-text-assitive`}
              />
            </div>
            <p className='my-2 text-right text-text-alternative'>
              태그는 최대 10개까지 등록이 가능해요
            </p>
            <div className='w-full border border-line-normal bg-background-primary'>
              <div className='flex gap-3 p-4'>
                {interests.map((item, i) => (
                  <span
                    key={i}
                    className='flex h-8 items-center rounded-full border bg-white px-3 py-2'
                  >
                    <span className='mr-2 text-primary-heavy'>{item}</span>
                    <Image
                      src={IconCloseSmall}
                      alt='close-icon'
                      className='h-2.5 w-2.5'
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className={`flex flex-col gap-3`}>
              <label className='text-[18px] font-bold text-text-alternative'>
                사용 프로그램
              </label>
              <input
                className={`h-12 w-full resize-none rounded-[8px] border border-text-normal bg-white px-3.5 py-4 placeholder:text-text-assitive`}
              />
            </div>
            <p className='my-2 text-right text-text-alternative'>
              태그는 최대 10개까지 등록이 가능해요
            </p>
            <div className='w-full border border-line-normal bg-background-primary'>
              <div className='flex gap-3 p-4'>
                <span className='flex h-8 items-center rounded-full border bg-white px-3 py-2'>
                  <span className='mr-2 text-primary-heavy'>서울</span>
                  <Image
                    src={IconCloseSmall}
                    alt='close-icon'
                    className='h-2.5 w-2.5'
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
