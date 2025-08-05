import { components } from '@/shared/api/generated';
import APIBuilder from '@/shared/lib/api/apiBuilder';

export const fetchTask = (taskId: string) =>
  APIBuilder.get(`/v1/task/${taskId}`).withCredentials(true).build().call<components['schemas']['ApiResponseTaskResponse']>();

export const createTask = (data: components['schemas']['TaskRequest']) =>
  APIBuilder.post('/v1/task', data).withCredentials(true).build().call<components['schemas']['ApiResponseTaskResponse']>();

export const updateTask = (taskId: string, data: components['schemas']['TaskRequest']) =>
  APIBuilder.put(`/v1/task/${taskId}`, data).withCredentials(true).build().call<components['schemas']['ApiResponseTaskResponse']>();

export const deleteTask = (taskId: string) =>
  APIBuilder.delete(`/v1/task/${taskId}`).withCredentials(true).build().call<components['schemas']['ApiResponseString']>();

export const fetchTasksByDate = (date: string) =>
  APIBuilder.get(`/v1/task/date/${date}`).withCredentials(true).build().call<components['schemas']['ApiResponseTaskSummaryResponse']>();

export const toggleTaskDone = (taskId: string) =>
  APIBuilder.patch(`/v1/task/done/${taskId}`).withCredentials(true).build().call<components['schemas']['ApiResponseTaskResponse']>();
