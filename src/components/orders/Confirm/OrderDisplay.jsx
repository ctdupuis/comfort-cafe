import React from 'react';
import OrderDetails from './OrderDetails';
import UserDetails from './UserDetails';

export default function OrderDisplay({ currentUser, order, confirmed, handleConfirm, handleCancel }) {

    const incomplete = <div className="wrapper flex-container wrapped">
        <div className="content" style={{width: "95%"}}>
            <OrderDetails order={order} />     
            <UserDetails currentUser={currentUser} />
            
            <div className="strict-flex center space-center">
                <button onClick={handleConfirm}>Complete Order</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    </div>

    const complete = <div>Completed Order goes here</div>

    return confirmed ? complete : incomplete;
}
