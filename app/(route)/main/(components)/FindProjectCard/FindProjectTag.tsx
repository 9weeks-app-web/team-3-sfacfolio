import React from 'react';

interface FindProjectTagProps {
  tag: string;
}

function FindProjectTag({ tag }: FindProjectTagProps) {
  return (
    <li
      key={tag}
      className='list-none rounded border border-line-normal p-3 text-label2 text-text-alternative'
    >
      {tag}
    </li>
  );
}

export default FindProjectTag;
