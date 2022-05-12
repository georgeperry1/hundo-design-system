import React, { ReactNode } from 'react';

import { Tab, TabText, TabIcon } from './styled';
import { TabVariant } from '../../molecules/Tabs/types';

export type TabItemProps = {
  value: string;
  label: string;
  disabled?: boolean;
  active?: boolean;
  icon?: ReactNode;
  onTabClick: () => void;
  hideBorder?: boolean;
  variant?: string;
  totalTabs: number;
  id: string;
};

const TabItem: React.FC<TabItemProps> = ({ onTabClick, label, disabled, variant, icon, active, id, ...props }) => {
  const onClick = () => {
    if (disabled) return;

    onTabClick();
  };

  return (
    <Tab onClick={onClick} variant={variant} aria-selected={active} aria-controls={id} {...props}>
      {icon && <TabIcon src={icon} alt={label} />}
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
