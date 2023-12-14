import { Schema } from '../common-types/common-types';

export type AuthDataState = {
  data: {
    name: string;
    email: string;
    password: string;
    passwordRepeat: string;
  };
};

export type UIState = {
  docsIsOpen: boolean;
  schema: Schema;
};
