import React from 'react';

export default function OrderItem({ item, updateCurrentOrder }) {

    const handleClick = e => {
        updateCurrentOrder(prevState => {
            return {
                ...prevState,
                items: [...prevState.items, item]
            }
        })
    }

    return(
        <div className="item-cont">
            <div className="strict-flex space-even">
                <div className="item-name">{item.name}</div>
                <div className="item-price">${item.price["$numberDecimal"]}</div>
            </div>
            <div className="item-desc">
                {item.description}
            </div>
            <button data-id={item._id} className="add-btn" onClick={handleClick}>Add</button>
        </div>
    );
}