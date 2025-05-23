import React from 'react';
const ListComponent = ({ items, renderItem }) => {
  if (!items.length) {
    return <p>No items to display.</p>;
  }

  return <ul>{items.map(renderItem)}</ul>;
};

export default ListComponent;

