import React, { useState } from "react";
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list/ItemList";
import PlanetDetails from "../planet-details/PlanetDetails";
import RowWrapper from "../RowWrapper/RowWrapper";

const PlanetPage = () => {
  const [selectedId, setSelectedId] = useState(null);
  const swapiService = new SwapiService();

  const itemList = () => (
    <ItemList
      getData={swapiService.getAllPeople}
      onItemSelected={setSelectedId}
    />
  );

  const planetPage = () => (
    <PlanetDetails personId={selectedId} />
  )

  return (
    <RowWrapper
      left={itemList}
      right={planetPage}
    />
  );
};

export default PlanetPage;
