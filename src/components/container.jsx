import React from "react";
import { styled } from "styled-components";

const ContainerSyled = styled.div`
    max-width: 1160px ;
    margin: 0 auto;
    padding:1rem;
    height: 100%;
`
function Container({ children, cssClass}){
    return (
        <ContainerSyled className={cssClass}>
            { children }
        </ContainerSyled>
    )
}

export default Container;