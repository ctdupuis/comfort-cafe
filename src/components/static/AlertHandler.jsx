import React, { useState, useEffect } from 'react';
import "../../stylesheets/alert.css";
import { CgClose } from 'react-icons/cg'
import { useHistory } from 'react-router';

export default function AlertHandler({ alert, clearAlert }) {
    const history = useHistory();

   useEffect((alert) => {
      return history.listen((location) => clearAlert()) 
   },[history])

    const alertDisplay = <div className={`alert-cont ${alert.type}`}>
        <div className="alert">{alert.message}</div>
        <div onClick={() => clearAlert()} style={{textAlign:"right"}}><CgClose className="close" /></div>
    </div>

    return <div className="strict-flex space-center">
        
        { alert ? alertDisplay : null }
    </div>;
}
