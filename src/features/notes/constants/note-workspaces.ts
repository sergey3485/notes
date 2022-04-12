import { v4 as uuidV4 } from 'uuid';
import { Workspace, Note } from '../types/note-workspace-interfaces';

export const defaultWorkspace: Workspace = {
  uuid: uuidV4(),
  title: 'Dashboard',
};

export const baseNote: Note = {
  uuid: uuidV4(),
  workspace: defaultWorkspace.uuid,
  title: 'Generale',
  content: 'Aenean maximus ullamcorper est, nec pretium dui dapibus ut. Nullam arcu tortor, dignissim id orci ac, vestibulum posuere ipsum. Suspendisse vel augue eget libero scelerisque euismod. Suspendisse vulputate erat id est ultrices, vel ultrices ligula ornare. Aliquam libero lacus, egestas eu arcu in, sodales pharetra ipsum. Nulla semper metus vel porttitor ornare. Praesent ultricies, justo ac volutpat rhoncus, nulla urna consectetur massa, a porttitor felis sapien at nibh.',
  date: new Date(),
};
