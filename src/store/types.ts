export type LoginFormState = {
  data: LoginData[];
};

export type LoginData = {
  name: string;
  email: string;
  password: string;
  password_repeat: string;
};
