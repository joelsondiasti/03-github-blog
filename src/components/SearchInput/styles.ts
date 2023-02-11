import styled from 'styled-components'

export const SearchContainer = styled.form`
  margin-top: 4.5rem;

  h2 {
    font-size: 1.125rem;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  input {
    width: 100%;
    margin-top: 0.75rem;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};

    &:focus {
      border-color: ${(props) => props.theme.blue};
      color: ${(props) => props.theme['base-text']};
    }

    &:placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
