import { useState } from 'react';
import Image from 'next/image';
import CarrotDown from '@images/CarrotDown.svg';

interface SelectInputPropsType {
  label: string;
  placeholder: string;
  options: string[];
  mode?: 'default' | 'extend';
}

function SelectInput({
  label,
  placeholder,
  options,
  mode = 'default',
}: SelectInputPropsType) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleArrowClick = () => {
    setIsOpen(pre => !pre);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <li
      className={`${
        mode === 'extend' && 'col-span-2'
      } flex items-center gap-[30px]`}
    >
      <label htmlFor='type' className='text-[20px] font-bold'>
        {label}
      </label>
      <div className='relative w-[448px] flex justify-between items-center text-[20px] font-medium border border-line-normal rounded-lg focus:outline-none px-[15px] py-[10px]'>
        <div>{selectedOption.length > 0 ? selectedOption : placeholder}</div>
        <Image
          src={CarrotDown}
          alt='arrow'
          className='cursor-pointer'
          onClick={handleArrowClick}
        />
        <ul
          className={`${
            !isOpen && 'h-0 p-0 opacity-0'
          } z-10 absolute left-0 top-[52px] w-[448px] text-[20px] font-medium border text-text-alternative bg-background-secondary border-line-normal rounded-lg focus:outline-none  shadow-md space-y-[10px] overflow-hidden p-[15px] transition-all`}
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
      {mode === 'extend' && (
        <input
          type='text'
          placeholder={`${
            selectedOption.length > 0 ? selectedOption + '을 입력해주세요' : ''
          } `}
          className='w-[600px] h-[52px] text-[20px] font-medium border border-line-normal rounded-lg focus:outline-none px-[15px] py-[10px]'
        />
      )}
    </li>
  );
}

export default SelectInput;
