interface ResumeRadioInputPropsType {
  label: string;
  radioName: string;
  radioList: string[];
}

function ResumeRadioInput({
  label,
  radioName,
  radioList,
}: ResumeRadioInputPropsType) {
  return (
    <div className='flex flex-col gap-3 col-span-4'>
      <label className='text-lg font-bold text-text-alternative'>{label}</label>
      <div className='flex gap-[60px]'>
        {radioList.map(type => (
          <div className='flex items-center gap-[8px]'>
            <input
              type='radio'
              id={type}
              name={radioName}
              className='peer appearance-none ring-[1.5px] ring-offset-1  ring-text-disable w-[14px] h-[14px] rounded-full checked:bg-primary-heavy checked:ring-primary-heavy'
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
    </div>
  );
}

export default ResumeRadioInput;
