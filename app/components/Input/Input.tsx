import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  type: 'text' | 'name' | 'email' | 'password';
  placeholder?: string;
  register?: UseFormRegisterReturn<
    'email' | 'name' | 'password' | 'confirmedPassword'
  >;
  className?: string;
  error?: string;
}

export default function Input({
  className,
  register,
  error,
  ...props
}: InputProps) {
  return (
    <input
      {...register}
      {...props}
      autoComplete='off'
      className={`h-12 w-full rounded-[8px] border border-line-normal bg-background-primary px-3.5 py-4 outline-none placeholder:text-text-assitive ${className} ${error}`}
    />
  );
}
