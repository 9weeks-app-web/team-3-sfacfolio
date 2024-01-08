interface PlusIconProps {
  width: number;
  height: number;
  stroke: string;
}

export default function PlusIcon({ width, height, stroke }: PlusIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        width='20'
        height='20'
        rx='5'
        transform='matrix(1 0 1.3632e-08 -1 2 22)'
        stroke={stroke}
        strokeWidth='1.5'
      />
      <path
        d='M9 12H15'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 15L12 9'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
