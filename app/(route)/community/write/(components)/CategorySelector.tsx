import React from 'react';

const category = [
  { id: 1, content: 'QnA' },
  { id: 2, content: '자유게시판' },
  { id: 3, content: '교육과정' },
];

interface CategorySelectorProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export default function CategorySelector({
  selectedCategory,
  setSelectedCategory,
}: CategorySelectorProps) {
  return (
    <div className='mb-6 flex gap-3'>
      {category.map(item => (
        <div
          key={item.id}
          onClick={() => setSelectedCategory(item.content)}
          className={`flex h-12 min-w-[80px] cursor-pointer items-center justify-center rounded-full border px-3 py-4 ${
            selectedCategory === item.content &&
            'border-transparent bg-primary-heavy text-white'
          }`}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
