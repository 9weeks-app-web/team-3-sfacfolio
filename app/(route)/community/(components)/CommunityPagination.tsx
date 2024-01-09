import Link from 'next/link';

interface PaginationProps {
  total?: number;
  page: string;
  pathname: {
    pathname: string;
    query: {
      category: string;
      page: string;
    };
  };
}

export default function CommunityPagination({
  total = 0,
  page,
  pathname,
}: PaginationProps) {
  const currentPage = parseInt(page);

  return (
    <div className='mt-[80px] flex items-center justify-between'>
      <div>
        {currentPage > 1 && (
          <Link
            href={{
              ...pathname,
              query: { ...pathname.query, page: currentPage - 1 },
            }}
          >
            <span
              className={`flex h-9 w-[101px] cursor-pointer items-center justify-center rounded border border-line-normal bg-white text-text-alternative`}
            >
              이전페이지
            </span>
          </Link>
        )}
      </div>
      <div className='flex gap-2'>
        {Array.from({ length: total }, (_, i) => i + 1).map(pageNum => (
          <Link
            key={pageNum}
            href={{
              ...pathname,
              query: { ...pathname.query, page: pageNum.toString() },
            }}
          >
            <span
              className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded border font-medium ${
                currentPage === pageNum
                  ? 'border-primary-heavy bg-primary-heavy text-white'
                  : 'border-line-normal bg-white text-text-alternative '
              }`}
            >
              {pageNum}
            </span>
          </Link>
        ))}
      </div>
      <div>
        {total > currentPage && (
          <Link
            href={{
              ...pathname,
              query: { ...pathname.query, page: currentPage + 1 },
            }}
          >
            <span
              className={`flex h-9 w-[101px] cursor-pointer items-center justify-center rounded border border-line-normal bg-white text-text-alternative`}
            >
              다음페이지
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
