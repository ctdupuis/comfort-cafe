import React from 'react'

export default function Special() {
    let date = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    return (
        <div className="content">
                <header className="content-head">
                    <div className="title">
                        Today's Special
                    </div>
                    <div className="flex-container">

                        <div className="date">
                            {days[date.getDay()]}
                        </div>
                        <div className="img-cont">
                            <img className="calendar" src="images/calendar.jpeg" alt="calendar icon" />
                        </div>
                    </div>
                </header>
                <div className="inner-content">
                    <div className="flex-container">
                        <h3>Cluck Fried Cow</h3><h3>$9.99</h3>
                    </div>
                    <div className="img-cont" >
                        <img className="food-img" src="images/chicken-fried-steak-2.jpeg" alt="Cluck Fried Cow" />
                    </div>
                    <p>
                        Treat your taste buds to our delicious chicken fried steak with a side of green beans and mashed potatoes with your choice of brown or white gravy. Add a side of biscuits for $1.99
                    </p>
                </div>
            </div>
    )
}
