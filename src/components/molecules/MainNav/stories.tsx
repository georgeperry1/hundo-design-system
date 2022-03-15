import { Story, Meta } from '@storybook/react';

import MainNav from '.';
import NavItem from '../../atoms/MainNavItem';

export default {
  title: 'Components/Molecules/MainNav',
  component: MainNav,
} as Meta;

const Template: Story = (args) => (
  <MainNav {...args}>
    <NavItem {...args}>{args.text}</NavItem>
  </MainNav>
);

export const Default = Template.bind({});

Default.args = {
  active: false,
  text: 'Profile',
  icon: 'https://www.svgrepo.com/show/794/male-user.svg',
  backgroundColor: '#FFFF50',
  shadowColor: '#B7B73D',
};

export const WithLogo = Template.bind({});

WithLogo.args = {
  active: false,
  text: 'Profile',
  icon: 'https://www.svgrepo.com/show/794/male-user.svg',
  backgroundColor: '#FFFF50',
  shadowColor: '#B7B73D',
  logo: 'https://www.svgrepo.com/show/794/male-user.svg',
};
