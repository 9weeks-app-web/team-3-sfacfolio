import Image from 'next/image';
import React, { useState } from 'react';
import IconCloseSmall from '@images/IconCloseSmall.svg';

interface HashTagInputProps {
  hashTags: string[];
  setHashTags: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function HashTagInput({
  hashTags,
  setHashTags,
}: HashTagInputProps) {
  const [hashTagInput, setHashTagsInput] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setHashTagsInput(value);
  };

  return (
    <div className='mb-[52px] mt-4 h-[80px] rounded-[8px] border-2 border-line-normal text-[20px] font-medium text-text-normal'>
      <div className='flex h-full items-center px-7'>
        <ul
          className={`flex shrink-0 gap-2 ${hashTags.length !== 0 && 'mr-4'}`}
        >
          {hashTags.map((tag, i) => (
            <li
              key={i}
              className='flex items-center gap-2 rounded-full border px-3 py-2 text-label1 text-primary-weak'
            >
              {tag}
              <Image
                src={IconCloseSmall}
                alt='close-icon'
                className='h-2.5 w-2.5 cursor-pointer'
                onClick={() => setHashTags(prev => prev.filter(r => r !== tag))}
              />
            </li>
          ))}
        </ul>
        <input
          type='text'
          value={hashTagInput}
          name='hashTags'
          autoComplete='off'
          onChange={onChange}
          onKeyDown={e => {
            if (e.nativeEvent.isComposing) return;
            if (hashTags.length > 5)
              return alert('해시태그는 6개까지 설정 할 수 있습니다.');
            if (e.key === 'Enter') {
              if (!hashTagInput) return;
              e.preventDefault();
              setHashTagsInput('');
              setHashTags(prev => [...prev, hashTagInput]);
            }
          }}
          placeholder='#해시태그를 설정하세요 (최대 6개)'
          className='h-full w-full outline-none placeholder:text-text-assitive'
        />
      </div>
    </div>
  );
}
