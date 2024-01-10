interface CategoryButtonProps {
  title: string;
  className?: string;
  active?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function CategoryButton({
  title,
  className,
  active,
  onClick,
}: CategoryButtonProps) {
  return (
    <button
      className={`rounded-full border px-[16px] py-[12px] text-label1 text-text-alternative transition-all ${className} ${
        active
          ? 'border-primary-heavy bg-primary-heavy text-white'
          : 'border-line-normal bg-white'
      } transition-all duration-300 hover:bg-primary-heavy hover:text-white`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default CategoryButton;
