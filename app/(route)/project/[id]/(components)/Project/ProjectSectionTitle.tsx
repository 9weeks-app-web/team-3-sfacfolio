interface ProjectSectionTitleProps {
  title: string;
  number?: number;
}

export default function ProjectSectionTitle({
  title,
  number,
}: ProjectSectionTitleProps) {
  return (
    <p className='mb-9 flex items-center text-subTitle font-bold'>
      {title}
      {number && (
        <span className='ml-2 text-[20px] text-text-alternative'>
          ({number})
        </span>
      )}
    </p>
  );
}
