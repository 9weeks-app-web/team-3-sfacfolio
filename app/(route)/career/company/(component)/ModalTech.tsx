import { Dispatch, SetStateAction, useState } from 'react';

import ModalLayout from './ModalLayout';
import ModalHeader from './ModalHeader';
import ModalCategory from './ModalCategory';

export interface ModalProps {
  data: string[];
  setData: Dispatch<SetStateAction<string[]>>;
  onClose: () => void;
}

const categories = [
  { value: '📱 테크' },
  { value: '🧬 헬스' },
  { value: '💰 핀테크' },
  { value: '📖 에듀테크' },
  { value: '🌽 푸드테크' },
  { value: '🛍️ 커머스' },
  { value: '🥞 푸드커머스' },
  { value: '💅 뷰티커머스' },
  { value: '🧥 패션커머스' },
  { value: '🐶 펫테크' },
];

export default function ModalTech({ data, setData, onClose }: ModalProps) {
  const [tempData, setTempData] = useState(data);

  const onReset = () => {
    setTempData([]);
  };

  const onApply = () => {
    setData(tempData);
    onClose();
  };

  const onClick = (categoryValue: string) => {
    if (categoryValue === '📱 테크') {
      setTempData([]);
    } else {
      setTempData(prevData => {
        if (prevData.includes(categoryValue)) {
          return prevData.filter(item => item !== categoryValue);
        }
        if (prevData.length === 5) {
          alert('직무는 최대 5개까지 선택할 수 있습니다.');
          return prevData;
        }
        return [...prevData, categoryValue];
      });
    }
  };

  return (
    <ModalLayout onApply={onApply}>
      <ModalHeader
        title='테크'
        number={tempData.length === 0 ? 1 : tempData.length}
        onClose={onClose}
        onReset={onReset}
      />
      <div className='flex flex-wrap gap-3'>
        {categories.map(category => (
          <ModalCategory
            key={category.value}
            value={category.value}
            active={
              tempData.length === 0
                ? category.value === '📱 테크'
                : tempData.includes(category.value)
            }
            onClick={onClick}
          />
        ))}
      </div>
      <p className='mb-3 mt-4 text-caption3 font-medium text-text-alternative'>
        직무는 최대 5개까지 선택하실 수 있어요.
      </p>
    </ModalLayout>
  );
}
