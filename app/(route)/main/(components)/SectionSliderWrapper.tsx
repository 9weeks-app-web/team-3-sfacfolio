interface SectionWrapperProps {
  children?: React.ReactNode;
  className?: string;
  slider?: React.ReactNode;
  banner?: React.ReactNode;
}

export default function SectionWrapper({
  children,
  className = '',
  slider,
  banner,
}: SectionWrapperProps) {
  return (
    <div className={`mx-auto w-full ${className}`}>
      <div className='container overflow-hidden'>{children}</div>
      {slider}
      {banner && (
        <div className='container mt-20 overflow-hidden'>{banner}</div>
      )}
    </div>
  );
}
