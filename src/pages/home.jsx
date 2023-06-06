import React from "react";
import { styled } from "styled-components";
import MainBackground from '../images/image-background-main-section.webp'
import Button from "../components/button";
import Container from "../components/container";
import CallToActionV1 from "../components/callToActionV1";

const HomeStyled = styled.div`
    main{
        background-image: url(${MainBackground});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-bottom: 11px solid var(--pinkColor);
        min-height: 85vh;
        position: relative;
    }
    .title{
        font-size:4.8rem ;   
    }
    .copyContainer{
        position: absolute;
        bottom: 5%;
    }
`
const Home = () =>{
    return(
        <HomeStyled>
        <main>
            <Container>
                <div className="copyContainer">
                    <h1 className="title textshadow">NEED A<br/> TITLE FAST?</h1>
                    <p className="textshadow">SPEED PRECISION & EXCEPTIONAL SERVICE</p>
                    <Button cssClass="btn pink" text="ORDER TITLE NOW" link="#ordernow"/>
                </div>
            </Container>
        </main>
        <CallToActionV1/>
        <section className="Our-process">
            <Container>
                
            </Container>
        </section>
        
        </HomeStyled>
    )
}

export default Home;