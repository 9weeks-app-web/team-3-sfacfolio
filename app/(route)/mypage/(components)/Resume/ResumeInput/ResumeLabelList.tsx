interface ResumeLabelListPropsType {
  label: string;
  labelList: { image?: string; name: string }[];
}

function ResumeLabelList({ label, labelList }: ResumeLabelListPropsType) {
  return (
    <div className='flex flex-col gap-3 col-span-4'>
      <label className='text-lg font-bold text-text-alternative'>{label}</label>
      <div className='flex gap-2'>
        {labelList.map(label => (
          <div className='flex items-center gap-1 px-3 py-2 rounded-full border'>
            {label.image ? (
              <div></div>
            ) : (
              <div className='w-6 h-6 rounded-full bg-[#d9d9d9]' />
            )}
            <span>{label.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResumeLabelList;
