import * as React from 'react';
import { RiSettings2Line } from 'react-icons/ri';
import * as colors from '@radix-ui/colors';

import { Workspace } from '../../types/note-workspace-interfaces';

import * as S from './styled';
import { IconButton } from '@/shared/components/icon-button';

export interface WorkspaceSettingsProps {
  /**
   * The content
   */
  workspace: Workspace;
}

export const WorkspaceSettings = (props: WorkspaceSettingsProps): JSX.Element => {
  const {
    workspace,
  } = props;

  return (
    <S.WorkspaceSettingsRoot>
      <S.WorkspaceTitle>{workspace.title}</S.WorkspaceTitle>

      <IconButton>
        <RiSettings2Line color={colors.gray.gray9} />
      </IconButton>
    </S.WorkspaceSettingsRoot>
  );
};
