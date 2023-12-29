interface CategoryButtonProps {
  title: string;
  active?: boolean;
}

function CategoryButton({ title, active }: CategoryButtonProps) {
  return (
    <button
      className={`text-label1 text-text-alternative px-[16px] py-[12px] border border-line-normal rounded-full ${
        active && 'bg-black text-white border-black'
      }`}
    >
      {title}
    </button>
  );
}

export default CategoryButton;
