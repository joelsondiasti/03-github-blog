import { useEffect, useState } from 'react'
import { PostList } from '../../components/PostList'
import { Profile } from '../../components/Profile'
import { useDebouncedValue } from '../../hooks/useDebouncedValue'
import { api } from '../../lib/axios'
import { Container, SearchContainer } from './styles'

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
  const [query, setQuery] = useState('')
  const [queryError, setQueryError] = useState(false)
  const debouncedValue = useDebouncedValue(query)

  useEffect(() => {
    const userInfo = async () => {
      const response = await api.get<GithubProfileInfo>(`users/joelsondiasti`)
      // console.log(response.data)
      setUser(response.data)
    }

    userInfo()
  }, [])

  useEffect(() => {
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

    const searchList = async () => {
      setQueryError(false)
      const response = await api.get('/search/issues', {
        params: {
          q: `${debouncedValue} repo:joelsondiasti/03-github-blog`,
        },
      })
      const { total_count: count, items } = response.data
      count === 0 ? setQueryError(true) : setIssues(items)
    }

    if (debouncedValue.length < 3) {
      issuesList()
    } else {
      searchList()
    }
  }, [debouncedValue])

  return (
    <Container>
      <Profile user={user} />
      <SearchContainer withError={queryError}>
        <div>
          <h2>Publicações</h2>
          <span>
            {issues.length > 1
              ? `${issues.length} publicações`
              : `${issues.length} publicação`}
          </span>
        </div>

        <input
          type="text"
          placeholder="Buscar conteúdo"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </SearchContainer>
      <PostList issues={[...issues]} />
    </Container>
  )
}
