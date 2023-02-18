import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  max-width: calc(100vw * 0.8);
  margin: 0 auto;

  @media (min-width: 1024px) {
    max-width: 864px;
  }
`
export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;

    text-decoration: none;
    color: ${(props) => props.theme.blue};
  }
`

export const PostInfo = styled.header`
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  padding: 2.5rem;
  margin-top: -8rem;
  border-radius: 0.625rem;

  h1 {
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 2rem;

    margin-top: -5.5rem;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme['base-span']};
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  svg {
    color: ${(props) => props.theme['base-label']};
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 1.5rem;
  }
`

export const Content = styled(ReactMarkdown)`
  padding: 2.5rem 2rem;
  text-align: justify;
  text-ident: none;

  p {
    margin-top: 1rem;
  }

  h1,
  h2,
  h3 {
    margin-top: 2rem;
  }

  ul,
  ol {
    margin-left: 3rem;
  }
`
