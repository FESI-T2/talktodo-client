'use client';

import axios from 'axios';
import { useEffect } from 'react';

export default function TasksTest() {
  useEffect(() => {
    axios
      .get('/api/tasks')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <>
      <>hi</>
    </>
  );
}
