interface ResumeTextAreaPropsType {
  label: string;
  placeholder: string;
}

function ResumeTextArea({ label, placeholder }: ResumeTextAreaPropsType) {
  return (
    <div className='flex flex-col gap-3 col-span-4'>
      <label
        htmlFor={label}
        className='text-lg font-bold text-text-alternative'
      >
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        className='w-full h-[160px] p-[14px] text-label1 font-normal leading-4 box-border  border rounded-lg outline-none resize-none placeholder:text-text-disable bg-background-tertiary'
      ></textarea>
    </div>
  );
}

export default ResumeTextArea;
