import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { Breadcrumbs, BreadcrumbsProps } from '../breadcrumbs';

export default {
  title: 'features/components/Breadcrumbs',
  component: Breadcrumbs,
} as Meta;

const Template: Story<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  workspace: 'dashboard',
  note: 'Generale',
};
