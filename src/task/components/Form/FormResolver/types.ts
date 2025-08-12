export type FormType = 'task' | 'memo';

export interface FormResolverProps {
  handleFormChange: (type: FormType) => void;
}
