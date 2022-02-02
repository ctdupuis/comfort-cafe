import React, { useState } from 'react';
import "../../stylesheets/alert.css";
import { CgClose } from 'react-icons/cg'

export default function AlertHandler({ alert }) {
    const [test, setTest] = useState({ type: "", message: ""});
    const [display, setDisplay] = useState(false);

    const testAlert = type => {
        setTest({ type: type, message: "Invalid username or password"})
    }

    const handleTest = async(type) => {
        const first = await testAlert(type);
        setDisplay(true)
    }

    const handleClose = () => {
        setDisplay(false)
    }

    const alertDisplay = <div className={`alert-cont ${test.type}`}>
        <div className="alert">{test.message}</div>
        <div onClick={handleClose} style={{textAlign:"right"}}><CgClose className="close" /></div>
    </div>

    return <div className="strict-flex space-center">
        
        { display ? alertDisplay : 
        <>
            <button onClick={() => handleTest('success')}>Test Success Alert</button>
            <button onClick={() => handleTest('error')}>Test Error Alert</button>
        </> }
    </div>;
}
