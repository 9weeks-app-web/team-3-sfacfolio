import { useState } from 'react';

interface CheckInputItem {
  id: number;
  title: string;
}

interface CheckInputPropsType {
  label: string;
  items: CheckInputItem[];
}

function CheckInput({ label, items }: CheckInputPropsType) {
  const [selectedItem, setSelectedItem] = useState<string[]>([]);
  const handleItemClick = (item: string) => {
    if (selectedItem.includes(item)) {
      const newItems = selectedItem.filter(preItem => preItem !== item);
      setSelectedItem(newItems);
    } else if (selectedItem.length < 5) {
      setSelectedItem(pre => [...pre, item]);
    } else {
      return;
    }
  };
  return (
    <li className='flex flex-col col-span-2'>
      <label htmlFor='title' className='text-[20px] font-bold py-4'>
        {label}
      </label>
      <div className='w-[94%] flex flex-wrap gap-3 mt-[18px]'>
        {items.map(item => (
          <div key={item.id} className='h-[48px]'>
            <label
              htmlFor={item.title}
              className={`${
                selectedItem.includes(item.title)
                  ? 'bg-primary-heavy text-white'
                  : 'text-text-alternative bg-background-tertiary'
              } px-[18px] py-3 text-[18px] font-medium leading-6 rounded-lg`}
            >
              {item.title}
            </label>
            <input
              type='checkbox'
              name='progress'
              id={item.title}
              className='hidden'
              onClick={() => handleItemClick(item.title)}
            />
          </div>
        ))}
      </div>
    </li>
  );
}

export default CheckInput;
