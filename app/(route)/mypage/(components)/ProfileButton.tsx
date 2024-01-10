import React from 'react';

const profileButtonOption = {
  black: 'bg-text-normal text-white',
  white: 'bg-white border border-text-normal text-text-normal',
};

function ProfileButton({
  text,
  option = 'black',
}: {
  text: string;
  option?: 'black' | 'white';
}) {
  return (
    <button
      className={`h-12 w-[302px] rounded-lg font-bold leading-4 ${profileButtonOption[option]}`}
    >
      {text}
    </button>
  );
}

export default ProfileButton;
