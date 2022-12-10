import React from "react";
import MoneyBar from "./MoneyBar";

const Header = () => {
  return (
    <div>
      <div style={{ background: "white", padding: "10px 0" }}>
        <img
          src="https://neal.fun/spend/billgates.jpg"
          alt="gate"
          style={{
            borderRadius: "125px",
            display: "block",
            width: "110px",
            height: "110px",
            margin: "10px auto 10px",
          }}
        />

        <div
          style={{
            fontSize: "32px",
            padding: "30px 20px",
            marginBottom: "10px",
            fontWeight: "700",
            textAlign: "center",
            lineHeight: "1.3em",
          }}
        >
          Spend Bill Gates' Money
        </div>
      </div>
      <MoneyBar />
    </div>
  );
};

export default Header;
