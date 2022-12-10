import React from "react";
import { useSelector } from "react-redux";

const MoneyBar = () => {
  const currentBudget = useSelector(
    (state) => state.ProductSlice.currentBudget
  );
  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        background: "linear-gradient(180deg, #2ecc71, #1abc9c)",
        fontFamily: "Roboto,sans-serif",
        color: "white",
        fontSize: "32px",
        textAlign: "center",
        padding: "20px",
        margin: "10px auto 10px",
        zIndex: "9999",
        fontWeight: "bold",
      }}
    >
      ${currentBudget}
    </div>
  );
};

export default MoneyBar;
