import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { NotesList, NotesListProps } from '../notes-list';

export default {
  title: 'Components/NotesList',
  component: NotesList,
} as Meta;

const Template: Story<NotesListProps> = (args) => <NotesList {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  notes: ['NotesList'],
};
