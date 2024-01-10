import Image from 'next/image';
import CirclePlus from '@images/CirclePlus.svg';

interface ResumeButtonPropsType {
  value: string;
  isPlus?: boolean;
  isBig?: boolean;
}

function ResumeButton({
  value,
  isPlus = false,
  isBig = false,
}: ResumeButtonPropsType) {
  return (
    <button
      className={`${
        isBig
          ? 'w-[312px] border-primary-heavy text-primary-heavy'
          : 'w-[120px] text-text-alternative'
      } flex justify-center items-center gap-1 h-[48px] border rounded-lg text-label1 font-bold`}
    >
      <span>{value}</span>
      {isPlus && <Image src={CirclePlus} alt='plus' />}
    </button>
  );
}

export default ResumeButton;
