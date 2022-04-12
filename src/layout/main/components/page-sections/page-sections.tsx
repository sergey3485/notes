import * as React from 'react';
import { RiAddBoxLine } from 'react-icons/ri';

import * as colors from '@radix-ui/colors';
import { useWorkspace } from '@/features/notes/hooks/use-workspace';
import { ActiveLink } from '@/shared/components/active-link';
import * as S from './styled';

export const PageSections = (): JSX.Element => {
  const { workspaces, addWorkspace } = useWorkspace();

  return (
    <S.PageSectionsRoot>
      <S.Header>
        <S.Heading>Workspaces</S.Heading>

        <S.AddButton onClick={addWorkspace}>
          <RiAddBoxLine size={20} color={colors.gray.gray9} />
        </S.AddButton>
      </S.Header>

      <S.WorkspaceList>
        {workspaces && workspaces.map((workspace, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <S.WorkspaceListItem key={index}>
            <ActiveLink href={`/${workspace.uuid}`} global>
              <S.Workspace>{workspace.title}</S.Workspace>
            </ActiveLink>
          </S.WorkspaceListItem>
        ))}
      </S.WorkspaceList>
    </S.PageSectionsRoot>
  );
};
