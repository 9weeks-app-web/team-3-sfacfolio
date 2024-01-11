'use client';

interface ResumeHeaderPropsType {
  lists: string[];
  selectedList: string;
  setSelectedList: React.Dispatch<React.SetStateAction<string>>;
}

function ResumeHeader({
  lists,
  selectedList,
  setSelectedList,
}: ResumeHeaderPropsType) {
  const handleTypeClick = (type: string) => {
    setSelectedList(type);
  };
  return (
    <ul className='mt-4 flex gap-3'>
      {lists.map(list => (
        <li
          key={list}
          className={`${
            list === selectedList && 'border-none bg-primary-heavy text-white'
          } cursor-pointer rounded-full border px-4 py-[15px] text-label1 font-medium leading-4 text-text-alternative`}
          onClick={() => handleTypeClick(list)}
        >
          {list}
        </li>
      ))}
    </ul>
  );
}

export default ResumeHeader;
