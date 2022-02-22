import React, { useState } from "react";
import ListItem from "./ListItem";
import Search from "./Search";
import RestaurantData from "../Data";

const RestaurantList = () => {
  let restaurantList = RestaurantData.map((restaurant) => (
    <ListItem restaurant={restaurant} />
  ));
  return (
    <div>
      <Search />
      {restaurantList}
    </div>
  );
};

export default RestaurantList;
