import React, { useState } from "react";
import RowWrapper from "../RowWrapper/RowWrapper";
import { StarshipDetails } from "../sw-components";
import { StarshipList } from "../sw-components/item-lists";

const StarshipsPage = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <RowWrapper
      left={<StarshipList onItemSelected={setSelectedId} />}
      right={<StarshipDetails itemId={selectedId} />}
    />
  );
};

export default StarshipsPage;
