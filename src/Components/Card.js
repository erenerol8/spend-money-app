import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    padding: "0 20px 0 0",
    fontFamily: "Roboto, sans-serif",
    margin: "0 20px 10px 0",
  },
  wrapper: {
    maxWidth: "100%",
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 18,
    padding: "20px 15px",
    width: "100%",
  },
  image: {
    maxWidth: "100%",
    height: "120px",
    margin: "15px auto",
    objectFit: "contain",
  },
  title: {
    fontSize: "1.2rem",
    margin: theme.spacing(1),
    display: "block",
  },
  price: {
    fontSize: "1.2rem",
    margin: theme.spacing(1),
    color: "#24c486",
    fontWeight: "bold",
  },
  button_buy: {
    margin: theme.spacing(1),
    background: "linear-gradient(180deg, #2ecc71, #1abc9c)",
    color: "#fff",
    cursor: "pointer",
    border: "none",
    borderRadius: "3px",
    fontWeight: "700",
    padding: "10px 25px",
    fontSize: "16px",
  },
  button_sell: {
    margin: theme.spacing(1),
    background: "#f1f2f6",
    color: "#333",
    cursor: "pointer",
    border: "none",
    borderRadius: "3px",
    fontWeight: "700",
    padding: "10px 25px",
    fontSize: "16px",
  },
  input: {
    padding: "9px 12px",
    borderRadius: "3px",
    border: "1px solid #b2bec3",
    color: "#333",
    width: "60px",
    height: "20px",
    textAlign: "center",
    appearance: "none",
    "-moz-appearance": "none",
    "-webkit-appearance": "none",
  },
}));

const Card = ({ name, cost, img }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <img src={img} alt="fotograf" className={classes.image} />
        <h2 className={classes.title}>{name}</h2>
        <p className={classes.price}>${cost}</p>
        <div>
          <button className={classes.button_sell}>Sell</button>
          <input type="number" className={classes.input} step="any" />
          <button className={classes.button_buy}>Buy</button>
        </div>
      </div>
      <style>{`
      @media (max-width: 600px) {
        .${classes.wrapper} {
          font-size: 14px;
        }
        .${classes.title} {
          font-size: 1rem;
        }
        .${classes.price} {
          font-size: 1rem;
        }
        .${classes.button_buy} {
          font-size: 14px;
        }
        .${classes.button_sell} {
          font-size: 14px;
        }
        .${classes.input}{
          font-size: 14px;
        }
      }
    `}</style>
    </div>
  );
};

export default Card;
