'use client';
import { useState } from 'react';
import Image from 'next/image';
import InputArrowDown from '@images/InputArrowDown.svg';

interface ResumeSelectInputPropsType {
  label: string;
  placeholder: string;
  options: string[];
  isShort?: boolean;
  setSelctedOption?: React.Dispatch<React.SetStateAction<null | string>>;
}

function ResumeSelectInput({
  label,
  placeholder,
  options,
  isShort = false,
  setSelctedOption,
}: ResumeSelectInputPropsType) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleArrowClick = () => {
    setIsOpen(pre => !pre);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (setSelctedOption) {
      setSelctedOption(option);
    }
  };

  return (
    <li
      className={`${isShort ? 'col-span-1' : 'col-span-2'} flex flex-col gap-3`}
    >
      <label className='h-7 text-lg font-bold text-text-alternative'>
        {label}
      </label>
      <div className='relative flex justify-between items-center text-label1 font-normal border rounded-lg focus:outline-none px-[14px] py-[12px] bg-background-tertiary'>
        <div
          className={`${
            selectedOption.length > 0 ? 'text-black' : 'text-text-disable'
          }`}
        >
          {selectedOption.length > 0 ? selectedOption : placeholder}
        </div>
        <Image
          src={InputArrowDown}
          alt='arrowdown'
          onClick={handleArrowClick}
        />
        <ul
          className={`${
            !isOpen && 'h-0 p-0 opacity-0'
          } z-10 absolute left-0 top-[52px] w-full text-label1 font-medium border  bg-background-tertiary border-line-normal rounded-lg focus:outline-none  shadow-md space-y-[10px] overflow-hidden p-[15px] transition-all`}
        >
          {options.map(option => (
            <li
              key={option}
              className='cursor-pointer'
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default ResumeSelectInput;
