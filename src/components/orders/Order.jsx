import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import Checkout from './Cart/Checkout';
import OrderItem from './Details/OrderItem';
import StartOrder from './StartOrder';
import { useHistory } from 'react-router';

export default function Order({ getOrder, clearOrder, checkHistory, currentUser, order, items, getItems, createOrder, updateOrder }) {

    const [currentCat, setCurrentCat] = useState("specials");
    const [isOrdering, setIsOrdering] = useState(false);
    const [isPaying, setIsPaying] = useState(false);
    const [currentOrder, updateCurrentOrder] = useState({
        items: [],
        subtotal: 0.00,
        tax: 0.00,
        total: 0.00 
    });

    const history = useHistory();

    useEffect(() => {
        getItems();
        order ? toggleOrderStart() : orderCheck();
    }, [])

    const orderCheck = () => {
        getOrder();
        checkHistory();
    }

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

    const handleConfirm = () => {
        history.replace("/confirm");
    }

    const categories = items.length > 0 ? items.map(item => item.categories).flat(1).filter((item, pos, self) => self.indexOf(item) === pos) : null

    const menu = categories ?
    items.map(item => {
        if (item.categories.includes(currentCat)) {
            return item
        }
    }).filter(item => !!item).map((el, idx) => <OrderItem key={el._id} item={el} currentOrder={currentOrder} order={order} updateCurrentOrder={updateCurrentOrder} updateOrder={updateOrder} />)
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
                    {!isPaying ? 
                    <Cart order={order} toggleCheckout={toggleCheckout} clearOrder={clearOrder}/>
                    :
                    <Checkout order={order} toggleCheckout={toggleCheckout} handleConfirm={handleConfirm} />}
                </div>
                <div className="flex-container" style={{flexDirection: "column"}}>
                    {menu}
                </div>
            </>
         }
        </>
    )
}
