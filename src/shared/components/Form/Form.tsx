import React from 'react';

import FormActions from './FormActions/FormActions';
import Header from './Header/Header';
import MemoField from './MemoField/MemoField';
import TaskField from './TaskField/TaskField';

interface ModalProps extends React.HTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

const Form = ({ children, ...props }: ModalProps) => {
  return (
    <form {...props} className='bg-white py-10 px-8 rounded-[40px] max-w-[480px] w-[90%]'>
      {children}
    </form>
  );
};

Form.Header = Header;
Form.MemoContent = MemoField;
Form.FormActions = FormActions;
Form.TaskContent = TaskField;
Form.displayName = 'Form';
export default Form;
