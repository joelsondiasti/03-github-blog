import { PostList } from '../../components/PostList'
import { Profile } from '../../components/Profile'
import { SearchInput } from '../../components/SearchInput'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Profile />
      <SearchInput />
      <PostList />
    </Container>
  )
}
