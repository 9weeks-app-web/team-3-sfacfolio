import { IconProps } from './HeartIcon';

export default function CategoryIcon({ color }: IconProps) {
  return (
    <svg
      width='15'
      height='15'
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Category'>
        <rect
          id='Rectangle 2'
          x='1'
          y='1'
          width='5.35294'
          height='5.35294'
          rx='1.5'
          stroke={color}
          strokeWidth='1.2'
        />
        <rect
          id='Rectangle 4'
          x='1'
          y='8.35352'
          width='5.35294'
          height='5.35294'
          rx='1.5'
          stroke={color}
          strokeWidth='1.2'
        />
        <rect
          id='Rectangle 3'
          x='8.35156'
          y='1'
          width='5.35294'
          height='5.35294'
          rx='1.5'
          stroke={color}
          strokeWidth='1.2'
        />
        <rect
          id='Rectangle 5'
          x='8.35156'
          y='8.35352'
          width='5.35294'
          height='5.35294'
          rx='1.5'
          stroke={color}
          strokeWidth='1.2'
        />
      </g>
    </svg>
  );
}
