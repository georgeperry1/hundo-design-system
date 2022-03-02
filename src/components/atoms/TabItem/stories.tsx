import { Story, Meta } from '@storybook/react';

import TabItem, { TabItemProps } from '.';

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
