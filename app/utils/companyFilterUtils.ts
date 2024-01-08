import { LocationType, YearsType } from '@/(route)/career/company/page';

export const getLocationFilterItems = (selectedFilter: LocationType[]) => {
  if (selectedFilter.length === 0) return '전국';
  else if (selectedFilter.length === 1)
    return `${selectedFilter[0].location} ${selectedFilter[0].subLocation}`;
  else
    return `${selectedFilter[0].location} ${selectedFilter[0].subLocation} 외 ${
      selectedFilter.length - 1
    } 지역`;
};

export const getTechAndJobFilterItems = (
  selectedFilter: string[],
  defaultText: string,
) => {
  if (selectedFilter.length === 0) return defaultText;
  else if (selectedFilter.length === 1) return selectedFilter[0];
  else return `${selectedFilter[0]} 외 ${selectedFilter.length - 1}`;
};

export const getYearsFilterItems = (selectedFilter: YearsType) => {
  const { start, end } = selectedFilter;

  if (start === 0 && end === 0) return '신입';
  else if (start === 0 && start < end) return `신입 - ${end}년`;
  else if (start < end) return `${start}년 - ${end}년`;
  else if (start === end) return `${start}년 이상`;
  else return '';
};
