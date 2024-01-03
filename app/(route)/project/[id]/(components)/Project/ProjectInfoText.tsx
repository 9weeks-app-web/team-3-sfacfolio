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
    //
    if (Array.isArray(val)) {
      if (type === '필요기술') {
        // type이 "필요기술"일 때
        return val.map((item, i) => (
          <ProjectInfoTag key={i} value={item as string} />
        ));
      } else if (type === '모집직군') {
        // type이 "모집직군"일 때
        return (val as RecruitmentPositionType[]).map((item, i) => {
          return (
            <ProjectInfoTag
              key={i}
              value={item.position}
              number={item.number.toString()}
              isClosed={item.isRecruitClosed}
            />
          );
        });
      }
    }

    return <>{val}</>;
  };

  return (
    <div className={`flex items-center ${className}`}>
      <span className='mr-5 text-[20px] font-bold'>{type}</span>
      <span className='flex flex-row gap-2'>{renderValue(value)}</span>
    </div>
  );
}
