import React, { CSSProperties, useState, useEffect } from 'react';

import { TabBar } from './styled';
import { TabItem } from '../../atoms';
import { TabVariant } from './types';

export type TabOption = {
  value: string;
  label: string;
  icon?: string;
  disabled?: boolean;
  variant?: string;
};

export interface TabsProps {
  initialValue?: string;
  value?: string;
  tabOptions: TabOption[];
  hideDivider?: boolean;
  hideBorder?: boolean;
  onChange?: (val: string) => void;
  align?: CSSProperties['justifyContent'];
  variant?: string;
}

const Tabs: React.FC<React.PropsWithChildren<TabsProps>> = ({
  initialValue,
  value,
  hideDivider,
  hideBorder,
  onChange,
  tabOptions,
  align,
  variant,
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
    <TabBar hideDivider={hideDivider} align={align} variant={variant}>
      {tabOptions &&
        tabOptions.map(({ value, ...rest }) => (
          <TabItem
            id={`id-${value}`}
            onTabClick={() => onTabClick(value)}
            value={value}
            key={value}
            active={currentTab === value}
            hideBorder={hideBorder}
            variant={variant}
            totalTabs={tabOptions.length}
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
  variant: TabVariant.Primary,
};

export default Tabs;
