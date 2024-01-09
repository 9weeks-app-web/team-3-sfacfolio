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
    <ul className='flex gap-3 mt-4 px-4'>
      {lists.map(list => (
        <li
          key={list}
          className={`${
            list === selectedList && 'text-white bg-primary-heavy border-none'
          } cursor-pointer text-text-alternative text-label1 font-medium leading-4 px-4 py-[15px] rounded-full border`}
          onClick={() => handleTypeClick(list)}
        >
          {list}
        </li>
      ))}
    </ul>
  );
}

export default ResumeHeader;
