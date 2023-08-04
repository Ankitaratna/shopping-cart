import { useState } from 'react';

const useCurrentPage = () => {
  const pages: string[] = ['home', 'shipping', 'checkout'];
  const [currentState, setCurrentState] = useState<{ pageNo: number; page: string }>({ pageNo: 0, page: 'home' });

  const goPreviousPage = (curr: { pageNo: number }) => {
    const { pageNo } = curr;
    setCurrentState({ pageNo: pageNo - 1, page: pages[pageNo - 1] });
  };

  const goNextPage = (curr: { pageNo: number }) => {
    const { pageNo } = curr;
    setCurrentState({ pageNo: pageNo + 1, page: pages[pageNo + 1] });
  };

  return {
    currentState,
    goPreviousPage,
    goNextPage,
  };
};

export default useCurrentPage;
