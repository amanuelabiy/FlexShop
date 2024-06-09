import React from "react";
import { Rating as StarRating } from "@mui/material";

export const Rating = ({ rating }) => {
  return (
    <StarRating name="rating" defaultValue={rating} precision={0.1} readOnly />
  );
};
