import React from 'react';

interface ModalWrapProps {
  type?: string;
  onApply: () => void;
  onClose: () => void;
  children: React.ReactNode;
}

export default function ModalLayout({
  type,
  onApply,
  onClose,
  children,
}: ModalWrapProps) {
  const [header, ...rest] = React.Children.toArray(children);

  return type === 'fixed' ? (
    <div className='fixed bottom-0 left-0 z-[1000] h-screen w-screen bg-black/60'>
      <div className='absolute left-1/2 top-1/2 w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white'>
        {/* modal header */}
        {header}

        {/* modal contents */}
        <div className='p-6'>
          {rest}
          <div className='w-full pt-6'>
            <button
              className='h-12 w-full rounded-lg bg-primary-heavy font-bold text-white'
              onClick={onApply}
            >
              적용하기
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className='absolute top-[calc(46px+16px)] z-[1] w-[790px] rounded-lg border border-line-normal bg-white shadow-[0_4px_8px_0_rgba(0,0,0,0.15)]'>
      {/* modal header */}
      {header}

      {/* modal contents */}
      <div className='p-6'>
        {rest}
        <div className='flex w-full justify-end gap-2 border-t border-line-normal pt-6'>
          <button
            className='h-12 w-[140px] rounded-lg border border-primary-heavy bg-white font-bold text-primary-heavy'
            onClick={onClose}
          >
            취소
          </button>
          <button
            className='h-12 w-[140px] rounded-lg border border-primary-heavy bg-primary-heavy font-bold text-white'
            onClick={onApply}
          >
            적용하기
          </button>
        </div>
      </div>
    </div>
  );
}
