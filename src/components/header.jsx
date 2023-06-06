import React from "react";
import styled  from "styled-components";
import { Link } from "react-router-dom";
import Container from "./container"
import CompanyLogo from "../images/Logo Rocket title inc - white version.webp"
import Button from "./button";

const HeaderStyled = styled.header`
background-color:var(--blackOpacified);
.menu-container ul{
   padding: 0;
}
`
function Header () {
    return(
        <HeaderStyled>
            <Container cssClass='flex space-around'>
                <Link to="/">
                    <img src={CompanyLogo} alt="Rocket Title inc"/>
                </Link>
                <nav className="menu-container">
                    <ul className="flex space-between">
                        <li><Link to="/Services">Services</Link></li>
                        <li><Link to="/Consumers">Consumers</Link></li>
                        <li><Link to="/Resources">Resources</Link></li>
                        <li><Link to="/About">About</Link></li>
                    </ul>
                </nav>
                <Button cssClass="btn border-white" text="Contact us" link="/contact-us" />
            </Container>
        </HeaderStyled>
    )
    
}

export default Header;