import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        box-sizing: border-box;
    }

    :focus{
      outline: 0;
    }

    body{
      font-family: 'Nunito', sans-serif;
      -webkit-font-smoothing: antialiased;
      background: ${(props) => props.theme['base-background']}
    }

    html{
        @media(max-width: 1080px){
            font-size:93.75% ;//15px
        }

        @media(max-width: 720px){
            font-size:87.5% ; //14px
        }
    }

    body, input, textarea, button{
      font: 400 1rem 'Nunito', sans-serif;
      color: ${(props) => props.theme['base-text']}
    }


    button{
      outline: 0;
      border: 0;
    }
`
