import * as React from 'react';
import { useRouter } from 'next/router';
import { RiSettings4Fill } from 'react-icons/ri';
import * as Modal from '@radix-ui/react-dialog';

import { ExtendedNextPage } from '@/shared/types/extended-next-page';

import { MainLayout } from '@/layout/main/components/main-layout';
import { useNotes } from '@/features/notes/hooks/use-notes';

import { Breadcrumbs } from '@/features/notes/components/breadcrumbs';
import { NoteInfo } from '@/features/notes/components/note-info';

import { Note } from '@/features/notes/types/note-workspace-interfaces';

export const NotePage: ExtendedNextPage = () => {
  const router = useRouter();

  const { workspace, note } = router.query;
  const noteId = note as string;
  const currentWorkspace = workspace as string;

  const { notes, changeNoteProperty } = useNotes(currentWorkspace);
  const currentNote = notes[currentWorkspace]?.find((notesItem) => notesItem.uuid === noteId);

  return (
    <>
      <Breadcrumbs workspace={currentNote?.workspace ?? ''} note={currentNote?.title ?? ''} />
      <NoteInfo note={currentNote ?? {} as Note} />
    </>
  );
};

NotePage.Layout = MainLayout;

export default NotePage;
