import React from 'react';

import { Tab, TabText } from './styled';
import { TabVariant } from '../../molecules/Tabs/types';

export type TabItemProps = {
  value: string;
  label: string;
  disabled?: boolean;
  active?: boolean;
  icon?: string;
  onTabClick: () => void;
  hideBorder?: boolean;
  variant?: string;
  totalTabs: number;
};

const TabItem: React.FC<TabItemProps> = ({ onTabClick, label, disabled, variant, icon, ...props }) => {
  const onClick = () => {
    if (disabled) return;

    onTabClick();
  };

  return (
    <Tab onClick={onClick} variant={variant} {...props}>
      {icon && <img src={icon} alt={label} />}
      <TabText variant={variant}>{label}</TabText>
    </Tab>
  );
};

TabItem.defaultProps = {
  active: false,
  hideBorder: false,
  disabled: false,
  variant: TabVariant.Primary,
};

export default TabItem;
