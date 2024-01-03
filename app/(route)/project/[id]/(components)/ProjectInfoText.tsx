import ProjectInfoTag from './ProjectInfoTag';

interface ContactMethodType {
  type: string;
  value: string;
}

interface RecruitmentPositionType {
  position: string;
  number: number;
  isRecruitClosed: boolean;
}

interface ProjectInfoTextProps {
  type: string;
  value: string | string[] | ContactMethodType | RecruitmentPositionType[];
  className?: string;
}

export default function ProjectInfoText({
  type,
  value,
  className = '',
}: ProjectInfoTextProps) {
  const renderValue = (
    val: string | string[] | ContactMethodType | RecruitmentPositionType[],
  ): React.ReactNode => {
    if (typeof val === 'object' && val !== null) {
      // type이 "연락방법"일 때
      if ('type' in val && 'value' in val) {
        return (
          <>
            {val.type} <span className='px-3'>|</span> {val.value}
          </>
        );
      }
    }

    if (Array.isArray(val)) {
      if (val.every(item => typeof item === 'string')) {
        // type이 "필요기술"일 때
        return val.map(item => <ProjectInfoTag key={item} value={item} />);
      } else if (val.every(item => 'position' in item && 'number' in item)) {
        // type이 "모집직군"일 때
        return val.map(item => (
          <ProjectInfoTag
            key={item.position}
            value={item.position}
            number={item.number}
            isClosed={item.isRecruitClosed}
          />
        ));
      }
    }

    return <>{val}</>;
  };

  return (
    <div className={`flex w-full items-center ${className}`}>
      <span className='mr-5 text-[20px] font-bold'>{type}</span>
      <span className='flex flex-row gap-2'>{renderValue(value)}</span>
    </div>
  );
}
