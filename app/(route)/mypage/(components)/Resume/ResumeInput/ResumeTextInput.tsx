interface ResumeTextInputPropsType {
  label: string;
  placeholder: string;
  isShort?: boolean;
  isExtendRadio?: boolean;
  radioName?: string;
  radioList?: string[];
}

function ResumeTextInput({
  label,
  placeholder,
  isShort = false,
  isExtendRadio = false,
  radioName,
  radioList,
}: ResumeTextInputPropsType) {
  return (
    <div
      className={`flex flex-col gap-3  ${
        isExtendRadio ? `col-span-4` : isShort ? 'col-span-1' : 'col-span-2'
      }`}
    >
      <label
        htmlFor={label}
        className='text-lg font-bold text-text-alternative'
      >
        {label}
      </label>
      <div
        className={`${isExtendRadio && 'grid grid-cols-2 items-center gap-6'}`}
      >
        <input
          type='text'
          id={label}
          placeholder={placeholder}
          className='w-full px-[14px] py-4 text-label1 font-normal leading-4 box-border  border rounded-lg outline-none placeholder:text-text-disable bg-background-tertiary'
        />
        {isExtendRadio && (
          <div className='flex gap-4'>
            {radioList?.map(type => (
              <div className='flex items-center gap-[8px]'>
                <input
                  type='radio'
                  id={type}
                  name={radioName}
                  className='peer appearance-none ring-[1.5px] ring-offset-1  ring-text-disable w-[14px] h-[14px]  rounded-full checked:bg-primary-heavy checked:ring-primary-heavy'
                />
                <label
                  htmlFor={type}
                  className='text-label1 font-normal leading-4 text-text-alternative peer-checked:text-black'
                >
                  {type}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ResumeTextInput;
