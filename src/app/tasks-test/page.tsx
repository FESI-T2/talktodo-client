'use client';

import { useEffect } from 'react';

import APIBuilder from '@/lib/api/apiBuilder';

export default function TasksTest() {
  useEffect(() => {
    // axios
    //   .get('http://l/api/tasks')
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
    const fetchTasks = async () => {
      try {
        await APIBuilder.get('/tasks').build().call();
      } catch (error) {
        console.error(error);
      }
    };
    fetchTasks();
  }, []);
  return (
    <>
      <>hi</>
    </>
  );
}
