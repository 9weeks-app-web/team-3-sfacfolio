import { Dispatch, SetStateAction, useState } from 'react';

import ModalHeader from './ModalHeader';
import ModalLayout from './ModalLayout';

import { locations } from '@/constants/locations';
import LocationItem from './LocationItem';
import { LocationType } from '../page';

interface ModalProps {
  data: LocationType[];
  setData: Dispatch<SetStateAction<LocationType[]>>;
  onClose: () => void;
}

export default function ModalLocations({ data, setData, onClose }: ModalProps) {
  const [tempData, setTempData] = useState(data);
  const lastSelect =
    tempData.length === 0 ? '전국' : tempData[tempData.length - 1].location;
  const [selectedLocation, setSelectedLocation] = useState(lastSelect);

  const onReset = () => {
    setTempData([]);
  };

  const onApply = () => {
    setData(tempData);
    onClose();
  };

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);

    if (location === '전국') {
      setTempData([]);
    } else {
      const updatedTempData = tempData.filter(
        item => item.location !== location,
      );
      updatedTempData.push({ location: location, subLocation: '전체' });
      setTempData(updatedTempData);
    }
  };

  const handleSubLocationSelect = (subLocation: string) => {
    if (selectedLocation === '전국') return;
    let updatedTempData;

    if (tempData.length === 15) {
      alert('지역은 최대 15개까지 선택할 수 있습니다.');
      return;
    }

    if (subLocation === '전체') {
      // '전체'를 선택한 경우, 해당 상위 지역의 다른 상세 지역을 제거하고 '전체'만 남김
      updatedTempData = tempData.filter(
        item => item.location !== selectedLocation,
      );
      updatedTempData.push({ location: selectedLocation, subLocation: '전체' });
      setTempData(updatedTempData);
    } else {
      // 이미 선택된 상세지역을 다시 선택한 경우 해당 지역을 제거하기 위해 확인 (toggle 기능)
      const existingIndex = tempData.findIndex(
        item =>
          item.location === selectedLocation &&
          item.subLocation === subLocation,
      );

      if (existingIndex === -1) {
        // 다른 상세 지역을 선택한 경우, '전체'를 제거하고 새로운 상세 지역 추가
        updatedTempData = tempData.filter(
          item =>
            item.location !== selectedLocation ||
            (item.location === selectedLocation && item.subLocation !== '전체'),
        );

        updatedTempData.push({ location: selectedLocation, subLocation });
      } else {
        // 이미 선택된 상세지역을 다시 선택한 경우 해당 지역을 제거
        updatedTempData = [
          ...tempData.slice(0, existingIndex),
          ...tempData.slice(existingIndex + 1),
        ];
      }

      setTempData(updatedTempData);
    }
  };

  // 지역이 선택되어 있는지 확인
  const isLocationSelected = (location: string) => {
    return tempData.some(item => item.location === location);
  };

  // 상세지역이 선택되어 있는지 확인
  const isSubLocationSelected = (subLocation: string) => {
    return tempData.some(
      item =>
        item.location === selectedLocation && item.subLocation === subLocation,
    );
  };

  return (
    <ModalLayout onApply={onApply} onClose={onClose} type='fixed'>
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
          <option defaultValue='한국'>한국</option>
        </select>
      </div>
      <div className='mb-6 flex w-full'>
        <div className='w-1/2'>
          <div className='mb-3 text-[20px] font-medium text-text-alternative'>
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
                      : isLocationSelected(location)
                        ? 'text-primary-heavy'
                        : 'text-text-alternative'
                  }`}
                  onClick={() => handleLocationSelect(location)}
                >
                  {location}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='w-1/2'>
          <div className='mb-3 text-[20px] font-medium text-text-alternative'>
            상세지역
            <ul className='custom-scrollbar h-[260px] w-full overflow-auto rounded-r-lg border border-line-normal bg-background-primary'>
              {selectedLocation === '전국' ? (
                <li className='flex h-full items-center justify-center text-center text-label2 font-medium text-text-alternative'>
                  지역을 선택하면
                  <br />
                  상세 지역을 확인할 수 있습니다.
                </li>
              ) : (
                <>
                  <li
                    className={`cursor-pointer px-6 py-3 text-label1 font-bold  hover:bg-primary-assitive hover:text-primary-weak ${
                      isSubLocationSelected('전체')
                        ? 'text-primary-heavy'
                        : 'text-text-alternative'
                    }`}
                    onClick={() => handleSubLocationSelect('전체')}
                  >
                    전체
                  </li>
                  {locations[selectedLocation]?.map((subLocation: string) => (
                    <li
                      key={subLocation}
                      className={`cursor-pointer px-6 py-3 text-label1 font-bold  hover:bg-primary-assitive hover:text-primary-weak ${
                        isSubLocationSelected(subLocation)
                          ? 'text-primary-heavy'
                          : 'text-text-alternative'
                      }`}
                      onClick={() => handleSubLocationSelect(subLocation)}
                    >
                      {subLocation}
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className='w-full rounded bg-background-primary p-2'>
        <div className='mb-4 flex flex-wrap gap-2.5'>
          {tempData.length === 0 ? (
            <LocationItem location='한국' subLocation='전국' />
          ) : (
            tempData.map((item, index) => (
              <LocationItem
                key={index}
                location={item.location}
                subLocation={item.subLocation}
              />
            ))
          )}
        </div>
        <p className='text-caption3 font-medium text-text-alternative'>
          지역은 최대 15개까지 선택하실 수 있어요.
        </p>
      </div>
    </ModalLayout>
  );
}
