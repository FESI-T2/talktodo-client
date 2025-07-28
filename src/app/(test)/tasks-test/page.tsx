'use client';

import { useEffect } from 'react';

import taskApi from '@/task/lib/taskApi';

export default function TasksTest() {
  useEffect(() => {
    taskApi.getAllTask().then((response) => {
      console.log('reuslt :', response);
    });
  }, []);
  return (
    <>
      <>hi</>
    </>
  );
}
