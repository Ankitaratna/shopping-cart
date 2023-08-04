import React, { useState } from "react";
import Home from "./containers/Home";
import Checkout from "./containers/checkout";
import { CartProvider } from "./Context/cartContext";
import useCurrentPage from "./customHooks/useCurrentPage";
import ShippingDetails from "./containers/shippingDetails";
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton } from "@mui/material";
import "./App.scss";

const ShoppingApp = () => {
  const { currentState, goPreviousPage, goNextPage } = useCurrentPage();
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  const handleSubmit = () => {
    setIsSubmitLoading(true);
    setTimeout(() => {
      setIsSubmitLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };
  return (
    <CartProvider>
      <div className="app-wrapper">
        <div className="page-switch-cta">
          {currentState?.page !== "home" && !isSubmitted && !isSubmitLoading ? (
            <button onClick={() => goPreviousPage(currentState)}>Back</button>
          ) : (
            <div></div>
          )}
          {currentState?.page !== "checkout" && isContinueDisabled ? (
            <button
              key={isContinueDisabled}
              onClick={() => goNextPage(currentState)}
              disabled
            >
              Continue
            </button>
          ) : currentState?.page !== "checkout" ? (
            <button
              key={isContinueDisabled}
              onClick={() => goNextPage(currentState)}
            >
              Continue
            </button>
          ) : currentState?.page === "checkout" &&
            !isSubmitted &&
            !isSubmitLoading ? (
            <button key={isContinueDisabled} onClick={() => handleSubmit()}>
              Submit
            </button>
          ) : (
            isSubmitted && (
              <IconButton
                onClick={() => {
                  setIsSubmitted(false);
                  goPreviousPage({ pageNo: 1, page: "shipping" });
                }}
              >
                <CloseIcon />
              </IconButton>
            )
          )}
        </div>

        {currentState?.page === "home" && (
          <Home setIsContinueDisabled={setIsContinueDisabled} />
        )}
        {currentState?.page === "shipping" && (
          <ShippingDetails setIsContinueDisabled={setIsContinueDisabled} />
        )}
        {currentState?.page === "checkout" &&
          !isSubmitLoading &&
          !isSubmitted && (
            <Checkout
              setIsContinueDisabled={setIsContinueDisabled}
              isSubmitLoading={isSubmitLoading}
            />
          )}
        {isSubmitted && !isSubmitLoading ? (
          <div className="success-card">
            <h3>Thank You!</h3>
            <p>Your order has been placed successfully.</p>
          </div>
        ) : isSubmitLoading ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        ) : (
          ""
        )}
      </div>
    </CartProvider>
  );
};

export default React.memo(ShoppingApp);
