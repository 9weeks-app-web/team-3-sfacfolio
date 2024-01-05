import React from 'react';

interface ProjectButtonProps {
  children: React.ReactNode;
  color: 'white' | 'transparent';
  size: 'big' | 'small';
}

const buttonOption = {
  color: {
    white: ' bg-white text-black',
    transparent: ' bg-transparent text-white',
  },
  size: {
    big: ' px-5 py-[14px] text-lg leading-6',
    small:
      ' py-[17px] w-[167px] text-label1 leading-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]',
  },
};

function ProjectButton({ children, color, size }: ProjectButtonProps) {
  return (
    <button
      className={`flex items-center justify-center gap-[15px] rounded-full border border-white font-bold${buttonOption['color'][color]}${buttonOption['size'][size]}`}
    >
      {children}
    </button>
  );
}

export default ProjectButton;
