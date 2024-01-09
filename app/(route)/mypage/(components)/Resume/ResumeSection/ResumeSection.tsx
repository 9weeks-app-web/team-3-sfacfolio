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
    <div className='flex flex-col p-6 border-b'>
      <div className='flex flex-col gap-2 pb-6 border-b'>
        <span className='text-subTitle font-bold'>{title}</span>
        <span className='text-lg font-normal leading-6 text-text-assitive'>
          {subTitle}{' '}
          {isLink && (
            <span className='cursor-pointer inline-block underline underline-offset-2'>
              {linkText}
            </span>
          )}
        </span>
      </div>
      <div className='grid grid-cols-4 gap-6 pt-6'>{children}</div>
      {isButton && (
        <div className='self-end flex pt-6 gap-6'>
          <ResumeButton value='취소' />
          <ResumeButton value={buttonValue} isBig={true} />
        </div>
      )}
    </div>
  );
}

export default ResumeSection;
