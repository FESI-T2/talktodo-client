'use client';
import { useEffect } from 'react';
import { Tooltip } from 'react-tooltip';

import { getCurrentLogin } from '@/auth/utils/currentLogin';

const ToolTip = () => {
  useEffect(() => {
    const currentLogin = getCurrentLogin();
    if (!currentLogin) return;

    const btn = document.querySelector(`[data-variant="${currentLogin}"]`);
    if (!btn) return;

    btn.setAttribute('data-tooltip-id', 'login-tooltip');
  }, []);

  return <Tooltip id='login-tooltip' content='최근 로그인' place='top-end' />;
};

export default ToolTip;
