import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    display: "inline-block",
    padding: "20px 10px 20px 10px",
    marginRight: "10px",
  },
  image: {
    width: "150px",
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: "22px",
  },
  price: {
    color: "darkgreen",
    fontSize: "20px",
  },
  button: {
    marginRight: "10px",
    marginLeft: "10px",
    cursor: "pointer",
    border: "none",
    borderRadius: "3px",
    padding: "10px 12px",
    fontWeight: "700px",
  },
});

const Card = ({ name, cost, img }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={img} alt="fotograf" className={classes.image} />
      <h2 className={classes.title}>{name}</h2>
      <p className={classes.price}>${cost}</p>
      <div>
        <button className={classes.button}>Sell</button>
        <input type="text" />
        <button className={classes.button}>Buy</button>
      </div>
    </div>
  );
};

export default Card;
