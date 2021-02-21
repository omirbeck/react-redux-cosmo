import React from 'react';
import PropTypes from 'prop-types'

const RowWrapper = ({left, right}) => (
  <div className="row mb2">
      <div className="col-md-6">
        {left}
      </div>
      <div className="col-md-6">
        {right}
      </div>
    </div>
)

RowWrapper.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
}

export default RowWrapper
