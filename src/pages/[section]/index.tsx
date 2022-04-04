import * as React from 'react';
import { useRouter } from 'next/router';

import { ExtendedNextPage } from '../../shared/types/extended-next-page';

import { MainLayout } from '../../layout/main/components/main-layout';
import { PageHeader } from '../../features/notes/components/page-header';
import { NotesList } from '../../features/notes/components/notes-list';

import { useSection } from '../../features/notes/hooks/use-section';

const SectionPage: ExtendedNextPage = () => {
  const router = useRouter();

  const { section } = router.query;

  const curentSection = (section as string);

  const [inputValue, setInputValue] = React.useState('');
  const { notes, addNote } = useSection(curentSection);

  const onChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.currentTarget.value);
  const addNotes = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!inputValue) {
      return;
    }

    setInputValue('');
    addNote(inputValue);
  };

  return (
    <>
      <PageHeader inputValue={inputValue} onChangeInputValue={onChangeInputValue} addNote={addNotes} />
      <NotesList notes={notes[curentSection] ?? []} section={curentSection} />
      {/* {notes[section as string] && notes[section as string].map((note, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>{note}</div>
      ))} */}
    </>
  );
};

SectionPage.Layout = MainLayout;

export default SectionPage;
