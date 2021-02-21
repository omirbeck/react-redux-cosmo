import React, { useState } from 'react';

import './ErrorButton.css';

const ErrorButton = () => {
  const [renderError, setRenderError] = useState(false);
  const foo = 0;

    if (renderError) {
      foo.bar = 0;
    }

    return (
      <button
        className="error-button btn btn-danger btn-lg"
        onClick={() => setRenderError(true)}>
        Throw Error
      </button>
    );
}

export default ErrorButton;