import React from 'react';

import GoalDetailClient from './GoalDetailClient';

export default function GoalDetailPage({ params }: { params: Promise<{ goalId: string }> }) {
  const { goalId } = React.use(params);

  return <GoalDetailClient goalId={goalId} />;
}
