import { Story, Meta } from '@storybook/react';

import NavItem, { NavItemProps } from '.';

export default {
  title: 'Components/Atoms/NavItem',
  component: NavItem,
} as Meta;

export const Template: Story<NavItemProps> = (args) => <NavItem {...args}>{args.text}</NavItem>;

Template.args = {
  active: false,
  text: 'Profile',
  icon: 'https://www.svgrepo.com/show/794/male-user.svg',
  backgroundColor: '#FFFF50',
  shadowColor: '#B7B73D',
};

export const Default = Template.bind({});
