'use client';
import React from 'react';
import { ProfileTabMenusType } from './ProfileDetail';

const profileButtonOption = {
  black: 'bg-text-normal text-white',
  white: 'bg-white border border-text-normal text-text-normal',
};

function ProfileButton({
  text,
  option = 'black',
  setCurrentTab,
}: {
  text: string;
  option?: 'black' | 'white';
  setCurrentTab?: React.Dispatch<
    React.SetStateAction<ProfileTabMenusType | null>
  >;
}) {
  return (
    <button
      className={`h-12 w-[302px] rounded-lg font-bold leading-4 ${profileButtonOption[option]}`}
      onClick={() => setCurrentTab && setCurrentTab(null)}
    >
      {text}
    </button>
  );
}

export default ProfileButton;
