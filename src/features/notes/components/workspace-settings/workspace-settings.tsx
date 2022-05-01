import * as React from 'react';
import {
  RiCloseCircleLine,
  RiDeleteBin2Line,
  RiSaveLine,
  RiSettings2Line,
} from 'react-icons/ri';
import * as colors from '@radix-ui/colors';
import { useRouter } from 'next/router';
import { Workspace } from '../../types/note-workspace-interfaces';

import { IconButton } from '@/shared/components/icon-button';
import * as S from './styled';

export interface WorkspaceSettingsProps {
  /**
   * The content
   */
  workspace: Workspace;
  saveNewTitle: (newtitle: string) => Promise<void>;
}

export const WorkspaceSettings = (props: WorkspaceSettingsProps): JSX.Element => {
  const {
    workspace,
    saveNewTitle,
  } = props;

  const router = useRouter();

  const [title, setTitle] = React.useState(workspace.title);
  const [isOpen, setIsOpen] = React.useState(false);

  const changeWorkspaceTitle = (event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.currentTarget.value);
  const deleteWorkspace = async () => {
    await fetch(`https://notios.herokuapp.com/workspaces/${workspace.id}`, {
      method: 'DELETE',
    });

    await router.push('/');
  };

  const saveTitle = async () => {
    await saveNewTitle(title);
    setIsOpen(false);
  };

  return (
    <S.WorkspaceSettingsRoot>
      <S.WorkspaceTitle>{workspace.title}</S.WorkspaceTitle>

      <S.ModalRoot open={isOpen} onOpenChange={() => setIsOpen((prev) => !prev)}>
        <S.ModalTrigger asChild>
          <IconButton>
            <RiSettings2Line color={colors.gray.gray9} />
          </IconButton>
        </S.ModalTrigger>

        <S.ModalPortal>
          <S.ModalOverlay />

          <S.ModalContent>
            <S.ModalTitle>
              Settings
            </S.ModalTitle>

            <S.Content>
              <S.ChangeWorkspace value={title} onChange={changeWorkspaceTitle} />

              <S.Buttons>
                <IconButton onClick={deleteWorkspace}>
                  <RiDeleteBin2Line />
                </IconButton>

                <IconButton onClick={saveTitle}>
                  <RiSaveLine />
                </IconButton>
              </S.Buttons>
            </S.Content>

            <S.ModalClose asChild>
              <IconButton>
                <RiCloseCircleLine color={colors.gray.gray9} />
              </IconButton>
            </S.ModalClose>
          </S.ModalContent>
        </S.ModalPortal>
      </S.ModalRoot>
    </S.WorkspaceSettingsRoot>
  );
};
