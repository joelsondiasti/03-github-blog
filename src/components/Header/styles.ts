import styled from 'styled-components'
import cover from '../../assets/cover.png'

export const HeaderBackground = styled.div`
  width: 100%;
  height: 296px;
  background: url(${cover});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: start;
  justify-content: center;

  img {
    margin-top: 4rem;
  }
`
