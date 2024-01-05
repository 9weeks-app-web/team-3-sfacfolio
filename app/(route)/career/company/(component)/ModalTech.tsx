import { Dispatch, SetStateAction } from 'react';
import ModalLayout from './ModalLayout';
import ModalHeader from './ModalHeader';

export interface ModalProps {
  data: 'all' | string[];
  setData: Dispatch<SetStateAction<'all' | string[]>>;
  onClose: () => void;
}

export default function ModalTech({ data, setData, onClose }: ModalProps) {
  const onReset = () => {
    setData('all');
  };

  return (
    <ModalLayout>
      <ModalHeader
        title='테크'
        number={15}
        onClose={onClose}
        onReset={onReset}
      />
      ModalTech
    </ModalLayout>
  );
}
