import React from 'react';
import { LocationType, YearsType } from '../page';
import {
  getLocationFilterItems,
  getTechAndJobFilterItems,
  getYearsFilterItems,
} from '@/utils/companyFilterUtils';

type FilterCategory = '경력' | '지역' | '직무' | '테크';

type FilterType<T> = T extends '지역'
  ? LocationType[]
  : T extends '테크' | '직무'
    ? string[]
    : T extends '경력'
      ? YearsType
      : never;

interface CompanyFilterButtonProps<T extends FilterCategory> {
  text: T;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  selectedFilter: FilterType<T>;
}

function CompanyFilterButton<T extends FilterCategory>({
  text,
  onClick,
  selectedFilter,
}: CompanyFilterButtonProps<T>) {
  let selectedFilterText = '';

  if (text === '지역')
    selectedFilterText = getLocationFilterItems(
      selectedFilter as LocationType[],
    );
  else if (text === '직무')
    selectedFilterText = getTechAndJobFilterItems(
      selectedFilter as string[],
      '디자인 전체',
    );
  else if (text === '테크')
    selectedFilterText = getTechAndJobFilterItems(
      selectedFilter as string[],
      '테크',
    );
  else if (text === '경력')
    selectedFilterText = getYearsFilterItems(selectedFilter as YearsType);

  return (
    <button
      className='flex gap-3 rounded-full border border-line-normal p-4 text-label2'
      onClick={onClick}
    >
      <span className='text-text-normal'>{text}</span>
      <span className='font-bold text-primary-heavy'>{selectedFilterText}</span>
    </button>
  );
}

export default CompanyFilterButton;
