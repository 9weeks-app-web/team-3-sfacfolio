import CompanyDetailCarousel from './Section/CompanyDetailCarousel';
import CompanyDetailNavigation from './Section/CompanyDetailNavigation';
import CompanyDetailKeyword from './Section/CompanyDetailKeyword';
import CompanyDetailText from './Section/CompanyDetailText';
import CompanyDetailLocation from './Section/CompanyDetailLocation';
import { companyDetailSections } from '@/constants';
import { CompanyHireType } from '../../page';

function CompanyInfo({ data }: { data: CompanyHireType }) {
  return (
    <div className='flex flex-col gap-6 w-[845px]'>
      <CompanyDetailCarousel images={data.images} />
      <CompanyDetailNavigation />
      <CompanyDetailKeyword
        id={companyDetailSections[0].id}
        keywords={data.keywords}
      />
      <CompanyDetailText
        title='저희 기업은요'
        content={data.requirement}
        id={companyDetailSections[1].id}
      />
      <CompanyDetailText
        title='저희가 모시고자 하는 인재는요'
        content={data.condition}
        id={companyDetailSections[2].id}
      />
      <CompanyDetailText
        title='접수 방법과 전형 절차는 이렇습니다!'
        content={data.applyMethod}
        id={companyDetailSections[3].id}
        isButton={Boolean(data.applyPage)}
        buttonLink={'/'}
      />
      <CompanyDetailText
        title='우리 기업만의 복지! 지금 알려드릴게요!'
        content={data.welfare}
        id={companyDetailSections[4].id}
      />
      <CompanyDetailLocation
        id={companyDetailSections[5].id}
        location={data.location}
      />
    </div>
  );
}

export default CompanyInfo;
