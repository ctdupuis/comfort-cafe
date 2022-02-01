import React from 'react';

export default function OrderConfirm({ currentUser, order, completeOrder }) {
  return <button onClick={() => completeOrder(order._id)}>Complete Order</button>;
}
