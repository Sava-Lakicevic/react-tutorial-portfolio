import React from "react";
import home1 from "../images/home1.png";
import {
    StyledAbout,
    StyledDescription,
    StyledHide,
    StyledImage,
} from "../styles";

const AboutSection = () => {
    return (
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <h2>We work to make </h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>
                            your <span>dreams</span> come
                        </h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>true</h2>
                    </StyledHide>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae quibusdam hic laboriosam sequi earum impedit soluta
                    voluptatibus aliquid, quidem reiciendis!
                </p>
                <button>Contact Us</button>
            </StyledDescription>
            <StyledImage>
                <img src={home1} alt="A person with a professinoal camera" />
            </StyledImage>
        </StyledAbout>
    );
};

export default AboutSection;
