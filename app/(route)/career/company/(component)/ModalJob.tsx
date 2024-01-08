import { useState } from 'react';

import ModalHeader from './ModalHeader';
import ModalLayout from './ModalLayout';
import ModalCategory from './ModalCategory';
import { ModalProps } from './ModalTech';

import CategoryIcon from '@/components/Icons/CategoryIcon';
import ScreenIcon from '@/components/Icons/ScreenIcon';
import GraphIcon from '@/components/Icons/GraphIcon';
import ScaleIcon from '@/components/Icons/ScaleIcon';
import LaptopIcon from '@/components/Icons/LaptopIcon';
import GamepadIcon from '@/components/Icons/GamepadIcon';
import BoxIcon from '@/components/Icons/BoxIcon';
import CameraIcon from '@/components/Icons/CameraIcon';
import BookIcon from '@/components/Icons/BookIcon';
import VideoIcon from '@/components/Icons/VideoIcon';

const categories = [
  { icon: CategoryIcon, value: '디자인 전체' },
  { icon: ScreenIcon, value: 'UX/UI 디자인' },
  { icon: GraphIcon, value: '그래픽 디자인' },
  { icon: ScaleIcon, value: '일러스트레이션' },
  { icon: LaptopIcon, value: '디지털아트' },
  { icon: GamepadIcon, value: '캐릭터 디자인' },
  { icon: BoxIcon, value: '제품/패키지 디자인' },
  { icon: CameraIcon, value: '포토그래피' },
  { icon: BookIcon, value: '브랜딩/편집' },
  { icon: VideoIcon, value: '영상/모션그래픽' },
];

export default function ModalJob({ data, setData, onClose }: ModalProps) {
  const [tempData, setTempData] = useState(data);

  const onReset = () => {
    setTempData([]);
  };

  const onApply = () => {
    setData(tempData);
    onClose();
  };

  const onClick = (categoryValue: string) => {
    if (categoryValue === '디자인 전체') {
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
        title='직무'
        number={tempData.length === 0 ? 1 : tempData.length}
        onClose={onClose}
        onReset={onReset}
      />
      <div className='flex flex-wrap gap-3'>
        {categories.map(category => (
          <ModalCategory
            key={category.value}
            value={category.value}
            icon={category.icon}
            active={
              tempData.length === 0
                ? category.value === '디자인 전체'
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
