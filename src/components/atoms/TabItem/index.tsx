import React, { Component } from 'react';

import { Tab, TabText } from './styled';
import { TabVariant } from '../../molecules/Tabs/types';

export type TabItemProps = {
  value: string;
  label: string;
  disabled?: boolean;
  active?: boolean;
  Icon?: typeof Component;
  onTabClick: () => void;
  hideBorder?: boolean;
  variant?: string;
  totalTabs: number;
};

const TabItem: React.FC<TabItemProps> = ({ onTabClick, label, disabled, variant, Icon, ...props }) => {
  const onClick = () => {
    if (disabled) return;

    onTabClick();
  };

  return (
    <Tab onClick={onClick} variant={variant} {...props}>
      {Icon && <Icon />}
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
