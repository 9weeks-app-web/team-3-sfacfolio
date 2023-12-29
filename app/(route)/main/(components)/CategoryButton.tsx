interface CategoryButtonProps {
  title: string;
  active?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function CategoryButton({ title, active, onClick }: CategoryButtonProps) {
  return (
    <button
      className={`text-label1 text-text-alternative px-[16px] py-[12px] border border-line-normal rounded-full transition-all	 ${
        active && 'bg-black text-white border-black'
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default CategoryButton;
