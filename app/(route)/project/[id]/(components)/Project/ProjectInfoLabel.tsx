interface ProjectInfoLabelProps {
  contents: string;
  type?: string;
}

export default function ProjectInfoLabel({
  contents,
  type,
}: ProjectInfoLabelProps) {
  return (
    <div
      className={`rounded-[4px] border px-[18px] py-2 font-bold tracking-[-0.16px] ${
        type === 'period'
          ? 'border-primary-heavy bg-primary-assitive'
          : 'border-line-normal bg-white'
      }`}
    >
      {contents}
    </div>
  );
}
