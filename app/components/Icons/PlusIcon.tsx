import { IconProps } from './HeartIcon';

export default function PlusIcon({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask
        id='mask0_570_73027'
        // style='mask-type:alpha'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='18'
        height='18'
      >
        <rect
          x='0.0664062'
          y='9'
          width='12.681'
          height='12.681'
          transform='rotate(-45 0.0664062 9)'
          fill='#D9D9D9'
        />
      </mask>
      <g mask='url(#mask0_570_73027)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M9.50392 2.19291C9.50392 1.93312 9.29332 1.72251 9.03353 1.72251C8.77374 1.72251 8.56313 1.93312 8.56313 2.19291L8.56313 8.52961L2.22644 8.5296C1.96665 8.5296 1.75604 8.74021 1.75604 9C1.75604 9.25979 1.96665 9.47039 2.22644 9.47039L8.56313 9.47039L8.56313 15.8071C8.56313 16.0669 8.77374 16.2775 9.03353 16.2775C9.29332 16.2775 9.50392 16.0669 9.50392 15.8071V9.47039L15.8406 9.47039C16.1004 9.4704 16.311 9.25979 16.311 9C16.311 8.74021 16.1004 8.5296 15.8406 8.52961L9.50392 8.5296L9.50392 2.19291Z'
          fill={color}
        />
      </g>
    </svg>
  );
}
