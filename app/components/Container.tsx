import React, { PropsWithChildren } from 'react';

interface ContainerProps {
  className?: string;
}

export default function Container({
  className,
  children,
}: PropsWithChildren<ContainerProps>) {
  return (
    <div
      className={`container mx-auto mobile:px-10 desktop:px-20 ${className}`}
    >
      {children}
    </div>
  );
}
