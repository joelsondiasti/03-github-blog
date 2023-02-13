import {
  FaBuilding,
  FaExternalLinkAlt,
  FaGithub,
  FaUserFriends,
} from 'react-icons/fa'
import { GithubProfileInfo } from '../../pages/Home'
import { GithubLink, ProfileContainer, ProfileInfo } from './styles'

type ProfileProps = { user: GithubProfileInfo }
export function Profile({ user }: ProfileProps) {
  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt={user.login} />
      <div>
        <h1>{user.name}</h1>
        <span>{user.bio}</span>
        <ProfileInfo>
          <div>
            <FaGithub />
            <span>{user.login}</span>
          </div>
          {user.company && (
            <div>
              <FaBuilding />
              <span>{user.company}</span>
            </div>
          )}
          <div>
            <FaUserFriends />
            <span>{user.followers} seguidores</span>
          </div>
        </ProfileInfo>
        <GithubLink href={user.html_url}>
          <span>Github</span>
          <FaExternalLinkAlt size={12} />
        </GithubLink>
      </div>
    </ProfileContainer>
  )
}
