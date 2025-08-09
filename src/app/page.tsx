import { redirect } from 'next/navigation';

import { getAccessToken } from './actions/auth/token';

export default function Home() {
  const accessToken = getAccessToken();

  if (!accessToken) return redirect('/login');
  else return redirect('/dashboard');
}
