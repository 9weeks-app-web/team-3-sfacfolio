import CompanyDetailSection from './CompanyDetailSection';

interface CompanyDetailKeywordSectionPropsType {
  id: string;
  keywords: string[];
}

function CompanyDetailKeywordSection({
  id,
  keywords,
}: CompanyDetailKeywordSectionPropsType) {
  return (
    <CompanyDetailSection title='기업의 키워드' id={id}>
      <ul className='w-11/12 flex flex-wrap gap-3 pt-4'>
        {keywords.map(keyword => (
          <li
            key={keyword}
            className='px-4 py-3 text-label1 font-medium border rounded-full text-text-normal bg-background-primary'
          >
            #{keyword}
          </li>
        ))}
      </ul>
    </CompanyDetailSection>
  );
}

export default CompanyDetailKeywordSection;
