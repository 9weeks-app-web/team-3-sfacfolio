interface LocationIconProps {
  width: number;
  height: number;
  fill: string;
}

export default function LocationIcon({
  width,
  height,
  fill,
}: LocationIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 18 22'
      fill='none'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.25 9.41667C0.25 4.62281 4.17493 0.75 9 0.75C13.8251 0.75 17.75 4.62281 17.75 9.41667C17.75 12.3982 16.0113 15.3409 14.1686 17.4829C13.236 18.5669 12.2463 19.482 11.3733 20.1328C10.9374 20.4577 10.5186 20.7258 10.1405 20.9162C9.78602 21.0947 9.38124 21.25 9 21.25C8.61876 21.25 8.21398 21.0947 7.85954 20.9162C7.48144 20.7258 7.06256 20.4577 6.62674 20.1328C5.75371 19.482 4.76395 18.5669 3.83144 17.4829C1.98872 15.3409 0.25 12.3982 0.25 9.41667ZM9 12C7.34315 12 6 10.6569 6 9C6 7.34315 7.34315 6 9 6C10.6569 6 12 7.34315 12 9C12 10.6569 10.6569 12 9 12Z'
        fill={fill}
      />
    </svg>
  );
}
