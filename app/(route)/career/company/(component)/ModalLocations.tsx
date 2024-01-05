import ModalHeader from './ModalHeader';
import ModalLayout from './ModalLayout';
import { ModalProps } from './ModalTech';

export default function ModalLocations({ data, setData, onClose }: ModalProps) {
  const onReset = () => {
    setData('all');
  };

  return (
    <ModalLayout type='fixed'>
      <ModalHeader
        title='지역'
        number={15}
        onClose={onClose}
        onReset={onReset}
      />
      ModalLocations
    </ModalLayout>
  );
}
