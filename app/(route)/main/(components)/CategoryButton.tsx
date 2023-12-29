interface CategoryButtonProps {
  title: string;
  active?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function CategoryButton({ title, active, onClick }: CategoryButtonProps) {
  return (
    <button
      className={`rounded-full border border-line-normal px-[16px] py-[12px] text-label1 text-text-alternative transition-all	 ${
        active && 'border-black bg-black text-white'
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default CategoryButton;
