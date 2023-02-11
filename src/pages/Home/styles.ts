import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  max-width: calc(100vw * 0.8);
  margin: 0 auto;

  @media (min-width: 1024px) {
    max-width: 864px;
  }
`
