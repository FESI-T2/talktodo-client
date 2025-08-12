import { Goal, GoalWithCount } from '@/goal/types';
import { ApiResponse } from '@/shared/types/api';

export type GetAllGoal = ApiResponse<Goal[]>;
export type ApiResponseGoal = ApiResponse<Goal>;
export type ApiResponseGoalDetail = ApiResponse<GoalWithCount>;
export type ApiResponseGoalList = ApiResponse<Goal[]>;
export type ApiResponseGoalWithCountList = ApiResponse<GoalWithCount[]>;
export type ApiResponseString = ApiResponse<string | null>;
