import React from 'react';

const Item = props => (
  <div>
    <div className="table-row">
      <div className="table-row-item">{props.trackname}</div>
      <div className="table-row-item">{props.artist}</div>
      <div className="table-row-item">{props.album}</div>
    </div>
  </div>
);
export default Item;
