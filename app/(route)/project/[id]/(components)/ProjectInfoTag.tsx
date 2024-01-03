interface ProjectInfoTagProps {
  value: string;
  number?: string;
  isClosed?: boolean;
}

export default function ProjectInfoTag({
  value,
  number,
  isClosed,
}: ProjectInfoTagProps) {
  return (
    <div
      className={`w-fit rounded border border-line-normal px-3 py-2 tracking-[-0.14px] ${
        isClosed ? 'bg-background-tertiary' : 'bg-white'
      }`}
    >
      <span
        className={`text-label2 ${
          isClosed
            ? 'font-normal text-text-disable'
            : 'font-bold text-text-alternative '
        }`}
      >
        {value}
      </span>
      {number && (
        <span
          className={`ml-[10px] text-label2  ${
            isClosed
              ? 'font-normal text-text-disable'
              : 'font-bold text-text-assitive '
          }`}
        >
          <span>{number}명</span>
        </span>
      )}
    </div>
  );
}
