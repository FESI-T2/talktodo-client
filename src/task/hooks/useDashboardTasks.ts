import { useEffect, useState } from 'react';

import taskApi from '../lib/taskApi';
import { AllTaskResponse } from '../types/response';

export default function useDashboardTasks() {
  const [data, setData] = useState<AllTaskResponse | null>(null);

  useEffect(() => {
    taskApi.getAllTask().then((res) => setData(res.data));
  }, []);

  return {
    data,
  };
}
