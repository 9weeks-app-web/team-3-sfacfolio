import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputWithLabelProps {
  label: string;
  type: 'text' | 'name' | 'email' | 'password';
  placeholder?: string;
  register?: UseFormRegisterReturn<
    'email' | 'name' | 'password' | 'confirmedPassword"'
  >;
  className?: string;
  error?: string;
}

export default function InputWithLabel({
  label,
  type,
  placeholder,
  register,
  className,
  error,
}: InputWithLabelProps) {
  return (
    <div className={`${className} flex flex-col gap-3`}>
      <label
        htmlFor={'email'}
        className='text-[18px] font-bold text-text-alternative'
      >
        {label}
      </label>
      <input
        {...register}
        type={type}
        placeholder={placeholder}
        autoComplete='off'
        className={`h-12 w-full rounded-[8px] border border-line-normal bg-background-primary px-3.5 py-4 outline-none placeholder:text-text-assitive ${error}`}
      />
    </div>
  );
}
