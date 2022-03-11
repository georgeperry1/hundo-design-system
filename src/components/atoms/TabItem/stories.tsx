import { Story, Meta } from '@storybook/react';

import TabItem, { TabItemProps } from '.';
import { TabVariant } from '../../molecules/Tabs/types';

export default {
  title: 'Components/Atoms/TabItem',
  component: TabItem,
} as Meta;

const Template: Story<TabItemProps> = (args) => <TabItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  value: 'Hundo',
  label: 'Hundo',
  active: false,
  hideBorder: false,
};

export const Secondary: Story<TabItemProps> = (args) => (
  <div style={{ background: 'black' }}>
    <TabItem {...args} />
  </div>
);
Secondary.args = {
  value: 'Hundo',
  label: 'Hundo',
  active: false,
  hideBorder: false,
  variant: TabVariant.Secondary,
};

export const Active = Template.bind({});

Active.args = {
  value: 'Hundo',
  label: 'Hundo',
  active: true,
  hideBorder: false,
};

export const Disabled = Template.bind({});

Disabled.args = {
  value: 'Hundo',
  label: 'Hundo',
  active: true,
  hideBorder: false,
  disabled: true,
};
