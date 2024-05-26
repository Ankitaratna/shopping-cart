import React, { createContext, useState, ReactNode } from "react";

interface PageContextProps {
  currentState: object;
  goPreviousPage: Function;
  goNextPage: Function;
  setCurrentState: Function;
  isSubmitDisabled:boolean;
  isContinueDisabled:boolean;
  disableSubmit:Function;
  disableContinue:Function;
}

export const PageContext = createContext<PageContextProps | undefined>(
  undefined
);

interface PageContextProviderProps {
  children: ReactNode;
}

export const PageContextProvider: React.FC<PageContextProviderProps> = ({
  children,
}) => {
  const pages: string[] = ["home", "shipping", "checkout"];
  const [currentState, setCurrentState] = useState<{
    pageNo: number;
    page: string;
  }>({ pageNo: 0, page: "home" });

  const [isSubmitDisabled,disableSubmit]=useState<boolean>(true);
  const [isContinueDisabled,disableContinue]=useState<boolean>(true);

  const goPreviousPage = (curr: { pageNo: number }) => {
    const { pageNo } = curr;
    setCurrentState({ pageNo: pageNo - 1, page: pages[pageNo - 1] });
  };

  const goNextPage = (curr: { pageNo: number }) => {
    const { pageNo } = curr;
    setCurrentState({ pageNo: pageNo + 1, page: pages[pageNo + 1] });
  };

  const contextValue: PageContextProps = {
    currentState,
    goPreviousPage,
    goNextPage,
    setCurrentState,
    isSubmitDisabled,
    isContinueDisabled,
    disableSubmit,
    disableContinue
  };

  return (
    <PageContext.Provider value={contextValue}>{children}</PageContext.Provider>
  );
};
