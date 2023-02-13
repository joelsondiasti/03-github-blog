import { useEffect, useState } from 'react'
import { PostList } from '../../components/PostList'
import { Profile } from '../../components/Profile'
import { SearchInput } from '../../components/SearchInput'
import { api } from '../../lib/axios'
import { Container } from './styles'

export interface GithubProfileInfo {
  avatar_url: string
  html_url: string
  login: string
  followers: number
  name: string
  bio: string
  company: string | null
}

export function Home() {
  const [user, setUser] = useState<GithubProfileInfo>({} as GithubProfileInfo)

  useEffect(() => {
    const userInfo = async () => {
      const response = await api.get<GithubProfileInfo>(`users/joelsondiasti`)
      // console.log(response.data)
      setUser(response.data)
    }

    userInfo()
  }, [])

  return (
    <Container>
      <Profile user={user} />
      <SearchInput />
      <PostList />
    </Container>
  )
}
