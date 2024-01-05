import { IconProps } from './HeartIcon';

export default function CameraIcon({ color }: IconProps) {
  return (
    <svg
      width='18'
      height='16'
      viewBox='0 0 18 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Camera'>
        <path
          id='Rectangle 74'
          d='M1 6.02443C1 4.74068 2.04068 3.7 3.32442 3.7H3.38838C4.27942 3.7 5.08472 3.16899 5.43571 2.35V2.35C5.78671 1.53101 6.59201 1 7.48304 1H8.71429H9.94553C10.8366 1 11.6419 1.53101 11.9929 2.35V2.35C12.3439 3.16899 13.1492 3.7 14.0402 3.7H14.1041C15.3879 3.7 16.4286 4.74068 16.4286 6.02442V10.5C16.4286 12.7091 14.6377 14.5 12.4286 14.5H5C2.79086 14.5 1 12.7091 1 10.5V6.02443Z'
          stroke={color}
          strokeWidth='1.2'
        />
        <circle
          id='Ellipse 33'
          cx='2.31429'
          cy='2.31429'
          r='2.31429'
          transform='matrix(-1 0 0 1 11.0273 6.01367)'
          stroke={color}
          strokeWidth='1.5'
        />
      </g>
    </svg>
  );
}
