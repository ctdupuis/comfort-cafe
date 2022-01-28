import React from 'react';

export default function MenuItem({ item }) {
  return(
    <div className="item-cont">
        <div className="strict-flex">
            <div>{item.name}</div>
            <div>${item.price["$numberDecimal"]}</div>
        </div>
    </div>
  );
}
