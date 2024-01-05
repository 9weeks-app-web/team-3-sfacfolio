import ModalHeader from './ModalHeader';
import ModalLayout from './ModalLayout';
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
import ModalCategory from './ModalCategory';

const categories = [
  { icon: CategoryIcon, value: '디자인 전체', acitve: true },
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
  const onReset = () => {
    setData('all');
  };

  return (
    <ModalLayout>
      <ModalHeader
        title='직무'
        number={data === 'all' ? 1 : data.length}
        onClose={onClose}
        onReset={onReset}
      />
      <div className='flex flex-wrap gap-3	'>
        {categories.map(category => (
          <ModalCategory
            key={category.value}
            value={category.value}
            icon={category.icon}
            active={category.acitve}
          />
        ))}
      </div>
      <p className='mb-3 mt-4 text-caption3 font-medium text-text-alternative'>
        직무는 최대 5개까지 선택하실 수 있어요.
      </p>
    </ModalLayout>
  );
}
