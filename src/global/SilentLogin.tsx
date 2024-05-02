'use client';

import { useEffect } from 'react';
import { silentLogin } from '@/domains/user/utils/jwt';

const SilentLogin = () => {
  useEffect(() => {
    silentLogin();
  }, []);

  return null;
};

export default SilentLogin;
