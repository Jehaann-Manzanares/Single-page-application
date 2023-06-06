import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";


const ButtonStyled = styled.div`

`
function Button(props){
    return(
       <ButtonStyled>
            <Link className={props.cssClass} to={props.link}>{props.text}</Link>
       </ButtonStyled>
    )
}

export default Button;