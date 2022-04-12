import * as React from 'react';
import { useRouter } from 'next/router';

import { ExtendedNextPage } from '@/shared/types/extended-next-page';

import { MainLayout } from '@/layout/main/components/main-layout';
import { PageHeader } from '@/features/notes/components/page-header';
import { NotesList } from '@/features/notes/components/notes-list';

import { useNotes } from '@/features/notes/hooks/use-notes';
import { WorkspaceSettings } from '@/features/notes/components/workspace-settings';
import { useWorkspace } from '@/features/notes/hooks/use-workspace';
import { Workspace } from '@/features/notes/types/note-workspace-interfaces';

const SectionPage: ExtendedNextPage = () => {
  const router = useRouter();

  const { workspace } = router.query;

  const curentWorkspace = workspace as string;

  const [inputValue, setInputValue] = React.useState('');
  const { notes, addNote } = useNotes(curentWorkspace);

  const { workspaces } = useWorkspace();

  const currentWorkspace = workspaces.find((workspaceItem) => workspaceItem.uuid === workspace as string) ?? {} as Workspace;

  const onChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.currentTarget.value);

  const visibleNotes = inputValue ? notes[curentWorkspace].filter((note) => note.title.toLowerCase().trim().match(inputValue.toLowerCase().trim())) : notes[curentWorkspace];

  return (
    <>
      <WorkspaceSettings workspace={currentWorkspace} />
      <PageHeader inputValue={inputValue} onChangeInputValue={onChangeInputValue} addNote={addNote} />
      <NotesList notes={visibleNotes ?? []} />
    </>
  );
};

SectionPage.Layout = MainLayout;

export default SectionPage;
