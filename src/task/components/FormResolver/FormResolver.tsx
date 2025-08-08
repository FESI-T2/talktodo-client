'use client';
import React, { useState } from 'react';

import { match } from 'ts-pattern';

import MemoForm from '../MemoForm/MemoForm';
import TaskForm from '../TaskForm/TaskForm';

type FormType = 'task' | 'memo';

const FormResolver = () => {
  const [formType, setFormType] = useState<FormType>('task');

  const handleFormChange = (type: FormType) => {
    setFormType(type);
  };

  const renderForm = (type: FormType) => {
    return match(type)
      .with('task', () => <TaskForm handleFormChange={handleFormChange} />)
      .with('memo', () => <MemoForm handleFormChange={handleFormChange} />)
      .otherwise(() => null);
  };

  return <>{renderForm(formType)}</>;
};

export default FormResolver;
