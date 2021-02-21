import React, { useEffect, useState } from "react";
import ErrorIndicator from "../error-indicator/ErrorIndicator";
import Spinner from "../spinner/Spinner";

const withData = (View) => {
  return (props) => {
    
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
      setIsLoading(true);
      props.getData()
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch(() => {
          setIsError(true);
          setIsLoading(false)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.getData]);

    if (isLoading) {
      return <Spinner />;
    }

    if (isError) {
      return <ErrorIndicator />
    }

    return <View {...props} data={data} />;
  };
};

export default withData;