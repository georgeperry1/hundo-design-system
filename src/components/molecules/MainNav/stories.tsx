import { Story, Meta } from '@storybook/react';

import MainNav from '.';
import NavItem from '../../atoms/MainNavItem';

export default {
  title: 'Components/Atoms/MainNav',
  component: MainNav,
} as Meta;

export const Template: Story = (args) => (
  <MainNav {...args}>
    <NavItem {...args}>{args.text}</NavItem>
  </MainNav>
);

Template.args = {
  active: false,
  text: 'Profile',
  icon: 'https://www.svgrepo.com/show/794/male-user.svg',
  backgroundColor: '#FFFF50',
  shadowColor: '#B7B73D',
};

export const Default = Template.bind({});
