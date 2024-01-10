import React from 'react';
import ToggleSwitch from '../../../../components/ToggleSwitch';

interface SettingToggleProps {
  title: string;
  checked: boolean;
  onToggle: () => void;
}

const SettingToggle: React.FC<SettingToggleProps> = ({
  title,
  checked,
  onToggle,
}) => {
  return (
    <div className='flex items-center justify-between'>
      <p className='text-text-normal'>{title}</p>
      <ToggleSwitch checked={checked} onChange={onToggle} />
    </div>
  );
};

export default SettingToggle;
