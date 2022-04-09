import * as React from 'react';
import { useRouter } from 'next/router';
import { RiSettings4Fill } from 'react-icons/ri';
import * as Modal from '@radix-ui/react-dialog';

import { ExtendedNextPage } from '@/shared/types/extended-next-page';

import { MainLayout } from '@/layout/main/components/main-layout';
import { Note, useSection } from '@/features/notes/hooks/use-section';

import { Breadcrumbs } from '@/features/notes/components/breadcrumbs';
import { NoteInfo } from '@/features/notes/components/note-info';

export const NotePage: ExtendedNextPage = () => {
  const router = useRouter();

  const { section, note } = router.query;
  const noteId = note as string;
  const currentSection = section as string;

  const { notes, changeNoteProperty } = useSection(currentSection);
  const currentNote = notes[currentSection]?.find((notesItem) => notesItem.uuid === noteId);

  return (
    <>
      <Breadcrumbs section={section as string} note={currentNote?.title ?? ''} />
      <NoteInfo note={currentNote ?? {} as Note} />
    </>
  );
};

NotePage.Layout = MainLayout;

export default NotePage;
