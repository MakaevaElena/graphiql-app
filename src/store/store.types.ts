import { RootSchema } from '../common-types/schema.types';

export interface IUserState {
  user: {
    email: string;
    id: string;
  };
}

export type UIState = {
  docsIsOpen: boolean;
};

export type ApiState = {
  baseUrl: string;
  schema: RootSchema;
};
