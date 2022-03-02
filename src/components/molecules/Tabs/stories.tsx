import { Story, Meta } from '@storybook/react';

import Tabs, { TabsProps } from '.';

export default {
  title: 'Components/Molecules/Tabs',
  component: Tabs,
} as Meta;

const Template: Story<TabsProps> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});

Default.args = {
  tabOptions: [
    { value: 'Tab 1', label: 'Tab 1' },
    { value: 'Tab 2', label: 'Tab 2' },
    { value: 'Tab 3', label: 'Tab 3' },
  ],
};

export const InitialValue = Template.bind({});

InitialValue.args = {
  tabOptions: [
    { value: 'Tab 1', label: 'Tab 1' },
    { value: 'Tab 2', label: 'Tab 2' },
    { value: 'Tab 3', label: 'Tab 3' },
  ],
  initialValue: 'Tab 2',
};

export const HideDivider = Template.bind({});

HideDivider.args = {
  tabOptions: [
    { value: 'Tab 1', label: 'Tab 1' },
    { value: 'Tab 2', label: 'Tab 2' },
    { value: 'Tab 3', label: 'Tab 3' },
  ],
  initialValue: 'Tab 2',
  hideDivider: true,
};

export const Align = Template.bind({});

Align.args = {
  tabOptions: [
    { value: 'Tab 1', label: 'Tab 1' },
    { value: 'Tab 2', label: 'Tab 2' },
    { value: 'Tab 3', label: 'Tab 3' },
  ],
  initialValue: 'Tab 2',
  align: 'flex-end',
};
