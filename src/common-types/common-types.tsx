export interface Form {
  name?: string;
  email?: string;
  password?: string;
  passwordRepeat?: string;
}

export type Schema = {
  directives: schemaType[];
  mutationType?: schemaType;
  queryType: schemaType;
  subscriptionsType?: schemaType;
  types: schemaType[];
  description?: string;
};

type schemaType = {
  name: string;
};
