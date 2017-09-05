import React from 'react';

const Item = props => (
  <div>
    <div className="table-row">
      <div className="table-row-item">N/A</div>
      <div className="table-row-item">{props.name}</div>
      <div className="table-row-item">N/A</div>
    </div>
  </div>
);
export default Item;
