import React, { useContext } from "react";
import { PageContext } from "../../Context/pageContext";
import {usePageHeader} from './usePageHeader';

export const PageHeader = () => {
  const {
    currentState,
    goPreviousPage,
    goNextPage,
    setCurrentState,
    isSubmitDisabled,
    isContinueDisabled,
    disableSubmit,
    disableContinue,
  } = useContext(PageContext);

  const {showBackButton}=usePageHeader();

  const renderRightButton=()=>{
    return <></>;

  }

  return (
    <div className="page-switch-cta">
      {showBackButton ? <div className="left-cta"></div> : ""}
      {renderRightButton()}
    </div>
  );
};
