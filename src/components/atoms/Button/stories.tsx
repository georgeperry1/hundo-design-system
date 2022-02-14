import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
