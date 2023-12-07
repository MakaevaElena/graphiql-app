export interface ChangeOnScrollProps {
  children: React.ReactElement;
}

export type MUIHeaderProps = {
  pages: string[];
  isLogin: boolean;
  lang: boolean;
  setLang: (c: boolean) => void;
};
