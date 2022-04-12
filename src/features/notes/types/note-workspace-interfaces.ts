export interface Note {
  uuid: string;
  workspace: string;
  title: string;
  content: string;
  date: Date | string;
}

export interface Workspace {
  uuid: string;
  title: string;
}
