interface ArrowLeftIconProps {
  width: number;
  height: number;
  fill: string;
}

export default function ArrowLeftIcon({
  width,
  height,
  fill,
}: ArrowLeftIconProps) {
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
        d='M5 12L15.2053 2.29289C15.6159 1.90237 16.2815 1.90237 16.6921 2.29289C17.1026 2.68341 17.1026 3.31658 16.6921 3.70711L7.97359 12L16.6921 20.2929C17.1026 20.6834 17.1026 21.3166 16.6921 21.7071C16.2815 22.0976 15.6159 22.0976 15.2053 21.7071L5 12Z'
        fill={fill}
      />
    </svg>
  );
}
