import React from 'react'

export default function Newsletter() {
    return (
        <div class="content">
            <header class="content-head">
                <div class="title">
                    Weekly Newsletter
                </div>
                <div class="img-container" style={{margin: "0", padding: "2%"}}>
                    <img className="dev-laf" src="images/dev-laf.png" alt="Developing Lafayette logo" />
                </div>
            </header>
            <div class="inner-content">
                <h3>Developing Lafayette Visits Comfort Café</h3>
                <p>
                    We would like to extend our gratitude to Developing Lafayette for visiting the Comfort Cafe! Developing Lafayette is well known for visiting new startups around the Acadiana area to generate some buzz around local businesses. This week, they’ve honored us with a visit! Their journalists were able to interview the owners, get a taste for the menu, meet our staff, and get a feel of our atmosphere and work culture. We appreciate all the hard work that Developing Lafayette puts into developing Lafayette’s local businesses and invite you to check out their article!
                </p>

                <br />
                
                <a href="#" class="article-link">
                    Click here to see the full story
                </a>
            </div>
        </div>
    )
}
