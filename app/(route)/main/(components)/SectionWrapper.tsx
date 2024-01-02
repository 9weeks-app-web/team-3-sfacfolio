interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  children,
  className = '',
}: SectionWrapperProps) {
  return (
    <div className={`mx-auto w-full py-20 ${className}`}>
      <div className='container overflow-hidden'>{children}</div>
    </div>
  );
}
