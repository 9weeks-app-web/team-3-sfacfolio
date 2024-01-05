import { Dispatch, SetStateAction } from 'react';
import ModalLayout from './ModalLayout';
import ModalHeader from './ModalHeader';

interface ModalProps {
  data: { start: number; end: number };
  setData: Dispatch<SetStateAction<{ start: number; end: number }>>;
  onClose: () => void;
}

export default function ModalYears({ data, setData, onClose }: ModalProps) {
  const onReset = () => {
    setData({ start: 1, end: 9 });
  };

  return (
    <ModalLayout>
      <ModalHeader
        title='경력'
        number={15}
        onClose={onClose}
        onReset={onReset}
      />
      ModalYears
    </ModalLayout>
  );
}
