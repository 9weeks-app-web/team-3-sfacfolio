interface CompanyDetailSectionPropsType {
  title: string;
  id?: string;
  children: React.ReactNode;
  isSticky?: boolean;
}

function CompanyDetailSection({
  title,
  id,
  children,
  isSticky = false,
}: CompanyDetailSectionPropsType) {
  return (
    <div
      id={id}
      className={`${
        isSticky && 'sticky top-[55px]'
      } flex flex-col p-6 border rounded-lg bg-white`}
    >
      <span className='text-lg font-bold left-6'>{title}</span>
      {children}
    </div>
  );
}

export default CompanyDetailSection;
