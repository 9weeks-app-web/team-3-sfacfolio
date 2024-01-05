import React, { Dispatch, SetStateAction, useState } from 'react';
import Slider from 'rc-slider';
import '@/style/rc-slider.css';

import ModalLayout from './ModalLayout';
import ModalHeader from './ModalHeader';
import { YearsType } from '../page';

interface ModalProps {
  data: YearsType;
  setData: Dispatch<SetStateAction<YearsType>>;
  onClose: () => void;
}

export default function ModalYears({ data, setData, onClose }: ModalProps) {
  const [tempData, setTempData] = useState(data);

  const onReset = () => {
    setData({ start: 1, end: 9 });
  };

  const onApply = () => {
    setData(tempData);
    onClose();
  };

  const handleSliderChange = (newRange: [number, number]) => {
    setTempData({ start: newRange[0], end: newRange[1] });
  };

  return (
    <ModalLayout onApply={onApply}>
      <ModalHeader title='경력' onClose={onClose} onReset={onReset} />
      <div className='py-3'>
        <p className='text-[18px] font-bold text-primary-heavy'>
          {tempData.start === 0 ? '신입' : tempData.start + '년'} -{' '}
          {tempData.end === 10 ? '10년 이상' : tempData.end + '년'}
        </p>
        <DynamicBounds
          onSliderChange={handleSliderChange}
          minData={tempData.start}
          maxData={tempData.end}
        />
      </div>
    </ModalLayout>
  );
}

interface DynamicBoundsProps {
  onSliderChange: (newRange: [number, number]) => void;
  minData: number;
  maxData: number;
}

interface DynamicBoundsState {
  min: number;
  max: number;
}

class DynamicBounds extends React.Component<
  DynamicBoundsProps,
  DynamicBoundsState
> {
  constructor(props: DynamicBoundsProps) {
    super(props);
    this.state = {
      min: 0,
      max: 10,
    };
  }

  onSliderChange = (value: number | number[]) => {
    if (Array.isArray(value) && value.length === 2) {
      this.props.onSliderChange(value as [number, number]);
    }
  };

  onMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      min: +e.target.value || 0,
    });
  };

  onMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      max: +e.target.value || 10,
    });
  };

  render() {
    return (
      <div className='mt-3'>
        <Slider
          range
          defaultValue={[this.props.minData, this.props.maxData]}
          min={this.state.min}
          max={this.state.max}
          onChange={this.onSliderChange}
        />
        <div className='mt-3 flex justify-between text-label1 font-normal text-text-disable'>
          <span>0</span>
          <span>1</span>
          <span>10+</span>
        </div>
      </div>
    );
  }
}
