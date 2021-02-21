import React, { useState } from "react";
import RowWrapper from "../RowWrapper/RowWrapper";
import { PlanetDetails } from "../sw-components";
import { PlanetList } from "../sw-components/item-lists";

const PlanetsPage = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <RowWrapper
      left={<PlanetList onItemSelected={setSelectedId} />}
      right={<PlanetDetails itemId={selectedId} />}
    />
  );
};

export default PlanetsPage;
