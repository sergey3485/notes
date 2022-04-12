import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { WorkspaceSettings, WorkspaceSettingsProps } from '../workspace-settings';

export default {
  title: 'Components/WorkspaceSettings',
  component: WorkspaceSettings,
} as Meta;

const Template: Story<WorkspaceSettingsProps> = (args) => <WorkspaceSettings {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  workspace: {
    uuid: '1',
    title: 'Dashboard',
  },
};
