import React from 'react';
import "../../stylesheets/contact.css";

export default function Contact() {
    return (
        <div style={{alignItems: "flex-start"}} className="wrapper flex-container wrapped">
            <div className="contact-cont">
                <div className="contact-title">
                    <h2>Our hours</h2>
                </div>
                <div className="contact-content">
                    <div className="flex-container">
                        <div className="day">Monday</div>
                        <div>9am - 9pm</div>
                    </div>
                    <div className="flex-container">
                        <div className="day">Tuesday</div>
                        <div>9am - 9pm</div>
                    </div>
                    <div className="flex-container">
                        <div className="day">Wednesday</div>
                        <div>9am - 9pm</div>
                    </div>
                    <div className="flex-container">
                        <div className="day">Thursday</div>
                        <div>9am - 9pm</div>
                    </div>
                    <div className="flex-container">
                        <div className="day">Friday</div>
                        <div>9am - 9pm</div>
                    </div>
                    <div className="flex-container">
                        <div className="day">Saturday</div>
                        <div>9am - 9pm</div>
                    </div>
                    <div className="flex-container">
                        <div className="day">Sunday</div>
                        <div>9am - 9pm</div>
                    </div>
                </div>
            </div>

            <div className="contact-cont">
                <div className="contact-title">
                    <h2>Contact info</h2>
                </div>
                <div className="flex-container">
                    <div className="flex-container col">
                        <div className="c-info">Phone</div>
                        <div className="c-info">Email</div>
                    </div>

                    <div className="flex-container col">
                        <div style={{color: "black"}}className="c-info">codyd@comfortcafe.com</div>
                        <div style={{color: "black"}}className="c-info">(337) 555-5555</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
