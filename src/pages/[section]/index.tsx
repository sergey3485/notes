import * as React from 'react';
import { useRouter } from 'next/router';

import { ExtendedNextPage } from '../../shared/types/extended-next-page';

import { MainLayout } from '../../layout/main/components/main-layout';
import { PageHeader } from '../../feature/components/page-header';

import { saveToLocalStorage, readFromLocalStorage } from '../../shared/utils/storage';

const SectionPage: ExtendedNextPage = () => {
  const router = useRouter();

  const { section } = router.query;

  const [inputValue, setInputValue] = React.useState('');
  const [notes, setNotes] = React.useState<string[]>([]);

  React.useEffect(() => {
    saveToLocalStorage(section as string, JSON.stringify(notes));
  }, [notes]);

  const onChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.currentTarget.value);
  const addNote = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!inputValue) {
      return;
    }

    setNotes([...notes, inputValue]);
  };
  return (
    <>
      <PageHeader inputValue={inputValue} onChangeInputValue={onChangeInputValue} addNote={addNote} />
    </>
  );
};

SectionPage.Layout = MainLayout;

export default SectionPage;
