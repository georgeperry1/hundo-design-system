import React, { CSSProperties, useState, useEffect, ReactNode } from 'react';

import { TabBar } from './styled';
import { TabItem } from '../../atoms';

export type TabOption = {
  value: string;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
};

export interface TabsProps {
  initialValue?: string;
  value?: string;
  tabOptions: TabOption[];
  hideDivider?: boolean;
  hideBorder?: boolean;
  onChange?: (val: string) => void;
  align?: CSSProperties['justifyContent'];
}

const Tabs: React.FC<React.PropsWithChildren<TabsProps>> = ({
  initialValue,
  value,
  hideDivider,
  hideBorder,
  onChange,
  tabOptions,
  align,
}) => {
  const [currentTab, setCurrentTab] = useState<string | undefined>(initialValue);

  useEffect(() => {
    if (typeof value === 'undefined') return;
    setCurrentTab(value);
  }, [value]);

  const onTabClick = (tab: string) => {
    setCurrentTab(tab);
    onChange && onChange(tab);
  };

  return (
    <TabBar hideDivider={hideDivider} align={align}>
      {tabOptions &&
        tabOptions.map(({ value, ...rest }) => (
          <TabItem
            onTabClick={() => onTabClick(value)}
            value={value}
            key={value}
            active={currentTab === value}
            hideBorder={hideBorder}
            {...rest}
          />
        ))}
    </TabBar>
  );
};

Tabs.defaultProps = {
  hideDivider: false,
  hideBorder: false,
  align: 'flex-start',
};

export default Tabs;
