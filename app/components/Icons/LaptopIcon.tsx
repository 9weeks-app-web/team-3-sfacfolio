import { IconProps } from './HeartIcon';

export default function ScaleIcon({ color }: IconProps) {
  return (
    <svg
      width='17'
      height='13'
      viewBox='0 0 17 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Laptop'>
        <rect
          id='Rectangle 74'
          x='1'
          y='9.80078'
          width='14.6667'
          height='2.2'
          rx='1'
          stroke={color}
          strokeWidth='1.2'
        />
        <rect
          id='Rectangle 75'
          x='1.73242'
          y='1'
          width='13.2'
          height='8.8'
          rx='1'
          stroke={color}
          strokeWidth='1.2'
        />
        <path
          id='Vector 134'
          d='M9.80078 1.36719L6.86745 1.36719'
          stroke={color}
          strokeWidth='2'
          strokeLinecap='round'
        />
      </g>
    </svg>
  );
}
