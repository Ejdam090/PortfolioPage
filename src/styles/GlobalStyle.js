import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    :root{
        --primary-color:#007bff;
        --secondary-color:#6c757d;
        --background-dark-color: #10121A;
        --background-dark-color-2: #191d2b;
        --border-color:#2e344e;
        --background-light-color:#f1f1f1;
        --background-light-color-2: rgba(3,127,255, .3);
        --white-color:#FFF;
        --font-light-color:#a4acc4;
        --font-dark-color:#313131;
        --Font-dark-color-2:#151515;
        --sidebar-dark-color:#191d2b;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;
        --linked-color: #1976D2;
    }
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 1.2rem;
        font-family: 'Nunito', sans-serif;
        font-size: 1.2rem;
    }

    body{
        background-color: var(--background-dark-color);
        color: var(--font-light-color)
    }
    a{
        font-size: inherit;
        color:inherit;
        font-size: inherit;
        font-size: 1rem;
    }
    h1{
        font-size: 4rem;
        color: var(--white-color);
        span{
            font-size: 4rem;
        }
    }
    span{
        color: var(--primary-color);
    }
    @media (max-width: 1130px){
        h1{
            font-size: 2rem;
            span{
                font-size: 2rem;
            }
        }
    }
    ::-webkit-scrollbar {
width: 6px;
}
::-webkit-scrollbar-track {
border-left: 1px solid #000;
}
::-webkit-scrollbar-thumb {
background: #0e446c;
    box-shadow: inset 0 0 6px #0e446c;
}
::-webkit-scrollbar-thumb:hover {
background: #0e446c;
    box-shadow: inset 0 0 6px #0e446c;
}
::-webkit-scrollbar-thumb:window-inactive {
background: #0e446c;
border-radius: 10px;
} 
    
`;
export default GlobalStyled;
