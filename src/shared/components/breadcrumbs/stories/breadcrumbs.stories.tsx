import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { BreadCrumbs, BreadCrumbsProps } from '../breadcrumbs';

export default {
  title: 'Components/BreadCrumbs',
  component: BreadCrumbs,
} as Meta;

const Template: Story<BreadCrumbsProps> = (args) => <BreadCrumbs {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'BreadCrumbs',
};
