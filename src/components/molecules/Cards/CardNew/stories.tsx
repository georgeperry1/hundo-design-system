import { Story, Meta } from '@storybook/react';

import Card, { CardProps } from '.';
import exampleImage from '../../../../assets/images/example.png';

export default {
  title: 'Components/Molecules/CardNew',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => (
  <div
    style={{
      width: '400px',
      height: '400px',
    }}
  >
    <Card {...args}>
      <p>Test Card</p>
    </Card>
  </div>
);

export const Default = Template.bind({});

Default.args = {
  thumbnail: exampleImage,
  name: 'Test',
};
