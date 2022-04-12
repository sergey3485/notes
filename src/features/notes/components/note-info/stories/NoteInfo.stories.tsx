import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { v4 as uuidV4 } from 'uuid';
import { NoteInfo, NoteInfoProps } from '../note-info';

export default {
  title: 'features/components/note-info',
  component: NoteInfo,
} as Meta;

const Template: Story<NoteInfoProps> = (args) => <NoteInfo {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  note: {
    uuid: uuidV4(),
    workspace: 'dashboard',
    title: 'Generale',
    content: 'Aenean maximus ullamcorper est, nec pretium dui dapibus ut. Nullam arcu tortor, dignissim id orci ac, vestibulum posuere ipsum. Suspendisse vel augue eget libero scelerisque euismod. Suspendisse vulputate erat id est ultrices, vel ultrices ligula ornare. Aliquam libero lacus, egestas eu arcu in, sodales pharetra ipsum. Nulla semper metus vel porttitor ornare. Praesent ultricies, justo ac volutpat rhoncus, nulla urna consectetur massa, a porttitor felis sapien at nibh.',
    date: new Date(),
  },
};
