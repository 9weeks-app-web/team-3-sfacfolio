import { IconProps } from '@/components/Icons/HeartIcon';

interface ModalCategoryProps {
  icon: React.ElementType<IconProps>;
  value: string;
  active?: boolean;
}

export default function ModalCategory({
  icon: Icon,
  value,
  active,
}: ModalCategoryProps) {
  return (
    <button
      className={`flex items-center justify-center gap-1.5 rounded-full border border-line-normal p-3 text-[15px] font-medium ${
        active
          ? 'border-primary-heavy bg-primary-heavy text-white'
          : 'bg-white text-text-alternative'
      }`}
    >
      {Icon && <Icon color={`${active ? 'white' : '#8A8A8A'}`} />}
      {value}
    </button>
  );
}
