import Image from 'next/image';
import Search from '@images/Search.svg';

interface ResumeSearchInputPropsType {
  label: string;
  placeholder: string;
}

function ResumeSearchInput({ label, placeholder }: ResumeSearchInputPropsType) {
  return (
    <div className='flex flex-col gap-3 col-span-2'>
      <label
        htmlFor={label}
        className='text-lg font-bold text-text-alternative'
      >
        {label}
      </label>
      <div className='relative'>
        <input
          type='text'
          id={label}
          placeholder={placeholder}
          className='w-full px-[14px] py-4 text-label1 font-normal leading-4 box-border  border rounded-lg outline-none placeholder:text-text-disable bg-background-tertiary'
        />
        <Image
          src={Search}
          alt='검색'
          width={24}
          height={24}
          className='cursor-pointer absolute top-[12px] right-[14px]'
        />
      </div>
    </div>
  );
}

export default ResumeSearchInput;
