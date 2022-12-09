import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const Section = () => {
  const items = useSelector((state) => state.ProductSlice.product);

  return (
    <div>
      {items.map((index) => (
        <Card
          key={index.item_id}
          name={index.item_name}
          cost={index.item_cost}
          img={index.item_img}
        />
      ))}
    </div>
  );
};

export default Section;
