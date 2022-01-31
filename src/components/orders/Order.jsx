import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import OrderItem from './OrderItem';
import StartOrder from './StartOrder';

export default function Order({ getOrder, currentUser, order, items, getItems, createOrder, updateOrder }) {

    const [currentCat, setCurrentCat] = useState("specials");
    const [isOrdering, setIsOrdering] = useState(false);
    const [isPaying, setIsPaying] = useState(false);
    const [currentOrder, updateCurrentOrder] = useState({
        items: [] 
    });

    useEffect(() => {
        getItems();
        order ? toggleOrderStart() : getOrder();
    }, [])

    const handleOrderStart = () => {
        createOrder(currentUser);
    }

    const toggleOrderStart = () => {
        setIsOrdering(true);
    }

    const toggleCheckout = () => {
        setIsPaying(!isPaying)
    }

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
    }).filter(item => !!item).map((el, idx) => <OrderItem key={el._id} item={el} orderID={order._id} updateCurrentOrder={updateCurrentOrder} updateOrder={updateOrder} />)
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
        { !isOrdering && !order ?  
            <StartOrder order={order} currentUser={currentUser} toggleOrderStart={toggleOrderStart} handleOrderStart={handleOrderStart} />
            :
            <>
                <div id="cat-cont">
                    {headers}
                </div>
                <div style={{flexDirection: "column"}} className="flex-container">
                    <Cart currentOrder={currentOrder}  />
                    {menu}
                </div>
            </>
         }
        </>
    )
}
