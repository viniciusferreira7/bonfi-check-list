import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0 ;
  padding:0;
  box-sizing: border-box;
  user-select: none;
}

::-webkit-scrollbar{
  width: 10px;
}

::-webkit-scrollbar-thumb{
  background-color: ${(props) => props.theme['blue-700']};
  border-radius: 5px;

}

::-webkit-scrollbar-track{
  background-color: ${(props) => props.theme['white-200']};
  border-radius: 5px;

}

body, input, textarea, button{
  font-family: 'Exo 2', sans-serif;
  font-weight:400;
  outline: 0;
}

body {
  background-color: ${(props) => props.theme['gray-300']};
}

`
