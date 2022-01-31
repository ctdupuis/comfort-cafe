import React, { useState } from 'react';

export default function OrderItemDetails({ item, toggleAdd, handleUpdate }) {
    const [qty, setQty] = useState(1);

    const increment = () => {
        if (qty < 20) {
            setQty(qty + 1)
        }
    }
    const decrement = () => {
        if (qty > 1) {
            setQty(qty - 1)
        }
    }

    const handleChange = e => setQty(parseInt(e.target.value))

    return <div className="details">

        <div className="strict-flex">
            <label className="det-label">Qty</label>
            <button className="inc" onClick={decrement}>-</button>
            <input type="number" max={20} min={1} step={1} value={qty} onChange={handleChange} />
            <button className="dec" onClick={increment}>+</button>
        </div>

        <div className="strict-flex">
            <label className="det-label">Requests</label>
            <input type="text" />
        </div>

        <div className="strict-flex space-start">
            <button onClick={handleUpdate}>Confirm</button>
            <button onClick={toggleAdd}>Cancel</button>
        </div>
    </div>;
}
