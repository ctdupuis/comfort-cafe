import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import OrderItem from './OrderItem';

export default function Order({ order, getOrder, items, getItems }) {

    const [currentCat, setCurrentCat] = useState("specials");
    const [orderComplete, setOrderComplete] = useState(false);
    const [currentOrder, updateCurrentOrder] = useState({
        items: [] 
    });

    useEffect(() => {
        getItems();
        getOrder();
    }, [])

    const classHandler = {
        true: "active",
        false: "inactive"
    }

    const handleClick = e => {
        setCurrentCat(e.target.innerText);   
    }

    const categories = items.length > 0 ? items.map(item => item.categories).flat(1).filter((item, pos, self) => self.indexOf(item) === pos) : null

    const menu = categories ?
    items.map(item => {
        if (item.categories.includes(currentCat)) {
            return item
        }
    }).filter(item => !!item).map((el, idx) => <OrderItem key={idx} item={el} />)
    :
    null

    const headers = categories ? categories.map((cat, idx) => {
        return(
        <div onClick={handleClick} key={idx} className={classHandler[currentCat === cat]}>
            {cat}
        </div>
        )
    }) : null

    return (
        <>
            <div id="cat-cont">
                {headers}
            </div>
            <div style={{flexDirection: "column"}} className="flex-container">
            <Cart currentOrder={currentOrder} />
                {menu}
            </div>
        </>
    )
}
