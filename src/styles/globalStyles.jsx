import { createGlobalStyle } from "styled-components";
import imgGlobalbackground from "../images/background-start.svg"
const GlobalStyle = createGlobalStyle`

    :root{
        --pinkColor:#C41330;
        --pinklinghtColor:#FF8585;
        --elementpadding: 2.7rem;
        --blackOpacified:#00000095;

    }
    body{
        margin: 0;
        padding: 0; 
        font-size: 20px;
        color: white;
        background-image: url(${imgGlobalbackground});
        font-weight: 400;
    
        
    }
    *{
        font-family: 'Outfit',system-ui, -apple-system, BlinkMacSystemFont;
    }
    .gradient-text{
        background: -webkit-linear-gradient(var(--pinklinghtColor),var(--pinkColor));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

    }
    a{
        text-decoration: none;
        font-weight: 400;
        color:white;
        display: inline-block;
        
    }
    li{
        
        list-style: none;
    }
    .flex{
        display: flex;
        gap: 3.02rem ;
        align-items: center;
        &.space-around{
            justify-content: space-around;
        }
        &.space-between{
            justify-content: space-between
        }
    }
    .flex.space-evenly{
        justify-content: space-evenly;
        
    }
    
    .btn{
        color: white;
        padding: 1.1rem 2.3rem;
        text-transform: uppercase;
        font-weight: 600;
        border-radius:90px ;
        background-color: transparent;
        width: fit-content;
        height: fit-content;
        border-color: none;
        font-size: 0.75rem;
        font-weight: 800;
        &.pink{
            background-color: var(--pinkColor);
            border: none;
        }
        &.black{
            background-color: black;
        }
    }
    .btn.border-white{
        border: 1px solid white;
    }
    h1,p{
        margin: 1rem 0;
    }
    .textshadow{
        text-shadow:2px 2px 5px black;
    }
` 
export default GlobalStyle;