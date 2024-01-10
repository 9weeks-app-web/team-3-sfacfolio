import { IconProps } from './HeartIcon';

export default function EyeIcon({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height='16'
      viewBox='0 0 20 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Eye'>
        <path
          id='Intersect'
          d='M1.20057 8.84979C0.933139 8.32002 0.933144 7.67982 1.20058 7.15006C2.9 3.7837 6.20336 1.5 9.99997 1.5C13.7966 1.5 17.1 3.78377 18.7994 7.15021C19.0669 7.67998 19.0669 8.32018 18.7994 8.84994C17.1 12.2163 13.7966 14.5 10 14.5C6.20336 14.5 2.89997 12.2162 1.20057 8.84979Z'
          stroke={color}
          strokeWidth='1.5'
        />
        <circle
          id='Ellipse 44'
          cx='10.001'
          cy='7.83325'
          r='3'
          stroke={color}
          strokeWidth='1.5'
        />
      </g>
    </svg>
  );
}
