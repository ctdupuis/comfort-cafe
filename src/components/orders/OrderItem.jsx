import React from 'react';

export default function OrderItem({ item }) {
  return(
    <div className="item-cont">
        <div className="strict-flex space-even">
            <div className="item-name">{item.name}</div>
            <div className="item-price">${item.price["$numberDecimal"]}</div>
        </div>
        <div className="item-desc">
            {item.description}
        </div>
        <button className="add-btn">Add</button>
    </div>
  );
}