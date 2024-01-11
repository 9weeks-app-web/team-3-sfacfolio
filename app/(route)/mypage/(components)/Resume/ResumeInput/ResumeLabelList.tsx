interface ResumeLabelListPropsType {
  label: string;
  labelList: { name: string }[];
}

function ResumeLabelList({ label, labelList }: ResumeLabelListPropsType) {
  return (
    <div className='col-span-4 flex flex-col gap-3'>
      <label className='text-lg font-bold text-text-alternative'>{label}</label>
      <div className='flex gap-2'>
        {labelList.map((label, i) => (
          <div
            className='flex items-center gap-1 rounded-full border px-3 py-2'
            key={i}
          >
            <span>{label.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResumeLabelList;
