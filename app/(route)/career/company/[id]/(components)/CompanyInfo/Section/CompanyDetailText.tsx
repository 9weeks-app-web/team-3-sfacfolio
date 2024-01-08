import Link from 'next/link';
import CompanyDetailSection from './CompanyDetailSection';

interface CompanyDetailTextSectionPropsType {
  title: string;
  content: string;
  id: string;
  isButton?: boolean;
  buttonLink?: any;
}

function CompanyDetailTextSection({
  title,
  content,
  id,
  isButton = false,
  buttonLink,
}: CompanyDetailTextSectionPropsType) {
  return (
    <CompanyDetailSection title={title} id={id}>
      <div className='flex flex-col gap-6 pt-6'>
        <p className='text-label1 font-normal text-text-normal leading-6'>
          {content}
        </p>
        {isButton && (
          <Link
            href={buttonLink}
            className='self-end p-4 text-label1 font-bold leading-4 rounded-lg text-white bg-primary-heavy'
          >
            기업 채용 홈페이지
          </Link>
        )}
      </div>
    </CompanyDetailSection>
  );
}

export default CompanyDetailTextSection;
