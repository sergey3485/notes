import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { PageSections, PageSectionsProps } from '../page-sections';

export default {
  title: 'Components/PageSections',
  component: PageSections,
} as Meta;

const Template: Story<PageSectionsProps> = (args) => <PageSections {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  workspaces: ['dashboard', 'scketches', 'shopping list'],
};
