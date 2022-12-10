import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import { Grid } from "@material-ui/core";

const Section = () => {
  const items = useSelector((state) => state.ProductSlice.product);

  return (
    <Grid container spacing={0}>
      {items.map((item, index) => (
        <Grid item xs={4} key={item.item_id}>
          <Card
            name={item.item_name}
            cost={item.item_cost}
            img={item.item_img}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Section;
