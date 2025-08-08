'use client';
import { useEffect, useState } from 'react';

/*
  * useMount 훅은 컴포넌트가 마운트될 때와 언마운트될 때 상태를 관리합니다.
  * 이 훅은 컴포넌트가 마운트되었는지 여부를 나타내는 boolean 값을 반환합니다.
  * const isMounted = useMount();
  if (isMounted) return 
*/

const useMount = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  return isMounted;
};

export default useMount;
