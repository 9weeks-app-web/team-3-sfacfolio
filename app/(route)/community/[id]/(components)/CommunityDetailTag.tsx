import React from 'react';

function CommunityDetailTag({ tag }: { tag: string }) {
  return (
    <span className='flex h-fit items-center rounded-full border border-line-normal bg-background-primary px-3 py-1 text-label2 text-text-normal'>
      #{tag}
    </span>
  );
}

export default CommunityDetailTag;
