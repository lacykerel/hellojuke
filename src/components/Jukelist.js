import React from 'react';
import Item from './Jukeitem';

const Jukelist = props => {
  const results = props.data;
  let items;

    if (results.length) {
      items = results.map(item => <Item name={item.name} key={item.id} />);
    } else {
      // items = <NoItems />
    }

  return (
    <div className="jukeList">
      <div className="table-row table-header">
        <div className="table-row-item">Title</div>
        <div className="table-row-item">Artist</div>
        <div className="table-row-item">Album</div>
      </div>
      {items}
    </div>
  )
}
export default Jukelist;
