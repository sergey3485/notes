import * as React from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { ExtendedNextPage } from '@/shared/types/extended-next-page';

import { MainLayout } from '@/layout/main/components/main-layout';
import { PageHeader } from '@/features/notes/components/page-header';
import { NotesList } from '@/features/notes/components/notes-list';

import { WorkspaceSettings } from '@/features/notes/components/workspace-settings';
import { Workspace } from '@/features/notes/types/note-workspace-interfaces';

import { useWorkspaces } from '@/features/notes/hooks/useWorkspaces';

export interface SectionPageProps {
  data: Workspace;
}

export const getServerSideProps: GetServerSideProps<SectionPageProps> = async (context) => {
  const { workspace } = context.query;
  const workspaceId = workspace as string;
  const response = await fetch(`https://notios.herokuapp.com/workspaces/${workspaceId}`);
  const data = await response.json() as Workspace;
  return {
    props: {
      data,
    },
  };
};

const SectionPage: ExtendedNextPage<SectionPageProps> = (props) => {
  const { data } = props;
  const router = useRouter();

  const { workspace } = router.query;

  const workspaceId = workspace as string;

  const [inputValue, setInputValue] = React.useState('');
  const [currentWorkspace, setCurrentWorkspace] = React.useState<Workspace | null>(data);
  const { fetchWorkspaces } = useWorkspaces();

  const fetchWorkspace = async () => {
    const response = await fetch(`https://notios.herokuapp.com/workspaces/${workspaceId}`);
    const newWorkspace = await response.json() as Workspace;
    setCurrentWorkspace(newWorkspace);
  };

  React.useEffect(() => {
    fetchWorkspace()
      .catch((error) => console.log(error));
  }, [workspaceId]);

  const onChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.currentTarget.value);

  const saveChangedTitle = async (newTitle: string) => {
    await fetch(`https://notios.herokuapp.com/workspaces/${workspaceId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: newTitle }),
    });

    await fetchWorkspace();
    await fetchWorkspaces();
  };

  const visibleNotes = inputValue ? currentWorkspace?.notes?.filter((note) => note.title.toLowerCase().trim().match(inputValue.toLowerCase().trim())) : currentWorkspace?.notes;

  const addNote = async () => {
    const newNote = {
      workspaceId: Number(workspaceId),
      title: 'New Note',
      content: '',
    };
    await fetch('https://notios.herokuapp.com/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNote),
    });

    await fetchWorkspace();
  };

  return (
    <>
      {currentWorkspace && <WorkspaceSettings workspace={currentWorkspace} saveNewTitle={saveChangedTitle} />}
      <PageHeader inputValue={inputValue} onChangeInputValue={onChangeInputValue} addNote={addNote} />
      <NotesList notes={visibleNotes ?? []} />
    </>
  );
};

SectionPage.Layout = MainLayout;

export default SectionPage;
