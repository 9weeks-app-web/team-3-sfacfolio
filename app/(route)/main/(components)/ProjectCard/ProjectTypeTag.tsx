import React from 'react';

interface ProjectTypeTagProps {
  type: '온라인' | '오프라인';
}

function ProjectTypeTag({ type }: ProjectTypeTagProps) {
  return (
    <div className='absolute left-4 top-4 w-fit rounded bg-[rgba(255,255,255,0.24)] p-3 text-label2 font-bold leading-[14px] text-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)]'>
      {type}
    </div>
  );
}

export default ProjectTypeTag;
