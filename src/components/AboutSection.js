import React from "react";
import home1 from "../images/home1.png";
import styled from "styled-components";

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

// Styled Components
const StyledAbout = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;
const StyledDescription = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2 {
        font-weight: lighter;
    }
`;
const StyledImage = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;
const StyledHide = styled.div`
    overflow: hidden;
`;

export default AboutSection;
