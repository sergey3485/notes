import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { IconButton, IconButtonProps } from '../icon-button';

export default {
  title: 'Components/IconButton',
  component: IconButton,
} as Meta;

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'IconButton',
};
