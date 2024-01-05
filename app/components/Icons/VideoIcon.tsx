import { IconProps } from './HeartIcon';

export default function VideoIcon({ color }: IconProps) {
  return (
    <svg
      width='16'
      height='11'
      viewBox='0 0 16 11'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Video'>
        <rect
          id='Rectangle 74'
          x='1'
          y='1'
          width='9.69231'
          height='9'
          rx='2.4'
          stroke={color}
          strokeWidth='1.2'
        />
        <path
          id='Rectangle 74_2'
          d='M10.6914 4.57184L12.9614 2.99771C13.7572 2.44587 14.8453 3.0154 14.8453 3.98382V7.03225C14.8453 7.99714 13.7643 8.56745 12.9678 8.02274L10.6914 6.46582V4.57184Z'
          stroke={color}
          strokeWidth='1.2'
        />
      </g>
    </svg>
  );
}
