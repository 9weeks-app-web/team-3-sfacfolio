import Image from 'next/image';
import IconReset from '@images/IconReset.svg';
import IconClose from '@images/IconClose.svg';

interface ModalHeaderProps {
  title: string;
  number?: number;
  onClose: () => void;
  onReset: () => void;
}

export default function ModalHeader({
  title,
  number,
  onClose,
  onReset,
}: ModalHeaderProps) {
  return (
    <div className='flex justify-between border-b border-line-normal px-6 py-4'>
      <div
        className='flex cursor-pointer items-center justify-center gap-1'
        onClick={onReset}
      >
        <Image src={IconReset} alt='reset button' />
        <span className='text-caption2 font-medium text-text-alternative'>
          초기화
        </span>
      </div>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-[20px] font-medium text-text-normal'>{title}</p>
        {number && (
          <span className='flex h-8 w-8 items-center justify-center rounded-full bg-primary-heavy text-caption1 font-bold text-white'>
            {number}
          </span>
        )}
      </div>
      <div className='flex cursor-pointer items-center'>
        <Image src={IconClose} alt='close button' onClick={onClose} />
      </div>
    </div>
  );
}
