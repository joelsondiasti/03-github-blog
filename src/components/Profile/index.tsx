import {
  FaBuilding,
  FaExternalLinkAlt,
  FaGithub,
  FaUserFriends,
} from 'react-icons/fa'
import { GithubLink, ProfileContainer, ProfileInfo } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://avatars.githubusercontent.com/u/38875073?v=4" alt="" />
      <div>
        <h1>Joelson Dias</h1>
        <span>
          Full Stack Developer, Information Technology Teacher and student in
          constant learning. I have skills in: web programming, Node.js, React
          and React Native
        </span>
        <ProfileInfo>
          <div>
            <FaGithub />
            <span>joelsondiasti</span>
          </div>
          <div>
            <FaBuilding />
            <span>ByB Brasil</span>
          </div>
          <div>
            <FaUserFriends />
            <span>18 seguidores</span>
          </div>
        </ProfileInfo>
        <GithubLink href="http://github.com/joelsondiasti">
          <span>Github</span>
          <FaExternalLinkAlt size={12} />
        </GithubLink>
      </div>
    </ProfileContainer>
  )
}
