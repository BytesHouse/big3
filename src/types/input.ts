export interface input {
  id?: string;
  title?: string;
  type: string;
  value?: string;
  onChange: (value: string) => void;
}
