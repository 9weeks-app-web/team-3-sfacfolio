interface ResumePeriodInputPropsType {
  label: string;
  firstPlaceholder: string;
  secondPlaceholder: string;
  checkList: string[];
}

function ResumePeriodInput({
  label,
  firstPlaceholder,
  secondPlaceholder,
  checkList,
}: ResumePeriodInputPropsType) {
  return (
    <div className='flex flex-col gap-3 col-span-4'>
      <label className='text-lg font-bold text-text-alternative'>{label}</label>
      <div className='grid grid-cols-2 gap-6'>
        <div className='flex items-center gap-[6px] text-text-alternative'>
          <input
            type='date'
            placeholder={firstPlaceholder}
            className='w-full px-[14px] py-4 text-label1 font-normal leading-4 box-border  border rounded-lg outline-none placeholder:text-text-disable bg-background-tertiary'
          />
          ~
          <input
            type='date'
            placeholder={secondPlaceholder}
            className='w-full px-[14px] py-4 text-label1 font-normal leading-4 box-border  border rounded-lg outline-none placeholder:text-text-disable bg-background-tertiary'
          />
        </div>
        <div className='flex gap-4'>
          {checkList?.map(list => (
            <div className='flex items-center gap-[8px]'>
              <input
                type='checkbox'
                id={list}
                className='peer appearance-none ring-[1.5px] ring-offset-1  ring-text-disable w-[14px] h-[14px]  rounded-full checked:bg-primary-heavy checked:ring-primary-heavy'
              />
              <label
                htmlFor={list}
                className='text-label1 font-normal leading-4 text-text-alternative peer-checked:text-black'
              >
                {list}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResumePeriodInput;
