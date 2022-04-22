import * as React from 'react';
import { RiAddBoxLine } from 'react-icons/ri';

import * as colors from '@radix-ui/colors';

import { ActiveLink } from '@/shared/components/active-link';
import { Workspace } from '@/features/notes/types/note-workspace-interfaces';

import { useWorkspaces } from '@/features/notes/hooks/useWorkspaces';
import * as S from './styled';

export const PageSections = (): JSX.Element => {
  const [workspaces, setWorkspaces] = React.useState<Workspace[]>([]);

  const fetchWorkspaces = async () => {
    const fetchedWorkspaces = await fetch('https://notios.herokuapp.com/workspaces');
    setWorkspaces(await fetchedWorkspaces.json() as Workspace[]);
  };

  React.useEffect(() => {
    fetchWorkspaces()
      .catch((error) => console.log(error));
  }, []);
  console.log(workspaces);

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

    await fetchWorkspaces();
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
        {workspaces && workspaces.map((workspace, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <S.WorkspaceListItem key={index}>
            <ActiveLink href={`/${workspace.id}`} global>
              <S.Workspace>{workspace.title}</S.Workspace>
            </ActiveLink>
          </S.WorkspaceListItem>
        ))}
      </S.WorkspaceList>
    </S.PageSectionsRoot>
  );
};
