import { useEffect, useState } from 'react';

type IconSize = 'L' | 'M' | 'S';
type DropdownSize = 'L' | 'M' | 'S';
type SidebarSize = 'PC' | 'MOBILE';

function getIconTypeByWidth(width: number): IconSize {
  if (width >= 1024) return 'L';
  if (width >= 768) return 'M';
  return 'S'; // 0~767
}

function getDropdownTypeByWidth(width: number): DropdownSize {
  if (width >= 768) return 'M';
  return 'S'; // 0~767
}

function getSidebarTypeByWidth(width: number): SidebarSize {
  if (width >= 1024) return 'PC';
  return 'MOBILE'; // 0~1023
}

export default function useResponsiveType() {
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const kebabType = getIconTypeByWidth(windowWidth);
  const dropdownType = getDropdownTypeByWidth(windowWidth);
  const sidebarType = getSidebarTypeByWidth(windowWidth);

  return { kebabType, dropdownType, sidebarType, windowWidth };
}
