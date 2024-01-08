'use client';
import CompanyDetailSection from './CompanyDetailSection';
import useSectionMove from '@/hooks/useSectionMove';
import { companyDetailSections } from '@/constants';

function CompanyDetailNavigation() {
  const { selectedSection, handleSectionButtonClick } = useSectionMove(
    companyDetailSections,
  );

  return (
    <CompanyDetailSection title='기업 정보 빠르게 확인하기' isSticky={true}>
      <ul className='flex gap-3 pt-4'>
        {companyDetailSections.map(section => (
          <li
            key={section.id}
            className={`${
              selectedSection === section.id
                ? 'text-white bg-primary-heavy'
                : 'text-text-assitive bg-background-primary'
            } cursor-pointer px-4 py-3 text-label1 font-medium rounded-full`}
            onClick={() => handleSectionButtonClick(section.id)}
          >
            {section.label}
          </li>
        ))}
      </ul>
    </CompanyDetailSection>
  );
}

export default CompanyDetailNavigation;
