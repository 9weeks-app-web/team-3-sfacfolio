import { IconProps } from './HeartIcon';

export default function BoxIcon({ color }: IconProps) {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Box 2'>
        <path
          id='Vector 156'
          d='M1 3.91667V11.4167C1 11.8204 1.24274 12.1845 1.61538 12.3397L8 15M1 3.91667L7.23077 1.32051C7.72308 1.11538 8.27692 1.11538 8.76923 1.32051L11.5 2.45833M1 3.91667L4.5 5.375M8 6.83333V15M8 6.83333L15 3.91667M8 6.83333L4.5 5.375M8 15L14.3846 12.3397C14.7573 12.1845 15 11.8204 15 11.4167V3.91667M15 3.91667L11.5 2.45833M4.5 5.375L11.5 2.45833'
          stroke={color}
          strokeWidth='1.2'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
}
