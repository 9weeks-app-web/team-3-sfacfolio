export default function SectionWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  console.log(className);
  return (
    <div className={`w-full mx-auto py-20 ${className}`}>
      <div className='container overflow-hidden'>{children}</div>
    </div>
  );
}
