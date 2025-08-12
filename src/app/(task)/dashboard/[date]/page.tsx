import React from 'react';

import DashboardByDateClient from './DashboardByDateClient';

export default function Page({ params }: { params: Promise<{ date: string }> }) {
  const { date } = React.use(params);
  return <DashboardByDateClient date={date} />;
}
