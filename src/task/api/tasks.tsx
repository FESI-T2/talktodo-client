import APIBuilder from '@/shared/lib/api/apiBuilder';

import { TaskRequest } from '../types/request/task-request';
import { AllTaskResponse, DeleteTaskResponse, TaskResponse } from '../types/response';

export const fetchTask = (taskId: string) => APIBuilder.get(`/v1/task/${taskId}`).withCredentials(true).build().call<TaskResponse>();

export const createTask = (data: TaskRequest) => APIBuilder.post('/v1/task', data).withCredentials(true).build().call<TaskResponse>();

export const updateTask = (taskId: string, data: TaskRequest) =>
  APIBuilder.put(`/v1/task/${taskId}`, data).withCredentials(true).build().call<TaskResponse>();

export const deleteTask = (taskId: string) =>
  APIBuilder.delete(`/v1/task/${taskId}`).withCredentials(true).build().call<DeleteTaskResponse>();

export const fetchTasksByDate = (date: string) =>
  APIBuilder.get(`/v1/task/date/${date}`).withCredentials(true).build().call<AllTaskResponse>();

export const toggleTaskDone = (taskId: string) =>
  APIBuilder.patch(`/v1/task/done/${taskId}`).withCredentials(true).build().call<TaskResponse>();
