import ResumeButton from '../ResumeButton';

interface ResumeSectionPropsType {
  title: string;
  subTitle: string;
  children: React.ReactNode;
  isLink?: boolean;
  linkText?: string;
  isButton?: boolean;
  buttonValue?: string;
}

function ResumeSection({
  title,
  subTitle,
  children,
  isLink = false,
  linkText,
  isButton = false,
  buttonValue = '',
}: ResumeSectionPropsType) {
  return (
    <div
      className={`flex flex-col p-2 pt-14 ${
        title !== '경력' && title !== '포트폴리오/기타문서' && 'border-b'
      }`}
    >
      <div className='flex flex-col gap-2 border-b pb-6'>
        <span className='text-subTitle font-bold'>{title}</span>
        <span className='text-lg font-normal leading-6 text-text-assitive'>
          {subTitle}{' '}
          {isLink && (
            <span className='inline-block cursor-pointer underline underline-offset-2'>
              {linkText}
            </span>
          )}
        </span>
      </div>
      <div className='grid grid-cols-4 gap-6 pt-6'>{children}</div>
      {isButton && (
        <div className='flex gap-6 self-end pt-6'>
          <ResumeButton value='취소' />
          <ResumeButton value={buttonValue} isBig={true} />
        </div>
      )}
    </div>
  );
}

export default ResumeSection;
