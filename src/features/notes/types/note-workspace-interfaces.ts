export interface Note {
  id: number;
  workspaceId: number;
  workspace: {
    title: string;
  }
  title: string;
  content: string;
  createdAt: Date | string;
}

export interface Workspace {
  id: number;
  title: string;
  notes?: Note[];
}
