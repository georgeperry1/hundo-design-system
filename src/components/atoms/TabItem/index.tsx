import React, { ReactNode } from 'react';

import { DefaultTab, TabText } from './styled';

export type TabItemProps = {
  value: string;
  label: string;
  disabled?: boolean;
  active?: boolean;
  icon?: ReactNode;
  onTabClick: () => void;
  hideBorder?: boolean;
};

const TabItem: React.FC<TabItemProps> = ({ onTabClick, label, disabled, ...props }) => {
  const onClick = () => {
    if (disabled) return;

    onTabClick();
  };

  return (
    <DefaultTab onClick={onClick} {...props}>
      <TabText>{label}</TabText>
    </DefaultTab>
  );
};

TabItem.defaultProps = {
  active: false,
  hideBorder: false,
  disabled: false,
};

export default TabItem;
