import { useMediaQuery } from 'usehooks-ts';

const useBreakpoints = () => {
  const isXs = useMediaQuery('(max-width: 319px)');
  const isMobile = useMediaQuery('(min-width: 320px) and (max-width: 479px)');
  const isTablet = useMediaQuery('(min-width: 480px) and (max-width: 1023px)');
  const isPc = useMediaQuery('(min-width: 1024px)');

  return {
    isXs,
    isMobile,
    isTablet,
    isPc,
  };
};

export default useBreakpoints;
