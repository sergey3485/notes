import * as React from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import {
  dehydrate,
  DehydratedState,
  QueryClient,
  useQuery,
  useQueryClient,
} from 'react-query';

import { ExtendedNextPage } from '@/shared/types/extended-next-page';

import { MainLayout } from '@/layout/main/components/main-layout';
import { PageHeader } from '@/features/notes/components/page-header';
import { NotesList } from '@/features/notes/components/notes-list';

import { WorkspaceSettings } from '@/features/notes/components/workspace-settings';
import { Workspace } from '@/features/notes/types/note-workspace-interfaces';

export const getServerSideProps: GetServerSideProps<{ dehydratedState: DehydratedState }> = async (context) => {
  const { workspace } = context.query;
  const workspaceId = workspace as string;

  const queryClient = new QueryClient();

  await queryClient.fetchQuery(['workspace', workspaceId], async () => {
    const response = await fetch(`https://notios.herokuapp.com/workspaces/${workspaceId}`);
    const data = await response.json() as Workspace;

    return {
      data,
    };
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const SectionPage: ExtendedNextPage = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { workspace } = router.query;

  const workspaceId = workspace as string;

  const query = useQuery(['workspace', workspaceId], async () => {
    const response = await fetch(`https://notios.herokuapp.com/workspaces/${workspaceId}`);
    const responseDate = await response.json() as Workspace;

    return {
      data: responseDate,
    };
  });

  const currentWorkspace = query.data?.data;

  const [inputValue, setInputValue] = React.useState('');

  const onChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.currentTarget.value);

  const saveChangedTitle = async (newTitle: string) => {
    await fetch(`https://notios.herokuapp.com/workspaces/${workspaceId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: newTitle }),
    });

    await queryClient.invalidateQueries(['workspace', workspaceId]);
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

    await queryClient.invalidateQueries(['workspace', workspaceId]);
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
