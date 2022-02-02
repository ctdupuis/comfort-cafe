import React, { useState } from 'react';
import { useHistory } from 'react-router';
import OrderDisplay from './OrderDisplay';

export default function OrderConfirm({ currentUser, order, completeOrder }) {
  const [confirmed, setConfirmed] = useState(false);

  const history = useHistory();

  const handleCancel = () => {
    history.replace("/order");
  }

  const handleConfirm = async() => {
    if (window.confirm("Press 'OK' if you are positive these details are correct.")) {
      const complete = await completeOrder(order._id);
      setConfirmed(true);
    }
  }

  return (
    <OrderDisplay currentUser={currentUser} order={order} confirmed={confirmed} handleConfirm={handleConfirm} handleCancel={handleCancel} />
  );
}
