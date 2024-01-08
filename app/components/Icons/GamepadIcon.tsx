import { IconProps } from './HeartIcon';

export default function GamepadIcon({ color }: IconProps) {
  return (
    <svg
      width='17'
      height='13'
      viewBox='0 0 17 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Gamepad'>
        <path
          id='Rectangle 74'
          d='M1 4.65503C1 2.49285 2.86687 0.803348 5.01833 1.01849L7.87296 1.30396C8.16316 1.33298 8.45553 1.33298 8.74573 1.30396L11.6004 1.01849C13.7518 0.803348 15.6187 2.49285 15.6187 4.65503V9.04028C15.6187 11.6667 12.1863 12.6622 10.781 10.4434C9.77941 8.86184 7.49093 8.80902 6.4174 10.3426L6.20963 10.6394C4.60404 12.9331 1 11.7971 1 8.99724V4.65503Z'
          stroke={color}
          strokeWidth='1.2'
        />
        <g id='Group 225'>
          <circle
            id='Ellipse 39'
            cx='12.6938'
            cy='4.63719'
            r='0.730935'
            fill={color}
          />
          <circle
            id='Ellipse 40'
            cx='11.2329'
            cy='6.83054'
            r='0.730935'
            fill={color}
          />
        </g>
        <path
          id='Line'
          d='M4.87305 6.99504L4.87305 4.55859'
          stroke={color}
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          id='Line_2'
          d='M3.65339 5.77734H6.08984'
          stroke={color}
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
}
