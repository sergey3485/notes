import * as React from 'react';
import { RiAddBoxLine } from 'react-icons/ri';

import {
  useQuery,
  useQueryClient,
} from 'react-query';

import * as colors from '@radix-ui/colors';

import { ActiveLink } from '@/shared/components/active-link';
import { Workspace } from '@/features/notes/types/note-workspace-interfaces';
import * as S from './styled';

export const PageSections = (): JSX.Element => {
  const queryClient = useQueryClient();
  const query = useQuery(['workspaces'], async () => {
    const fetchedWorkspaces = await fetch('https://notios.herokuapp.com/workspaces');
    const data = await fetchedWorkspaces.json() as Workspace[];
    return {
      data,
    };
  });

  const workspaces = query.data?.data;

  const addWorkspace = async () => {
    await fetch('https://notios.herokuapp.com/workspaces', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        title: 'New Workspace',
      }),
    });

    await queryClient.invalidateQueries(['workspaces']);
  };

  return (
    <S.PageSectionsRoot>
      <S.Header>
        <S.Heading>Workspaces</S.Heading>

        <S.AddButton onClick={addWorkspace}>
          <RiAddBoxLine size={20} color={colors.gray.gray9} />
        </S.AddButton>
      </S.Header>

      <S.WorkspaceList>
        {workspaces && workspaces.map((workspace) => (
          // eslint-disable-next-line react/no-array-index-key
          <S.WorkspaceListItem key={workspace.id}>
            <ActiveLink href={`/${workspace.id}`} global>
              <S.Workspace>{workspace.title}</S.Workspace>
            </ActiveLink>
          </S.WorkspaceListItem>
        ))}
      </S.WorkspaceList>
    </S.PageSectionsRoot>
  );
};
