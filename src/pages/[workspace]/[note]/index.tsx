import * as React from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

import {
  dehydrate,
  DehydratedState,
  QueryClient,
  useQuery,
} from 'react-query';

import { ExtendedNextPage } from '@/shared/types/extended-next-page';

import { MainLayout } from '@/layout/main/components/main-layout';

import { Breadcrumbs } from '@/features/notes/components/breadcrumbs';
import { NoteInfo } from '@/features/notes/components/note-info';

import { Note } from '@/features/notes/types/note-workspace-interfaces';

export interface NotePageProps {
  noteData: Note;
}

export const getServerSideProps: GetServerSideProps<{ dehydratedState: DehydratedState }> = async (context) => {
  const { note } = context.query;
  const noteId = note as string;

  const queryClient = new QueryClient();

  await queryClient.fetchQuery(['note', noteId], async () => {
    const response = await fetch(`https://notios.herokuapp.com/notes/${noteId}`);
    const data = await response.json() as Note;
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

export const NotePage: ExtendedNextPage = () => {
  const router = useRouter();

  const { note } = router.query;
  const noteId = note as string;

  const query = useQuery([], async () => {
    const response = await fetch(`https://notios.herokuapp.com/notes/${noteId}`);
    const data = await response.json() as Note;

    return {
      data,
    };
  });

  const currentNote = query.data?.data;

  return (
    <>
      <Breadcrumbs workspace={currentNote?.workspace?.title ?? ''} workspaceId={currentNote?.workspaceId} note={currentNote?.title ?? ''} />
      <NoteInfo note={currentNote ?? {} as Note} />
    </>
  );
};

NotePage.Layout = MainLayout;

export default NotePage;
