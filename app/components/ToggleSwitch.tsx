interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
}

export default function ToggleSwitch({ checked, onChange }: ToggleSwitchProps) {
  return (
    <div className='flex items-center'>
      <label className='relative inline-flex cursor-pointer items-center'>
        <input
          type='checkbox'
          checked={checked}
          onChange={onChange}
          className='peer sr-only'
        />
        <div className="peer h-8 w-16 rounded-full bg-gray-200 after:absolute after:start-[4px] after:top-1 after:h-6 after:w-6 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:duration-200 after:content-[''] peer-checked:bg-primary-heavy peer-checked:after:start-[10px] peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full"></div>
      </label>
    </div>
  );
}
