'use client';
import { useState } from 'react';
import BookmarkIcon from '@/components/BookmarkIcon';
import CompanyBagIcon from '@/components/CompanyBagIcon';
import PlusIcon from '@/components/PlusIcon';

interface CompanyDetailButtonPropsType {
  mode: 'bookmark' | 'apply' | 'portfolio';
  isActive?: boolean;
}

function CompanyDetailButton({
  mode,
  isActive = false,
}: CompanyDetailButtonPropsType) {
  const [isButtonActive, setIsButtonActive] = useState(isActive);
  const handleButtonClick = () => {
    setIsButtonActive(pre => !pre);
  };

  return (
    <button
      className={`flex justify-center items-center gap-3 p-4 rounded-lg ${
        mode === 'apply'
          ? `border-none bg-primary-heavy ${
              !isButtonActive
                ? 'hover:bg-primary-alternative'
                : 'bg-text-disable'
            }`
          : mode === 'bookmark'
            ? `border border-primary-heavy hover:bg-primary-assitive`
            : 'border border-primary-assitive'
      } `}
      onClick={handleButtonClick}
    >
      <span
        className={`text-lg font-medium leading-6 ${
          mode !== 'apply'
            ? 'text-primary-heavy'
            : isButtonActive
              ? 'text-text-assitive'
              : 'text-white'
        }`}
      >
        {mode === 'bookmark'
          ? isButtonActive
            ? '북마크 취소하기'
            : '북마크하기'
          : mode === 'apply'
            ? '즉시 지원하기'
            : mode === 'portfolio' && '내 포트폴리오 올리기 '}
      </span>
      {mode === 'bookmark' ? (
        <BookmarkIcon
          width={24}
          height={24}
          strokeOut={`${isButtonActive ? 'none' : '#0059ff'}`}
          strokeIn={`${isButtonActive ? '#ffffff' : '#0059ff'}`}
          fill={`${isButtonActive ? '#0059ff' : 'none'}`}
        />
      ) : mode === 'apply' ? (
        <CompanyBagIcon
          width={24}
          height={24}
          stroke={`${isButtonActive ? '#c4c4c4' : '#ffffff'}`}
        />
      ) : (
        mode === 'portfolio' && (
          <PlusIcon width={24} height={24} stroke={'#0059ff'} />
        )
      )}
    </button>
  );
}

export default CompanyDetailButton;
