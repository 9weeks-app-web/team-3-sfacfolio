'use client';
import React, { useEffect, useState } from 'react';
import ProfileTab from './ProfileTab';

export const menus = {
  포트폴리오: ['나의 포트폴리오', '관심 포트폴리오'],
  프로젝트: ['프로젝트 진행 상황', '관심 프로젝트'],
  커뮤니티: ['내 커뮤니티 활동', '저장한 게시물'],
  스팩퀴즈: ['참여 퀴즈'],
  커리어: ['지원 현황', '관심 공고', '이력서 관리'],
};

export type ProfileTabMenusType = keyof typeof menus;

export interface MyProfileProps {
  currentTab: ProfileTabMenusType | null;
  setCurrentTab: React.Dispatch<
    React.SetStateAction<ProfileTabMenusType | null>
  >;
}

function ProfileDetail({ currentTab, setCurrentTab }: MyProfileProps) {
  const [currentSubTab, setCurrentSubTab] = useState(
    currentTab ? menus[currentTab][0] : '',
  );

  useEffect(() => {
    setCurrentSubTab(currentTab ? menus[currentTab][0] : '');
  }, [currentTab]);

  return (
    <div className='w-[954px] rounded-b-lg border border-line-normal'>
      <ProfileTab currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className='p-4 pt-6'>
        {currentTab ? (
          <ul className='-ml-3 flex'>
            {menus[currentTab].map((item, idx) => {
              return (
                <li key={item} className='flex items-center'>
                  {idx > 0 && idx < menus[currentTab].length && (
                    <div className='h-6 w-[1px] bg-text-disable'></div>
                  )}
                  <span
                    className={`px-3 py-2 text-xl font-bold leading-6 ${
                      currentSubTab === item
                        ? 'text-text-normal'
                        : 'text-text-assitive'
                    } ${menus[currentTab].length > 1 && 'cursor-pointer'}`}
                    onClick={() => setCurrentSubTab(item)}
                  >
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
        ) : (
          <div></div> // TODO: 제안관리 구현 위치
        )}
      </div>
    </div>
  );
}

export default ProfileDetail;
