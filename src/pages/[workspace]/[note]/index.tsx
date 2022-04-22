import * as React from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

import { ExtendedNextPage } from '@/shared/types/extended-next-page';

import { MainLayout } from '@/layout/main/components/main-layout';

import { Breadcrumbs } from '@/features/notes/components/breadcrumbs';
import { NoteInfo } from '@/features/notes/components/note-info';

import { Note } from '@/features/notes/types/note-workspace-interfaces';

export interface NotePageProps {
  noteData: Note;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { note } = context.query;
  const noteId = note as string;
  const response = await fetch(`https://notios.herokuapp.com/notes/${noteId}`);
  const noteData = await response.json() as Note;
  return {
    props: {
      noteData,
    },
  };
};

export const NotePage: ExtendedNextPage<NotePageProps> = (props) => {
  const { noteData } = props;
  const router = useRouter();

  const { note } = router.query;
  const noteId = note as string;

  const [currentNote, setNote] = React.useState<Note | null>(noteData);

  React.useEffect(() => {
    fetch(`https://notios.herokuapp.com/notes/${noteId}`)
      .then((data) => data.json() as Promise<Note>)
      .then((data) => setNote(data))
      .catch((error) => console.log(error));
  }, [noteId]);

  return (
    <>
      <Breadcrumbs workspace={currentNote?.workspace?.title ?? ''} workspaceId={currentNote?.workspaceId} note={currentNote?.title ?? ''} />
      <NoteInfo note={currentNote ?? {} as Note} />
    </>
  );
};

NotePage.Layout = MainLayout;

export default NotePage;
