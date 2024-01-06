interface CompanyBagIconProps {
  width: number;
  height: number;
  stroke: string;
}

export default function CompanyBagIcon({
  width,
  height,
  stroke,
}: CompanyBagIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 22 20'
      fill='none'
    >
      <path
        d='M1 6.42969C1 5.32512 1.89543 4.42969 3 4.42969L19 4.42969C20.1046 4.42969 21 5.32512 21 6.42969V8.08445C21 8.96767 20.4207 9.74631 19.5747 10.0001L12.1494 12.2277C11.3996 12.4526 10.6004 12.4526 9.85061 12.2277L2.42531 10.0001C1.57934 9.74631 1 8.96767 1 8.08445V6.42969Z'
        stroke={stroke}
        strokeWidth='1.5'
      />
      <path
        d='M11 9.5717L11 7.85742'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1.83203 9.57031L1.83203 14.9988C1.83203 17.208 3.62289 18.9988 5.83203 18.9988H16.1654C18.3745 18.9988 20.1654 17.208 20.1654 14.9988V9.57031'
        stroke={stroke}
        strokeWidth='1.5'
      />
      <path
        d='M14.3346 4.42855V3C14.3346 1.89543 13.4392 1 12.3346 1L9.66797 1C8.5634 1 7.66797 1.89543 7.66797 3L7.66797 4.42855'
        stroke={stroke}
        strokeWidth='1.5'
      />
    </svg>
  );
}
