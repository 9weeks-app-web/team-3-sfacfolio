interface BookmarkIconProps {
  width: number;
  height: number;
  strokeOut: string;
  strokeIn: string;
  fill: string;
}

export default function BookmarkIcon({
  width,
  height,
  strokeOut,
  strokeIn,
  fill,
}: BookmarkIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 25'
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5 7.35156C5 5.14242 6.79086 3.35156 9 3.35156H15C17.2091 3.35156 19 5.14242 19 7.35156V20.5199C19 21.3111 18.1248 21.7889 17.4592 21.3611L13.0815 18.5468C12.4227 18.1233 11.5773 18.1233 10.9185 18.5468L6.54076 21.3611C5.87525 21.7889 5 21.3111 5 20.5199V7.35156Z'
        stroke={strokeOut}
        strokeWidth='1.5'
      />
      <path
        d='M9 8.85156H15'
        stroke={strokeIn}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
