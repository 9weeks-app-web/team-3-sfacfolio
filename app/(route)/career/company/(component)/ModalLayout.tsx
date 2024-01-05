import ModalHeader from './ModalHeader';

interface ModalWrapProps {
  title: '지역' | '직무' | '테크' | '경력';
  children: React.ReactNode;
}

export default function ModalLayout({ title, children }: ModalWrapProps) {
  return title === '지역' ? (
    <div className='fixed bottom-0 left-0 z-[1000] h-screen w-screen bg-black/60'>
      <div className='absolute left-1/2 top-1/2 w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white'>
        {/* modal header */}
        <ModalHeader title={title} number={15} />

        {/* modal contents */}
        <div className='p-6'>
          {children}
          <div className='w-full pt-6'>
            <button className='h-12 w-full rounded-lg bg-primary-heavy font-bold text-white'>
              적용하기
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className='absolute top-[calc(46px+16px)] w-[790px] rounded-lg border border-line-normal bg-white shadow-[0_4px_8px_0_rgba(0,0,0,0.15)]'>
      {/* modal header */}
      <ModalHeader title={title} number={15} />

      {/* modal contents */}
      <div className='p-6'>
        {children}
        <div className='flex w-full justify-end border-t border-line-normal pt-6'>
          <button className='h-12 w-[312px] rounded-lg bg-primary-heavy font-bold text-white'>
            적용하기
          </button>
        </div>
      </div>
    </div>
  );
}
