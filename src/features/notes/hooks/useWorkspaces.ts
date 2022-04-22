import * as React from 'react';
import { Workspace } from '../types/note-workspace-interfaces';

export interface UseWorkspaces {
  workspaces: Workspace[];
  fetchWorkspaces: () => Promise<void>;
  setWorkspaces: () => void;
}

export const useWorkspaces = () => {
  const [workspaces, setWorkspaces] = React.useState<Workspace[]>([]);

  const fetchWorkspaces = async () => {
    const fetchedWorkspaces = await fetch('https://notios.herokuapp.com/workspaces');
    setWorkspaces(await fetchedWorkspaces.json() as Workspace[]);
  };

  return {
    workspaces,
    fetchWorkspaces,
    setWorkspaces,
  };
};
