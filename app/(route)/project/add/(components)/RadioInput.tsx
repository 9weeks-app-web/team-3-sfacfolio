import { useState } from 'react';

interface RadioInputItem {
  id: number;
  title: string;
}

interface RadioInputPropsType {
  label: string;
  items: RadioInputItem[];
}

function RadioInput({ label, items }: RadioInputPropsType) {
  const [selectedItem, setSelectedItem] = useState(items[0].title);
  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };
  return (
    <div className='flex flex-col col-span-2'>
      <label htmlFor='title' className='text-[20px] font-bold py-4'>
        {label}
      </label>
      <div className='flex gap-3 mt-[18px]'>
        {items.map(item => (
          <div key={item.id}>
            <label
              htmlFor={item.title}
              className={`${
                selectedItem === item.title
                  ? 'bg-primary-heavy text-white'
                  : 'text-text-alternative bg-background-tertiary'
              } px-[18px] py-3 text-[18px] font-medium leading-6 rounded-lg`}
            >
              {item.title}
            </label>
            <input
              type='radio'
              name='progress'
              id={item.title}
              onClick={() => handleItemClick(item.title)}
              className='hidden'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RadioInput;
