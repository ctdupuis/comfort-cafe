import React, { useState } from 'react';
import OrderItemDetails from './OrderItemDetails';

export default function OrderItem({ item, updateCurrentOrder }) {

    const [isAdding, setIsAdding] = useState(false);

    const toggleAdd = () => setIsAdding(!isAdding);

    const handleUpdate = e => {
        updateCurrentOrder(prevState => {
            return {
                ...prevState,
                items: [...prevState.items, item]
            }
        })
        setIsAdding(false);
    }



    const handleRemoveBtn = () => {

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
            {  !isAdding ?
            <button className="add-btn" onClick={toggleAdd}>Add</button> 
            :
            <OrderItemDetails item={item} toggleAdd={toggleAdd} handleUpdate={handleUpdate} />
            }
        </div>
    );
}