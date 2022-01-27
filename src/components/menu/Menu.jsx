import React, { useEffect, useState } from 'react';

export default function Menu({ getItems, items }) {
    
    useEffect(() => {
        getItems();
    }, [])

    return (
        <div className="wrapper">
            This is the Menu Page
        </div>
    )
}
