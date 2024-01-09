interface PaginationProps {
  total?: number;
  page: string;
  changePage: (page: number) => void;
}

export default function CommunityPagination({
  total = 0,
  page,
  changePage,
}: PaginationProps) {
  const currentPage = parseInt(page);

  return (
    <div className='mt-[80px] flex items-center justify-between'>
      <div>
        {currentPage > 1 && (
          <span
            onClick={() => changePage(currentPage - 1)}
            className={`flex h-9 w-[101px] cursor-pointer items-center justify-center rounded border border-line-normal bg-white text-text-alternative`}
          >
            이전페이지
          </span>
        )}
      </div>
      <div className='flex gap-2'>
        {Array.from({ length: total }, (_, i) => i + 1).map(pageNum => (
          <span
            key={pageNum}
            onClick={() => changePage(pageNum)}
            className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded border font-medium ${
              currentPage === pageNum
                ? 'border-primary-heavy bg-primary-heavy text-white'
                : 'border-line-normal bg-white text-text-alternative '
            }`}
          >
            {pageNum}
          </span>
        ))}
      </div>
      <div>
        {total > currentPage && (
          <span
            onClick={() => changePage(currentPage + 1)}
            className={`flex h-9 w-[101px] cursor-pointer items-center justify-center rounded border border-line-normal bg-white text-text-alternative`}
          >
            다음페이지
          </span>
        )}
      </div>
    </div>
  );
}
