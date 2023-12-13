export type AuthDataState = {
  data: {
    name: string;
    email: string;
    password: string;
    passwordRepeat: string;
  };
};

type Schema = {
  directives: Array<object>;
  mutationType?: Array<object>;
  queryType: object;
  subscriptionsType?: object;
  types: Array<object>;
  description?: string;
};

export type UIState = {
  docsIsOpen: boolean;
  schema: Schema;
};
