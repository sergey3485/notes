import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { NoteCard, NoteCardProps } from '../note-card';

export default {
  title: 'features/components/note-card',
  component: NoteCard,
} as Meta;

const Template: Story<NoteCardProps> = (args) => <NoteCard {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  note: {
    uuid: '1',
    section: 'dashboard',
    title: 'Generale',
    date: new Date(),
    content: 'Aenean maximus ullamcorper est, nec pretium dui dapibus ut. Nullam arcu tortor, dignissim id orci ac, vestibulum posuere ipsum. Suspendisse vel augue eget libero scelerisque euismod. Suspendisse vulputate erat id est ultrices, vel ultrices ligula ornare. Aliquam libero lacus, egestas eu arcu in, sodales pharetra ipsum. Nulla semper metus vel porttitor ornare. Praesent ultricies, justo ac volutpat rhoncus, nulla urna consectetur massa, a porttitor felis sapien at nibh.',
  },
};
