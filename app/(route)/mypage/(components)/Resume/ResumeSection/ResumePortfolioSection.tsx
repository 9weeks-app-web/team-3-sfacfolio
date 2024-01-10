import ResumeSection from './ResumeSection';
import ResumeSelectInput from '../ResumeInput/ResumeSelectInput';

function ResumePortfolioSection() {
  return (
    <ResumeSection
      title='포트폴리오/기타문서'
      subTitle='스팩폴리오에 업로드된 포트폴리오를 한 번에 불러올 수 있어요!'
      isLink={true}
      linkText='불러오기'
      isButton={true}
      buttonValue='포트폴리오/기타문서 추가하기'
    >
      <ResumeSelectInput
        label='문서 구분'
        placeholder='문서 구분 선택'
        options={[]}
        isShort={true}
      />
      <ResumeSelectInput
        label='문서 첨부'
        placeholder='링크/파일'
        options={[]}
        isShort={true}
      />
      <ResumeSelectInput label='' placeholder='파일 추가하기' options={[]} />
    </ResumeSection>
  );
}

export default ResumePortfolioSection;
