import { Dispatch, SetStateAction } from 'react';
import ModalLayout from './ModalLayout';

export interface ModalProps {
  data: 'all' | string[];
  setData: Dispatch<SetStateAction<'all' | string[]>>;
}

export default function ModalTech({ data, setData }: ModalProps) {
  return <ModalLayout title='테크'>ModalTech</ModalLayout>;
}
