import React, { useEffect, useState } from 'react';

export default function Menu({ getItems, items }) {
    
    const [menuItems, setMenuItems] = useState(items);

    useEffect(() => {
        getItems();
    }, [])

    let categories, uniqCategories;

    const handleCategories = items => {
        if (items.length > 1) {
            categories = items.map(item => item.categories).flat(1).filter((item, pos, self) => self.indexOf(item) == pos)
            return categories
        } else {
            return <div>Loading...</div>
        }
    }


    return (
        <div className="wrapper">
            {handleCategories(items)}
        </div>
    )
}
