interface ArrowRightIconProps {
  width: number;
  height: number;
  fill: string;
}

export default function ArrowRightIcon({
  width,
  height,
  fill,
}: ArrowRightIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19 12L8.79472 2.29289C8.38415 1.90237 7.71849 1.90237 7.30793 2.29289C6.89736 2.68341 6.89736 3.31658 7.30793 3.70711L16.0264 12L7.30792 20.2929C6.89736 20.6834 6.89736 21.3166 7.30792 21.7071C7.71849 22.0976 8.38415 22.0976 8.79472 21.7071L19 12Z'
        fill={fill}
      />
    </svg>
  );
}
