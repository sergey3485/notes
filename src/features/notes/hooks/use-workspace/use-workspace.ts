import createPersistedState from 'use-persisted-state';
import { v4 as uuidV4 } from 'uuid';
import { defaultWorkspace } from '../../constants/note-workspaces';
import { Workspace } from '../../types/note-workspace-interfaces';

const useWorkspaceStorage = createPersistedState<Workspace[]>('workspaces');

export interface UseWorkspaceValue {
  workspaces: Workspace[];
  addWorkspace: () => void;
}

export const useWorkspace = (): UseWorkspaceValue => {
  const [workspaces, setWorkspaces] = useWorkspaceStorage([defaultWorkspace]);

  const addWorkspace = () => {
    setWorkspaces((prev) => ([...prev, { uuid: uuidV4(), title: 'New Workspace' }]));
  };

  return {
    workspaces,
    addWorkspace,
  };
};
