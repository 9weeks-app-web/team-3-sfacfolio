import ModalHeader from './ModalHeader';
import ModalLayout from './ModalLayout';
import { ModalProps } from './ModalTech';

export default function ModalJob({ data, setData, onClose }: ModalProps) {
  const onReset = () => {
    setData('all');
  };

  return (
    <ModalLayout>
      <ModalHeader
        title='직무'
        number={15}
        onClose={onClose}
        onReset={onReset}
      />
      ModalJob
    </ModalLayout>
  );
}
