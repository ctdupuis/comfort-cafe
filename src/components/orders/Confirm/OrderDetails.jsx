import React from 'react';

export default function OrderDetails({ order }) {

    const itemDisplay = order.items.map((item, idx) => {
        return(<div style={{width:"100%", margin:"2% 0"}} className="strict-flex space-bet" key={idx}>
            <li className="order-det-item">{item.name}</li>
            <li className="order-det-item">${item.price["$numberDecimal"]}</li>
        </div>)
    })

    const totalsDisplay = <div style={{width:"100%"}} className="strict-flex end col space-end">
        <li className="order-det-item">Subtotal: ${order.subtotal["$numberDecimal"]}</li>
        <li className="order-det-item">Tax: ${order.tax["$numberDecimal"]}</li>
        <li className="order-det-item">Total: ${order.total["$numberDecimal"]}</li>
    </div>

    return(<>
        <div className="title" style={{padding: "3%"}}>
          <h3>Your Order</h3>
        </div>
        <div className="flex-container" style={{flexDirection:"column", justifyContent:"flex-start"}}>
            {itemDisplay}
            {totalsDisplay}
        </div>
    </>);
}
