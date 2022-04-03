import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { PageHeader, PageHeaderProps } from '../page-header';

export default {
  title: 'Components/PageHeader',
  component: PageHeader,
} as Meta;

const Template: Story<PageHeaderProps> = (args) => <PageHeader {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  inputValue: 'PageHeader',
};
