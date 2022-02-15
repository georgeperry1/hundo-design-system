import { Story, Meta } from '@storybook/react';

import Spacer, { SpacerProps } from '.';

export default {
  title: 'Components/Atoms/Spacer',
  component: Spacer,
} as Meta;

const Block = () => (
  <div
    style={{
      width: '100px',
      height: '100px',
      backgroundColor: '#111111',
      borderRadius: '4px',
    }}
  ></div>
);

export const W: Story<SpacerProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <Block />
    <Spacer {...args} />
    <Block />
  </div>
);

W.args = {
  w: 10,
  h: 0,
};

export const H: Story<SpacerProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '400px', width: '400px' }}>
    <Block />
    <Spacer {...args} />
    <Block />
  </div>
);

H.args = {
  w: 0,
  h: 10,
};

export const Inline: Story<SpacerProps> = (args) => (
  <p>
    Hello
    <Spacer {...args} />
    Hundo!
  </p>
);

Inline.args = {
  w: 10,
  h: 0,
  inline: true,
};
