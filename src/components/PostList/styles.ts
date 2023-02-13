import styled from 'styled-components'

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-top: 3rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`
export const PostItem = styled.article`
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  border: 2px solid transparent;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h1 {
      max-width: 70%;
      font-size: 1.25rem;
      line-height: 1.6;
    }
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`
