export interface Goal {
  goalId: string;
  goalName: string;
  createdAt: string;
  modifiedAt: string;
}

export interface GoalWithCount extends Goal {
  completedTaskCount: number;
  incompleteTaskCount: number;
}
