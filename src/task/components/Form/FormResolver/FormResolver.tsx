'use client';
import React, { useState } from 'react';

import { match } from 'ts-pattern';

import EditTaskForm from './components/EditTaskForm/EditTaskForm';
import MemoForm from './components/MemoForm/MemoForm';
import { FormType } from './types';

const FormResolver = () => {
  const [formType, setFormType] = useState<FormType>('task');

  const handleFormChange = (type: FormType) => {
    setFormType(type);
  };

  const renderForm = (type: FormType) => {
    return match(type)
      .with('task', () => <EditTaskForm handleFormChange={handleFormChange} />)
      .with('memo', () => <MemoForm handleFormChange={handleFormChange} />)
      .otherwise(() => null);
  };

  return <>{renderForm(formType)}</>;
};

export default FormResolver;
