import React from 'react';
import { MyProfileProps, ProfileTabMenusType, menus } from './ProfileDetail';

function ProfileTab({ currentTab, setCurrentTab }: MyProfileProps) {
  return (
    <ul className='grid h-[57px] w-full cursor-pointer grid-cols-5 border-b-2 border-line-normal'>
      {Object.entries(menus).map(([key, value]) => (
        <li
          key={key}
          className={`relative flex items-center justify-center ${
            currentTab === key
              ? 'font-bold text-text-normal before:absolute before:bottom-[-2px] before:block before:h-[2px] before:w-full before:bg-primary-heavy'
              : 'text-text-assitive'
          }`}
          onClick={() => setCurrentTab(key as ProfileTabMenusType)}
        >
          {key}
        </li>
      ))}
    </ul>
  );
}

export default ProfileTab;
