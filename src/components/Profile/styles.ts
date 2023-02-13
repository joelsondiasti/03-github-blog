import styled from 'styled-components'

export const ProfileContainer = styled.section`
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  padding: 2.5rem;
  margin-top: -8rem;
  position: relative;
  border-radius: 0.625rem;

  &,
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }

  > div span {
    text-align: center;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 2rem;
    margin-top: -5.5rem;

    > div {
      align-items: flex-start;

      span {
        text-align: left;
      }
    }
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

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

export const GithubLink = styled.a`
  margin-top: 2rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  text-decoration: none;
  color: ${(props) => props.theme.blue};

  @media (min-width: 1024px) {
    position: absolute;
    margin-top: 0;
    right: 2.5rem;
  }
`
