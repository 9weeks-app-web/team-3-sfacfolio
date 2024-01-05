import Link from 'next/link';
import React from 'react';

interface HeaderButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

function HeaderButton({ children, href, className }: HeaderButtonProps) {
  return (
    <Link href={{ pathname: href }}>
      <button
        className={`flex h-10 w-[124px] items-center justify-center gap-2.5 rounded-lg border border-primary-weak text-primary-heavy ${className}`}
      >
        {children}
      </button>
    </Link>
  );
}

export default HeaderButton;
