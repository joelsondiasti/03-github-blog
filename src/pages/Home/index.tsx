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

export interface IssueProps {
  body: string
  created_at: string
  title: string
  number: number
}
export interface IssuesListProps {
  length: number
  issues: IssueProps[]
}

export function Home() {
  const [user, setUser] = useState<GithubProfileInfo>({} as GithubProfileInfo)
  const [issues, setIssues] = useState<IssueProps[]>([])

  useEffect(() => {
    const userInfo = async () => {
      const response = await api.get<GithubProfileInfo>(`users/joelsondiasti`)
      // console.log(response.data)
      setUser(response.data)
    }

    const issuesList = async () => {
      const response = await api.get(
        'repos/joelsondiasti/03-github-blog/issues',
        {
          params: {
            direction: 'asc',
          },
        },
      )
      setIssues(response.data)
    }

    userInfo()
    issuesList()
  }, [])

  return (
    <Container>
      <Profile user={user} />
      <SearchInput />
      <PostList issues={[...issues]} />
    </Container>
  )
}
