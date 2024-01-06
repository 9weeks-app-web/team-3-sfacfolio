import CompanyInfo from './(components)/CompanyInfo/CompanyInfo';
import CompanySticky from './(components)/CompanySticky/CompanySticky';

export interface CompanyHireType {
  id: string;
  company: string;
  companyAvatar?: string;
  notice: string;
  isHire: boolean;
  images: string[];
  keywords: string[];
  requirement: string;
  condition: string;
  applyMethod: string;
  applyPage?: string;
  welfare: string;
  location: { country: string; region: string; address: string };
}

const dummyCompanyHire: CompanyHireType = {
  id: '1',
  company: '하이브',
  notice: '[HYBE OSB] 그래픽 디자인(BX Desugner)',
  isHire: true,
  images: [
    '/assets/images/BannerImage.png',
    '/assets/images/BannerImage.png',
    '/assets/images/BannerImage.png',
    '/assets/images/BannerImage.png',
    '/assets/images/BannerImage.png',
    '/assets/images/BannerImage.png',
  ],
  keywords: [
    '연봉상위1%',
    '누적투자100억이상',
    '인원급성장',
    '301~1,000명',
    '설립10년이상',
    '육아휴직',
    '출산휴가',
    '음료',
    'IT,컨텐츠',
  ],
  requirement: '기업 자격 요건 내용',
  condition: '기업 근무 조건 내용',
  applyMethod: '진행절차 및 방법 내용',
  applyPage: '/',
  welfare: '기업 복지 관련 내용',
  location: {
    country: '한국',
    region: '서울',
    address: '서울특별시 용산구 한강대로 42',
  },
};

function CareerCompanyDetailPage() {
  return (
    <div className='bg-background-primary '>
      <div className='container pt-12 pb-[124px] flex justify-between'>
        <CompanyInfo data={dummyCompanyHire} />
        <CompanySticky data={dummyCompanyHire} />
      </div>
    </div>
  );
}

export default CareerCompanyDetailPage;
