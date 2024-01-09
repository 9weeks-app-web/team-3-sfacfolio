interface SettingWrapProps {
  children: React.ReactNode;
}

export default function SettingWrap({ children }: SettingWrapProps) {
  return (
    <div className='mb-6 box-content w-full rounded-lg border border-line-normal bg-white'>
      {children}
    </div>
  );
}
