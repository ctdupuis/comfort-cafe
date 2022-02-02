import React from 'react';

export default function UserDetails({ currentUser }) {

    const userDisplay = <div style={{ width:"100%"}} className="strict-flex col">
        <div className="flex-container" style={{justifyContent:"space-between"}}>
            <li className="order-det-item">Name:</li><li className="order-det-item">{currentUser.name.first} {currentUser.name.last}</li>
        </div>
        <div className="flex-container" style={{justifyContent:"space-between"}}>
            <li className="order-det-item">Email:</li><li className="order-det-item">{currentUser.email}</li>
        </div>
    </div>

    return(<> 
        <div className="title" style={{padding: "3%"}}>
          <h3>Your Information</h3>
        </div>
        <div className="flex-container" style={{flexDirection:"column", justifyContent:"flex-start"}}>
            {userDisplay}
        </div>
    </>);;
}
