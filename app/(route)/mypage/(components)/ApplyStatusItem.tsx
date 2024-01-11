import React from 'react';
interface ApplyStatusItemProps {
  text: string;
  count: number;
}

function ApplyStatusItem({ text, count }: ApplyStatusItemProps) {
  return (
    <li className='flex flex-col items-center justify-center gap-3'>
      <span className='leading-4 text-text-normal'>{text}</span>
      <span className='text-title font-bold leading-7 text-primary-heavy'>
        {count}
      </span>
    </li>
  );
}

export default ApplyStatusItem;
