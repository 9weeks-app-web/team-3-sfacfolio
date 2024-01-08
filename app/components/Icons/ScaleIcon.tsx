import { IconProps } from './HeartIcon';

export default function ScaleIcon({ color }: IconProps) {
  return (
    <svg
      width='17'
      height='17'
      viewBox='0 0 17 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Scale'>
        <path
          id='Rectangle 74'
          d='M13.7742 4.45275V12.048M12.048 2.72656H4.45275M12.048 13.7742H4.45275M2.72656 4.45275V12.048'
          stroke={color}
          strokeWidth='1.2'
        />
        <circle
          id='Ellipse 44'
          cx='13.775'
          cy='2.72619'
          r='1.72619'
          stroke={color}
          strokeWidth='1.2'
        />
        <circle
          id='Ellipse 46'
          cx='2.72619'
          cy='2.72619'
          r='1.72619'
          stroke={color}
          strokeWidth='1.2'
        />
        <circle
          id='Ellipse 45'
          cx='13.775'
          cy='13.7731'
          r='1.72619'
          stroke={color}
          strokeWidth='1.2'
        />
        <circle
          id='Ellipse 47'
          cx='2.72619'
          cy='13.7731'
          r='1.72619'
          stroke={color}
          strokeWidth='1.2'
        />
      </g>
    </svg>
  );
}
