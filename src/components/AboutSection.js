import React from "react";
import home1 from "../images/home1.png";

const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make </h2>
                    </div>
                    <div className="hide">
                        <h2>
                            your <span>dreams</span> come
                        </h2>
                    </div>
                    <div className="hide">
                        <h2>true</h2>
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae quibusdam hic laboriosam sequi earum impedit soluta
                    voluptatibus aliquid, quidem reiciendis!
                </p>
                <button>Contact Us</button>
            </div>
            <div className="image">
                <img src={home1} alt="A person with a professinoal camera" />
            </div>
        </div>
    );
};

export default AboutSection;
