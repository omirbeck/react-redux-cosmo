import React, { useState } from "react";
import RowWrapper from "../RowWrapper/RowWrapper";
import { PersonDetails } from "../sw-components";
import { PersonList } from "../sw-components/item-lists";

const PeoplePage = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <RowWrapper
      left={<PersonList onItemSelected={setSelectedId} />}
      right={<PersonDetails itemId={selectedId} />}
    />
  );
};

export default PeoplePage;
