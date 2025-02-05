import React from "react";

export default function HomeData() {
    return (
        <div>
            <section
                className="home_bg"
                style={{ backgroundImage: "url(home_img.jpg)" }}>
                <div className="content">
                    <h1 className="heading">Discover the Timeless Beauty of Nature</h1>
                    <p>
                        Welcome to our celebration of natures wonders! Explore stunning landscapes <br/> and the
                        tranquility of the natural world.
                    </p>
                    <button>Explore More</button>
                </div>
            </section>
        </div>
    );
}
