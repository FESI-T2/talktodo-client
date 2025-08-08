export interface Goal {
  goalId: string;
  goalName: string;
  createdAt: string;
  modifiedAt: string;
}

export interface GoalWithCount extends Goal {
  completedTaskCount: number;
  incompleteTaskCount: number;
  createdAt: string;
  modifiedAt: string;
}
export interface ApiResponseListGoalResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: Goal[];
}

export interface ApiResponseListGoalWithTaskCountResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: GoalWithCount[];
}
