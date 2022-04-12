import { Story, Meta } from '@storybook/react';

import MainNavItem, { MainNavItemProps } from '.';

export default {
  title: 'Components/Atoms/MainNavItem',
  component: MainNavItem,
} as Meta;

export const Template: Story<MainNavItemProps> = (args) => <MainNavItem {...args}>{args.text}</MainNavItem>;

Template.args = {
  active: false,
  text: 'Profile',
  backgroundColor: '#FFFF50',
  shadowColor: '#B7B73D',
};

export const Default = Template.bind({});
