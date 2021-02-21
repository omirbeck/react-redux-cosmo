/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import ErrorButton from "../error-button/ErrorButton";
import Spinner from "../spinner/Spinner";

import "./item-details.css";

export const Record = ({ item, field, label }) => (
  <li className="list-group-item">
    <span className="term">{label}</span>
    <span>{item[field]}</span>
  </li>
);

const ItemDetails = (props) => {
  const { itemId, getData, getImageUrl } = props;

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (itemId) {
      setIsLoading(true);
      getData(itemId)
        .then((result) => setItem(result))
        .then(() => setIsLoading(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId, getData, getImageUrl]);

  if (!item) {
    return <span>Select a person from a list</span>;
  }

  const { id, name } = item;
  const image = getImageUrl(id);

  return !isLoading ? (
    <div className="person-details card">
      <img className="person-image" src={image} />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(props.children, (child) => (
            React.cloneElement(child, {item})
          ))}
        </ul>
        <ErrorButton />
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default ItemDetails;
