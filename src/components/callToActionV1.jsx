import React from "react";
import { styled } from "styled-components";
import Container from "./container";
import Button from "./button";
const CallToActionV1Styled = styled.section`
    background-color: var(--blackOpacified);
    position: relative;
    .title_call-to-action{
        font-size: 3.2rem;
        font-weight: 900;
        text-align: center;
        margin-bottom:3.65rem;
    }
    .container-copy{
        position: absolute;
        left: 0;
        right: 30%;
        margin: 5.3rem 0;
        padding: 2.5rem;
        text-align: center;
        background: rgb(255,133,133);
        background: -moz-linear-gradient(270deg, rgba(255,133,133,1) 0%, rgba(196,19,48,1) 100%);
        background: -webkit-linear-gradient(270deg, rgba(255,133,133,1) 0%, rgba(196,19,48,1) 100%);
        background: linear-gradient(270deg, rgba(255,133,133,1) 0%, rgba(196,19,48,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff8585",endColorstr="#c41330",GradientType=1);
    }
`

const CallToActionV1 = () => {
    return (
        <CallToActionV1Styled>
            <Container>
                <div className="container-copy">
                    <h2 className="title_call-to-action">Earnnest Money<br/> Deposit</h2>
                    <Button cssClass="btn black" text="GET STARTED" link="#ordernow"></Button>
                </div>
            </Container>
        </CallToActionV1Styled>
    )
}

export default CallToActionV1;