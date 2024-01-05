import { useState } from 'react';

import ModalHeader from './ModalHeader';
import ModalLayout from './ModalLayout';
import { ModalProps } from './ModalTech';

import { locations } from '@/constants/locations';
import LocationItem from './LocationItem';

export default function ModalLocations({ data, setData, onClose }: ModalProps) {
  const [tempData, setTempData] = useState(data);
  const [selectedLocation, setSelectedLocation] = useState('전국');

  const onReset = () => {
    setData([]);
  };

  const onApply = () => {
    setData(tempData);
    onClose();
  };

  const handleLocationSelect = e => {
    setSelectedLocation(e);
  };

  return (
    <ModalLayout onApply={onApply} type='fixed'>
      <ModalHeader
        title='지역'
        number={tempData.length === 0 ? 1 : tempData.length}
        onClose={onClose}
        onReset={onReset}
      />
      <div className='mb-6 w-full'>
        <p className='mb-3 text-[20px] font-medium text-text-alternative'>
          국가
        </p>
        <select className='w-full	appearance-none rounded-lg border border-line-normal bg-background-secondary px-6 py-3 text-[18px] font-medium text-text-normal outline-none'>
          <option selected>한국</option>
        </select>
      </div>
      <div className='mb-6 flex w-full'>
        <div className='w-1/2'>
          <p className='mb-3 text-[20px] font-medium text-text-alternative'>
            지역
            <ul className='custom-scrollbar h-[260px] w-full overflow-auto rounded-l-lg border border-line-normal bg-background-primary'>
              <li
                className={`cursor-pointer px-6 py-3 text-label1 font-bold hover:bg-primary-assitive hover:text-primary-weak ${
                  selectedLocation === '전국'
                    ? 'border-2 border-primary-heavy bg-background-primary text-primary-heavy'
                    : 'text-text-alternative'
                }`}
                onClick={() => handleLocationSelect('전국')}
              >
                전국
              </li>
              {Object.keys(locations).map(location => (
                <li
                  key={location}
                  className={`cursor-pointer px-6 py-3 text-label1 font-bold hover:bg-primary-assitive hover:text-primary-weak ${
                    selectedLocation === location
                      ? 'border-2 border-primary-heavy bg-background-primary text-primary-heavy'
                      : 'text-text-alternative'
                  }`}
                  onClick={() => handleLocationSelect(location)}
                >
                  {location}
                </li>
              ))}
            </ul>
          </p>
        </div>
        <div className='w-1/2'>
          <p className='mb-3 text-[20px] font-medium text-text-alternative'>
            상세지역
            <ul className='custom-scrollbar h-[260px] w-full overflow-auto rounded-r-lg border border-line-normal bg-background-primary'>
              {selectedLocation === '전국' ? (
                <li className='flex h-full items-center justify-center text-center text-label2 font-medium text-text-alternative'>
                  지역을 선택하면
                  <br />
                  상세 지역을 확인할 수 있습니다.
                </li>
              ) : (
                locations[selectedLocation]?.map((subLocation: string) => (
                  <li
                    key={subLocation}
                    className='px-6 py-3 text-label1 font-bold text-text-alternative hover:bg-primary-assitive hover:text-primary-weak'
                  >
                    {subLocation}
                  </li>
                ))
              )}
            </ul>
          </p>
        </div>
      </div>
      <div className='w-full rounded bg-background-primary p-2'>
        <div className='flex flex-wrap gap-2.5 mb-4'>
          <LocationItem location='한국' subLocation='전국' />
        </div>
        <p className='text-caption3 font-medium text-text-alternative'>
          지역은 최대 15개까지 선택하실 수 있어요.
        </p>
      </div>
    </ModalLayout>
  );
}
