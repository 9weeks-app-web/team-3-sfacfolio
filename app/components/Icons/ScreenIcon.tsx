import { IconProps } from './HeartIcon';

export default function ScreenIcon({ color }: IconProps) {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Screen'>
        <rect
          id='Rectangle 74'
          x='1'
          y='1'
          width='14'
          height='14'
          rx='3'
          stroke={color}
          strokeWidth='1.2'
        />
        <path
          id='Line'
          d='M9.75 1.87498L9.75 14.125'
          stroke={color}
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          id='Line_2'
          d='M9.74999 8.875H14.125'
          stroke={color}
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
}
