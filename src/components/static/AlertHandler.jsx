import React, { useState } from 'react';
import "../../stylesheets/alert.css";
import { CgClose } from 'react-icons/cg'

export default function AlertHandler({ alert, clearAlert }) {

    const alertDisplay = <div className={`alert-cont ${alert.type}`}>
        <div className="alert">{alert.message}</div>
        <div onClick={() => clearAlert()} style={{textAlign:"right"}}><CgClose className="close" /></div>
    </div>

    return <div className="strict-flex space-center">
        
        { alert ? alertDisplay : null }
    </div>;
}
