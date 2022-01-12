import React from 'react';
import Special from './Special/Special';
import "../Home/Home.css"
import Newsletter from './Newsletter/Newsletter';

export default function Home() {
    return (
        <div className="wrapper flex-container" style={{ alignItems: "flex-start"}}>
            <Special />
            <Newsletter />
        </div>
    )
}
