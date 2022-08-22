import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  gap: 2rem;

  padding: 1rem 0;

  background-color: ${(props) => props.theme['gray-300']};

  @media screen and (max-width: 768px) {
    padding: 1rem 0.4rem 0 0.2rem;
  }

  h2 {
    font-size: 1.3rem;
    color: ${(props) => props.theme['blue-700']};
    text-align: center;

    strong {
      font-style: italic;
      color: ${(props) => props.theme['blue-200']};
    }
  }
`
