import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "./item";

export default function ItemList() {
  const [ItemList, GetItemList] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:5000/projects/")
      .then(response => {
        console.log(response.data.results);
        GetItemList(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <section className="character-list">
      <h2>MY GET REQUEST</h2>
      {ItemList.map((items, id) => {
        return <ItemCard key={id} items={items} />;
      })}
    </section>
  );
}