import React from 'react';
interface ApplyStatusItemProps {
  text: string;
  count: number;
  active: boolean;
  onClick: () => void;
}

function ApplyStatusItem({
  text,
  count,
  active,
  onClick,
}: ApplyStatusItemProps) {
  return (
    <li
      className='flex cursor-pointer flex-col items-center justify-center gap-3'
      onClick={onClick}
    >
      <span
        className={`leading-4 ${
          active ? 'text-text-normal' : 'text-text-assitive'
        }`}
      >
        {text}
      </span>
      <span
        className={`text-title font-bold leading-7  ${
          active ? 'text-primary-heavy' : 'text-text-assitive'
        }`}
      >
        {count}
      </span>
    </li>
  );
}

export default ApplyStatusItem;
