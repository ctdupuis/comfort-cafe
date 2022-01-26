import React, { useEffect, useState } from 'react';

export default function Menu({ getItems }) {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        getItems();
    }, items)

    return (
        <div className="wrapper">
            This is the Menu Page
        </div>
    )
}
