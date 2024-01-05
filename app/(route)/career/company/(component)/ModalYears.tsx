import { Dispatch, SetStateAction } from 'react';
import ModalLayout from './ModalLayout';

interface ModalProps {
  data: { start: number; end: number };
  setData: Dispatch<SetStateAction<{ start: number; end: number }>>;
}

export default function ModalYears({ data, setData }: ModalProps) {
  return <ModalLayout title='경력'>ModalYears</ModalLayout>;
}
