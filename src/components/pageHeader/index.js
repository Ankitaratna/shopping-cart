import React, { useContext } from "react";
import { PageContext } from "../../Context/pageContext";

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

  return (
    <div className="page-switch-cta">
     
    </div>
  );
};
